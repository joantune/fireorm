import { BaseFirestoreRepository } from './BaseFirestoreRepository';
import { IEntity } from './types';
export declare function getRepository<T extends IEntity>(entity: {
    new (): T;
}, documentPath?: string): BaseFirestoreRepository<T>;
/**
 * @deprecated Use getRepository. This will be removed in a future version.
 */
export declare const GetRepository: typeof getRepository;
export declare function getCustomRepository<T extends IEntity>(entity: {
    new (): T;
}, documentPath?: string): BaseFirestoreRepository<T>;
/**
 * @deprecated Use getCustomRepository. This will be removed in a future version.
 */
export declare const GetCustomRepository: typeof getCustomRepository;
export declare function getBaseRepository<T extends IEntity>(entity: {
    new (): T;
}, documentPath?: string): BaseFirestoreRepository<T>;
/**
 * @deprecated Use getBaseRepository. This will be removed in a future version.
 */
export declare const GetBaseRepository: typeof getBaseRepository;
