import { getMetadataStorage } from './MetadataStorage';
import { IEntity, Instantiable } from './types';
import { FirestoreBatchRepository } from './BatchFirestoreRepository';

const metadataStorage = getMetadataStorage();

export class FirestoreBatch {
  constructor() {}

  getRepository<T extends IEntity>(entity: Instantiable<T>) {
    if (!metadataStorage.firestoreRef) {
      throw new Error('Firestore must be initialized first');
    }

    // TODO: move logic out of the

    return new FirestoreBatchRepository(
      this.firestoreColRef,
      this.toSerializableObject
    );
  }
}
