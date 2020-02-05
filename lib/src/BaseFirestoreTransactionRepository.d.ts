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
    txFindById(id: string, repo: BaseFirestoreRepository<T>): Promise<T>;
    create(item: WithOptionalId<T>): Promise<T>;
    private _create;
    txCreate(item: PartialBy<T, "id">, repo: BaseFirestoreRepository<T>): Promise<T>;
    update(item: T): Promise<T>;
    private _update;
    txUpdate(item: T, repo: BaseFirestoreRepository<T>): Promise<T>;
    delete(id: string): Promise<void>;
    private _delete;
    txDelete(id: string, repo: BaseFirestoreRepository<T>): Promise<void>;
    limit(): IQueryBuilder<T>;
    orderByAscending(): IQueryBuilder<T>;
    orderByDescending(): IQueryBuilder<T>;
}
