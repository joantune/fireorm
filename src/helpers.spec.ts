import { Firestore } from '@google-cloud/firestore';
import { expect } from 'chai';

import { Collection, CustomRepository } from './Decorators';
import { BaseFirestoreRepository } from './BaseFirestoreRepository';
import {
  getRepository,
  getBaseRepository,
  runTransaction,
  createBatch,
} from './helpers';
import { initialize } from './MetadataStorage';

describe('Helpers', () => {
  beforeEach(() => {
    initialize(new Firestore());
  });

  it('getRepository: should get custom repositories', () => {
    @Collection()
    class Entity {
      id: string;
    }

    @CustomRepository(Entity)
    class EntityRepo extends BaseFirestoreRepository<Entity> {
      meaningOfLife() {
        return 42;
      }
    }

    //\: I don't know why store is undefined here, check it out
    const rep = getRepository(Entity) as EntityRepo;
    expect(rep).to.be.instanceOf(BaseFirestoreRepository);
    expect(rep.meaningOfLife()).to.eql(42);
  });

  it('should get base repositories if custom are not registered', () => {
    @Collection()
    class Entity {
      id: string;
    }

    const rep = getRepository(Entity);
    expect(rep).to.be.instanceOf(BaseFirestoreRepository);
  });

  it('should throw if trying to get an unexistent collection', () => {
    class Entity {
      id: string;
    }

    expect(() => getRepository(Entity)).to.throw(
      "'Entity' is not a valid collection"
    );
  });

  it('should get base repository even if a custom one is registered', () => {
    @Collection()
    class Entity {
      id: string;
    }

    @CustomRepository(Entity)
    class EntityRepo extends BaseFirestoreRepository<Entity> {
      meaningOfLife() {
        return 42;
      }
    }

    const rep = getBaseRepository(Entity);
    expect(rep).to.be.instanceOf(BaseFirestoreRepository);
    expect(rep['meaningOfLife']).to.be.undefined;
  });

  it('should throw if trying to get an unexistent collection', () => {
    class Entity {
      id: string;
    }

    expect(() => getRepository(Entity)).to.throw(
      "'Entity' is not a valid collection"
    );
  });

  it('runTransaction: ', () => {
    runTransaction(async transaction => {
      expect(transaction.getRepository).to.be.instanceOf(Function);
    });
  });

  it('createBatch: ', () => {
    const batch = createBatch();
    expect(batch.getRepository).to.be.instanceOf(Function);
  });
});
