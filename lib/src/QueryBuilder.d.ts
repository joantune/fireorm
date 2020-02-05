import { IQueryBuilder, IFireOrmQueryLine, IOrderByParams, IFirestoreVal, IQueryExecutor, IEntity, IWherePropParam } from './types';
export default class QueryBuilder<T extends IEntity> implements IQueryBuilder<T> {
    protected executor: IQueryExecutor<T>;
    protected queries: Array<IFireOrmQueryLine>;
    protected limitVal: number;
    protected orderByObj: IOrderByParams;
    constructor(executor: IQueryExecutor<T>);
    private extractWhereParam;
    whereEqualTo(param: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    whereGreaterThan(prop: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    whereGreaterOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    whereLessThan(prop: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    whereLessOrEqualThan(prop: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    whereArrayContains(prop: IWherePropParam<T>, val: IFirestoreVal): QueryBuilder<T>;
    limit(limitVal: number): QueryBuilder<T>;
    orderByAscending(prop: IWherePropParam<T>): QueryBuilder<T>;
    orderByDescending(prop: IWherePropParam<T>): QueryBuilder<T>;
    find(): Promise<T[]>;
    findOne(): Promise<T | null>;
}
