import { OrderByDirection, DocumentReference } from '@google-cloud/firestore';
import { BaseFirestoreRepository } from './BaseFirestoreRepository';
export declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export interface IRepository<T extends {
    id: string;
}> {
    limit(limitVal: number): IQueryBuilder<T>;
    orderByAscending(prop: keyof T & string): IQueryBuilder<T>;
    orderByDescending(prop: keyof T & string): IQueryBuilder<T>;
    findById(id: string): Promise<T>;
    create(item: PartialBy<T, 'id'>): Promise<T>;
    update(item: T): Promise<T>;
    delete(id: string): Promise<void>;
}
export interface ITXRepository<T extends {
    id: string;
}> {
    txFindById(id: string, repo: BaseFirestoreRepository<T>): Promise<T>;
    txCreate(item: PartialBy<T, 'id'>, repo: BaseFirestoreRepository<T>): Promise<T>;
    txUpdate(item: T, repo: BaseFirestoreRepository<T>): Promise<T>;
    txDelete(id: string, repo: BaseFirestoreRepository<T>): Promise<void>;
}
export declare type WithOptionalId<T extends {
    id: unknown;
}> = Pick<T, Exclude<keyof T, 'id'>> & Partial<Pick<T, 'id'>>;
export declare type IFirestoreVal = string | number | Date | Boolean | DocumentReference;
export declare enum FirestoreOperators {
    equal = "==",
    lessThan = "<",
    greaterThan = ">",
    lessThanEqual = "<=",
    greaterThanEqual = ">=",
    arrayContains = "array-contains"
}
export declare enum FirestoreCollectionType {
    collection = "collection",
    subcollection = "subcollection"
}
export interface IFireOrmQueryLine {
    prop: string;
    val: IFirestoreVal;
    operator: FirestoreOperators;
}
export interface IOrderByParams {
    fieldPath: string;
    directionStr: OrderByDirection;
}
export declare type IQueryBuilderResult = IFireOrmQueryLine[];
export declare type IWherePropParam<T> = keyof T | ((t: T) => unknown);
export interface IQueryBuilder<T extends IEntity> {
    whereEqualTo(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    whereGreaterThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    whereGreaterOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    whereLessThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    whereLessOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    whereArrayContains(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    orderByAscending(prop: IWherePropParam<T>): IQueryBuilder<T>;
    orderByDescending(prop: IWherePropParam<T>): IQueryBuilder<T>;
    limit(limitVal: number): IQueryBuilder<T>;
    find(): Promise<T[]>;
    findOne(): Promise<T | null>;
}
export interface IQueryExecutor<T> {
    execute(queries: IFireOrmQueryLine[], limitVal?: number, orderByObj?: IOrderByParams, single?: boolean): Promise<T[]>;
}
export declare type ISubCollection<T extends IEntity> = BaseFirestoreRepository<T>;
export interface IEntity {
    id: string;
}
export declare type InstanstiableIEntity = {
    new (): IEntity;
};
