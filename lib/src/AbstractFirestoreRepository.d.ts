import { DocumentSnapshot, QuerySnapshot } from '@google-cloud/firestore';
import { FirestoreCollectionType, IEntity, IQueryBuilder, IWherePropParam, IFirestoreVal, IQueryExecutor, IFireOrmQueryLine, IOrderByParams } from './types';
import { CollectionMetadata, MetadataStorageConfig } from './MetadataStorage';
import { BaseRepository } from './BaseRepository';
import { ValidationError } from 'class-validator';
export declare abstract class AbstractFirestoreRepository<T extends IEntity> extends BaseRepository implements IQueryBuilder<T>, IQueryExecutor<T> {
    protected readonly subColMetadata: CollectionMetadata[];
    protected readonly colMetadata: CollectionMetadata;
    protected readonly collectionType: FirestoreCollectionType;
    protected readonly colName: string;
    protected readonly config: MetadataStorageConfig;
    readonly collectionPath: string;
    constructor(nameOrConstructor: string | Function, collectionPath?: string);
    protected toSerializableObject: (obj: T) => Object;
    protected transformFirestoreTypes: (obj: T) => T;
    protected initializeSubCollections: (entity: T) => void;
    protected extractTFromDocSnap: (doc: DocumentSnapshot) => T;
    protected extractTFromColSnap: (q: QuerySnapshot) => T[];
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be equal to @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereEqualTo(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be greater than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereGreaterThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be greater or equal than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereGreaterOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be less than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereLessThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be less or equal than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereLessOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param val must be contained in @param prop.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    whereArrayContains(prop: IWherePropParam<T>, val: IFirestoreVal): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with a maximum number of results
     * to return. Can only be used once per query.
     *
     * @param {number} limitVal maximum number of results to return
     * Must be greater or equal than 0
     * @returns {IQueryBuilder<T>} QueryBuilder A new QueryBuilder with
     * the specified limit applied
     * @memberof AbstractFirestoreRepository
     */
    limit(limitVal: number): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with an additional ascending order
     * specified by @param prop. Can only be used once per query.
     *
     * @param {IWherePropParam<T>} prop field to be ordered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * ordering applied.
     * @memberof AbstractFirestoreRepository
     */
    orderByAscending(prop: IWherePropParam<T>): IQueryBuilder<T>;
    /**
     * Returns a new QueryBuilder with an additional descending order
     * specified by @param prop. Can only be used once per query.
     *
     * @param {IWherePropParam<T>} prop field to be ordered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * ordering applied.
     * @memberof AbstractFirestoreRepository
     */
    orderByDescending(prop: IWherePropParam<T>): IQueryBuilder<T>;
    /**
     * Execute the query and applies all the filters (if specified)
     *
     * @returns {Promise<T[]>} List of documents that matched the filters
     * (if specified)
     * @memberof AbstractFirestoreRepository
     */
    find(): Promise<T[]>;
    /**
     * Execute the query to find at least one document matching all
     * filters (if specified)
     *
     * @returns {Promise<T | null>} One document that matched the filters
     * (if specified), or null if none exists.
     *
     * @memberof AbstractFirestoreRepository
     */
    findOne(): Promise<T | null>;
    /**
     * Uses class-validator to validate an entity using decorators set in the collection class
     *
     * @param item class or object representing an entity
     * @returns {Promise<ValidationError[]>} An array of class-validator errors
     */
    validate(item: T): Promise<ValidationError[]>;
    /**
     * Takes all the queries stored by QueryBuilder and executes them.
     * Must be implemented by base repositores
     *
     * @abstract
     * @param {IFireOrmQueryLine[]} queries list of queries stored in
     * QueryBuilder
     * @param {number} [limitVal] (Optional) if a limit constraint
     * should be applied
     * @param {IOrderByParams} [orderByObj] (Optional) if a sortBy
     * clause should be applied
     * @returns {Promise<T[]>} results from firestore converted into
     * entities <T>
     * @memberof AbstractFirestoreRepository
     */
    abstract execute(queries: IFireOrmQueryLine[], limitVal?: number, orderByObj?: IOrderByParams, single?: boolean): Promise<T[]>;
}
