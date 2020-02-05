"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MetadataStorage_1 = require("../MetadataStorage");
var Collection_1 = require("./Collection");
describe('CollectionDecorator', function () {
    var store = MetadataStorage_1.getStore();
    beforeEach(function () {
        MetadataStorage_1.clearMetadataStorage();
        MetadataStorage_1.initialize(null);
    });
    it('should register collections', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Collection_1.Collection('foo')
            ], Entity);
            return Entity;
        }());
        var collection = store.metadataStorage.getCollection('foo');
        chai_1.expect(store.metadataStorage.collections.length).to.eql(1);
        chai_1.expect(collection.name).to.eql('foo');
        chai_1.expect(collection.entity).to.eql(Entity);
    });
    it('should register collections with default name', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Collection_1.Collection()
            ], Entity);
            return Entity;
        }());
        var collection = store.metadataStorage.getCollection('Entities');
        chai_1.expect(store.metadataStorage.collections.length).to.eql(1);
        chai_1.expect(collection.name).to.eql('Entities');
        chai_1.expect(collection.entity).to.eql(Entity);
    });
    it('should register collections once', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Collection_1.Collection(),
                Collection_1.Collection()
            ], Entity);
            return Entity;
        }());
        var collection = store.metadataStorage.getCollection('Entities');
        chai_1.expect(store.metadataStorage.collections.length).to.eql(1);
        chai_1.expect(collection.name).to.eql('Entities');
        chai_1.expect(collection.entity).to.eql(Entity);
    });
});
//# sourceMappingURL=Collection.spec.js.map