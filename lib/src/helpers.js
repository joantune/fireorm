"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataStorage_1 = require("./MetadataStorage");
var BaseFirestoreRepository_1 = require("./BaseFirestoreRepository");
function getRepository(entity, documentPath) {
    return _getRepository(entity, 'default', documentPath);
}
exports.getRepository = getRepository;
/**
 * @deprecated Use getRepository. This will be removed in a future version.
 */
exports.GetRepository = getRepository;
function getCustomRepository(entity, documentPath) {
    return _getRepository(entity, 'custom', documentPath);
}
exports.getCustomRepository = getCustomRepository;
/**
 * @deprecated Use getCustomRepository. This will be removed in a future version.
 */
exports.GetCustomRepository = getCustomRepository;
function getBaseRepository(entity, documentPath) {
    return _getRepository(entity, 'base', documentPath);
}
exports.getBaseRepository = getBaseRepository;
/**
 * @deprecated Use getBaseRepository. This will be removed in a future version.
 */
exports.GetBaseRepository = getBaseRepository;
function _getRepository(entity, repositoryType, documentPath) {
    var metadataStorage = MetadataStorage_1.getMetadataStorage();
    if (!metadataStorage.firestoreRef) {
        throw new Error('Firestore must be initialized first');
    }
    var repository = metadataStorage.getRepository(entity);
    if (repositoryType === 'custom' && !repository) {
        throw new Error("'" + entity.name + "' does not have a custom repository.");
    }
    var collection = documentPath
        ? metadataStorage.getSubCollection(entity)
        : metadataStorage.getCollection(entity);
    if (!collection) {
        throw new Error("'" + entity.name + "' is not a valid collection");
    }
    if (collection.parentEntity) {
        var parentCollection = metadataStorage.getCollection(collection.parentEntity);
        if (!parentCollection) {
            throw new Error("'" + entity.name + "' does not have a valid parent collection.");
        }
    }
    if (repositoryType === 'custom' ||
        (repositoryType === 'default' && repository)) {
        return new repository.target(collection.name, documentPath);
    }
    else {
        return new BaseFirestoreRepository_1.BaseFirestoreRepository(collection.name, documentPath);
    }
}
//# sourceMappingURL=helpers.js.map