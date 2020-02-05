"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRepository_1 = require("./BaseRepository");
function getStore() {
    return global;
}
exports.getStore = getStore;
var MetadataStorage = /** @class */ (function () {
    function MetadataStorage() {
        var _this = this;
        this.collections = [];
        this.subCollections = [];
        this.repositories = new Map();
        this.config = {
            validateModels: true,
        };
        this.getCollection = function (param) {
            if (typeof param === 'string') {
                return _this.collections.find(function (c) { return c.name === param; });
            }
            return _this.collections.find(function (c) { return c.entity === param; });
        };
        this.setCollection = function (col) {
            var existing = _this.getCollection(col.entity);
            if (!existing) {
                _this.collections.push(col);
            }
        };
        this.getSubCollectionsFromParent = function (parentEntity) {
            return _this.subCollections.filter(function (s) { return s.parentEntity === parentEntity; });
        };
        this.getSubCollection = function (param) {
            if (typeof param === 'string') {
                return _this.subCollections.find(function (c) { return c.name === param; });
            }
            return _this.subCollections.find(function (c) { return c.entity === param; });
        };
        this.setSubCollection = function (subCol) {
            _this.subCollections.push(subCol);
        };
        this.getRepository = function (param) {
            return _this.repositories.get(param);
        };
        this.setRepository = function (repo) {
            var savedRepo = _this.getRepository(repo.entity);
            if (savedRepo && repo.target !== savedRepo.target) {
                throw new Error('Cannot register a custom repository twice with two different targets');
            }
            if (!(repo.target.prototype instanceof BaseRepository_1.BaseRepository)) {
                throw new Error('Cannot register a custom repository on a class that does not inherit from BaseFirestoreRepository');
            }
            _this.repositories.set(repo.entity, repo);
        };
        this.firestoreRef = null;
    }
    return MetadataStorage;
}());
exports.MetadataStorage = MetadataStorage;
/**
 * Return exisiting metadataStorage, otherwise create if not present
 */
exports.getMetadataStorage = function () {
    var store = getStore();
    if (!store.metadataStorage) {
        initializeMetadataStorage();
    }
    return store.metadataStorage;
};
function initializeMetadataStorage() {
    var store = getStore();
    if (!store.metadataStorage) {
        store.metadataStorage = new MetadataStorage();
    }
}
/**
 * Used for testing to reset metadataStore to clean state
 */
function clearMetadataStorage() {
    var store = getStore();
    store.metadataStorage = null;
}
exports.clearMetadataStorage = clearMetadataStorage;
exports.initialize = function (firestore, config) {
    initializeMetadataStorage();
    var metadataStorage = getStore().metadataStorage;
    metadataStorage.firestoreRef = firestore;
    metadataStorage.config = __assign(__assign({}, metadataStorage.config), config);
};
/**
 * @deprecated Use initialize. This will be removed in a future version.
 */
exports.Initialize = exports.initialize;
//# sourceMappingURL=MetadataStorage.js.map