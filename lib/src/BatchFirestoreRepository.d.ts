import { CollectionReference } from '@google-cloud/firestore';
import { IEntity, WithOptionalId } from './types';
export declare class FirestoreBatchRepository<T extends IEntity> {
    private collection;
    private serializer;
    private batch;
    constructor(collection: CollectionReference, serializer: Function);
    create: (item: WithOptionalId<T>) => void;
    update: (item: T) => void;
    delete: (item: T) => void;
    commit: () => Promise<FirebaseFirestore.WriteResult[]>;
}
