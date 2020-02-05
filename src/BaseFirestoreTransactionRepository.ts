import {
  CollectionReference,
  Transaction,
  WhereFilterOp,
} from '@google-cloud/firestore';

import {
  IEntity,
  IFireOrmQueryLine,
  WithOptionalId,
  IQueryBuilder,
  IRepository,
  ITXRepository, PartialBy
} from './types';

import { AbstractFirestoreRepository } from './AbstractFirestoreRepository';
import {BaseFirestoreRepository} from "./BaseFirestoreRepository";

export class TransactionRepository<T extends IEntity>
  extends AbstractFirestoreRepository<T>
  implements IRepository<T>, ITXRepository<T> {
  constructor(
    private collection: CollectionReference,
    private transaction: Transaction,
    colName: string
  ) {
    super(colName);
  }

  execute(queries: IFireOrmQueryLine[]): Promise<T[]> {
    const query = queries.reduce((acc, cur) => {
      const op = cur.operator as WhereFilterOp;
      return acc.where(cur.prop, op, cur.val);
    }, this.collection);

    return this.transaction.get(query).then(this.extractTFromColSnap);
  }

  findById(id: string): Promise<T> {
    return this._findById(id, this.collection);
  }

  private _findById(id: string, collection: CollectionReference): Promise<T> {
    const query = collection.doc(id);
    return this.transaction.get(query).then(this.extractTFromDocSnap);
  }

  txFindById(id: string, repo: BaseFirestoreRepository<T>): Promise<T> {
    return this._findById(id, repo.firestoreColRef);
  }

  async create(item: WithOptionalId<T>): Promise<T> {
   return this._create(item, this.collection);
  }

  private async _create(item: WithOptionalId<T>, collection: CollectionReference): Promise<T> {
     if (this.config.validateModels) {
      const errors = await this.validate(item as T);

      if (errors.length) {
        throw errors;
      }
    }

    const doc = item.id ? collection.doc(item.id) : collection.doc();

    if (!item.id) {
      item.id = doc.id;
    }

    await this.transaction.set(doc, this.toSerializableObject(item as T));

    this.initializeSubCollections(item as T);

    return item as T;
  }

  async txCreate(item: PartialBy<T, "id">, repo: BaseFirestoreRepository<T>): Promise<T> {
    return this._create(item, repo.firestoreColRef);
  }

  async update(item: T): Promise<T> {
    return this._update(item, this.collection);
  }
  private async _update(item: T, collection: CollectionReference): Promise<T> {
    if (this.config.validateModels) {
      const errors = await this.validate(item);

      if (errors.length) {
        throw errors;
      }
    }

    const query = collection.doc(item.id);
    await this.transaction.update(query, this.toSerializableObject(item));

    return item;
  }

  async txUpdate(item: T, repo: BaseFirestoreRepository<T>): Promise<T> {
    return this._update(item, repo.firestoreColRef);
  }

  async delete(id: string): Promise<void> {
    return this._delete(id, this.collection);
  }

  private async _delete(id: string, collection: CollectionReference): Promise<void> {
    await this.transaction.delete(collection.doc(id));
  }

  txDelete(id: string, repo: BaseFirestoreRepository<T>): Promise<void> {
    return this._delete(id, repo.firestoreColRef);
  }

  limit(): IQueryBuilder<T> {
    throw new Error('`limit` is not available for transactions');
  }

  orderByAscending(): IQueryBuilder<T> {
    throw new Error('`orderByAscending` is not available for transactions');
  }

  orderByDescending(): IQueryBuilder<T> {
    throw new Error('`orderByDescending` is not available for transactions');
  }


}
