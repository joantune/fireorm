"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var SubCollection_1 = require("./SubCollection");
var chai_1 = require("chai");
var MetadataStorage_1 = require("../MetadataStorage");
describe('SubCollectionDecorator', function () {
    var store = MetadataStorage_1.getStore();
    beforeEach(function () {
        MetadataStorage_1.clearMetadataStorage();
        MetadataStorage_1.initialize(null);
    });
    it('should register collections', function () {
        var SubEntity = /** @class */ (function () {
            function SubEntity() {
            }
            return SubEntity;
        }());
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            __decorate([
                SubCollection_1.SubCollection(SubEntity, 'subs'),
                __metadata("design:type", void 0)
            ], Entity.prototype, "subentity", void 0);
            return Entity;
        }());
        chai_1.expect(store.metadataStorage.subCollections.length).to.eql(1);
        chai_1.expect(store.metadataStorage.subCollections[0].name).to.eql('subs');
        chai_1.expect(store.metadataStorage.subCollections[0].parentEntity).to.eql(Entity);
        chai_1.expect(store.metadataStorage.subCollections[0].entity).to.eql(SubEntity);
        chai_1.expect(store.metadataStorage.subCollections[0].propertyKey).to.eql('subentity');
    });
    it('should register collections with default name', function () {
        var SubEntity = /** @class */ (function () {
            function SubEntity() {
            }
            return SubEntity;
        }());
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            __decorate([
                SubCollection_1.SubCollection(SubEntity),
                __metadata("design:type", void 0)
            ], Entity.prototype, "subentity", void 0);
            return Entity;
        }());
        chai_1.expect(store.metadataStorage.subCollections.length).to.eql(1);
        chai_1.expect(store.metadataStorage.subCollections[0].name).to.eql('subentities');
        chai_1.expect(store.metadataStorage.subCollections[0].parentEntity).to.eql(Entity);
        chai_1.expect(store.metadataStorage.subCollections[0].entity).to.eql(SubEntity);
        chai_1.expect(store.metadataStorage.subCollections[0].propertyKey).to.eql('subentity');
    });
});
//# sourceMappingURL=SubCollection.spec.js.map