import { CollectionReference, Transaction } from '@google-cloud/firestore';
import { IEntity, IFireOrmQueryLine, WithOptionalId, IQueryBuilder, IRepository } from './types';
import { AbstractFirestoreRepository } from './AbstractFirestoreRepository';
export declare class TransactionRepository<T extends IEntity> extends AbstractFirestoreRepository<T> implements IRepository<T> {
    private collection;
    private transaction;
    constructor(collection: CollectionReference, transaction: Transaction, colName: string);
    execute(queries: IFireOrmQueryLine[]): Promise<T[]>;
    findById(id: string): Promise<T>;
    create(item: WithOptionalId<T>): Promise<T>;
    update(item: T): Promise<T>;
    delete(id: string): Promise<void>;
    limit(): IQueryBuilder<T>;
    orderByAscending(): IQueryBuilder<T>;
    orderByDescending(): IQueryBuilder<T>;
}
