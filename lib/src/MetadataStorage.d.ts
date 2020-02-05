import { Firestore } from '@google-cloud/firestore';
import { InstanstiableIEntity } from './types';
export interface IMetadataStore {
    metadataStorage: MetadataStorage;
}
export declare function getStore(): IMetadataStore;
export interface CollectionMetadata {
    name: string;
    entity: InstanstiableIEntity;
    parentEntity?: Function;
    propertyKey?: string;
}
export interface RepositoryMetadata {
    target: Function;
    entity: InstanstiableIEntity;
}
export interface MetadataStorageConfig {
    validateModels?: boolean;
}
export declare class MetadataStorage {
    readonly collections: Array<CollectionMetadata>;
    readonly subCollections: Array<CollectionMetadata>;
    readonly repositories: Map<unknown, RepositoryMetadata>;
    config: MetadataStorageConfig;
    getCollection: (param: string | Function) => CollectionMetadata;
    setCollection: (col: CollectionMetadata) => void;
    getSubCollectionsFromParent: (parentEntity: Function) => CollectionMetadata[];
    getSubCollection: (param: string | Function) => CollectionMetadata;
    setSubCollection: (subCol: CollectionMetadata) => void;
    getRepository: (param: Function) => RepositoryMetadata;
    setRepository: (repo: RepositoryMetadata) => void;
    firestoreRef: Firestore;
}
/**
 * Return exisiting metadataStorage, otherwise create if not present
 */
export declare const getMetadataStorage: () => MetadataStorage;
/**
 * Used for testing to reset metadataStore to clean state
 */
export declare function clearMetadataStorage(): void;
export declare const initialize: (firestore: Firestore, config?: MetadataStorageConfig) => void;
/**
 * @deprecated Use initialize. This will be removed in a future version.
 */
export declare const Initialize: (firestore: Firestore, config?: MetadataStorageConfig) => void;
