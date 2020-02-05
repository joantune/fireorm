import { CollectionReference, Transaction } from '@google-cloud/firestore';
import { IEntity, IFireOrmQueryLine, WithOptionalId, IQueryBuilder, IRepository, ITXRepository, PartialBy } from './types';
import { AbstractFirestoreRepository } from './AbstractFirestoreRepository';
import { BaseFirestoreRepository } from "./BaseFirestoreRepository";
export declare class TransactionRepository<T extends IEntity> extends AbstractFirestoreRepository<T> implements IRepository<T>, ITXRepository<T> {
    private collection;
    private transaction;
    constructor(collection: CollectionReference, transaction: Transaction, colName: string);
    execute(queries: IFireOrmQueryLine[]): Promise<T[]>;
    findById(id: string): Promise<T>;
    private _findById;
    txFindById<E extends IEntity>(id: string, repo: BaseFirestoreRepository<E>): Promise<E>;
    create(item: WithOptionalId<T>): Promise<T>;
    private _create;
    txCreate<E extends IEntity>(item: PartialBy<E, "id">, repo: BaseFirestoreRepository<T>): Promise<E>;
    update(item: T): Promise<T>;
    private _update;
    txUpdate<E extends IEntity>(item: E, repo: BaseFirestoreRepository<E>): Promise<E>;
    delete(id: string): Promise<void>;
    private _delete;
    txDelete<E extends IEntity>(id: string, repo: BaseFirestoreRepository<E>): Promise<void>;
    limit(): IQueryBuilder<T>;
    orderByAscending(): IQueryBuilder<T>;
    orderByDescending(): IQueryBuilder<T>;
}
