"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var CustomRepository_1 = require("./CustomRepository");
var MetadataStorage_1 = require("../MetadataStorage");
var BaseFirestoreRepository_1 = require("../BaseFirestoreRepository");
describe('CustomRepositoryDecorator', function () {
    var store = MetadataStorage_1.getStore();
    beforeEach(function () {
        MetadataStorage_1.clearMetadataStorage();
        MetadataStorage_1.initialize(null);
    });
    it('should register custom repositories', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        var EntityRepo = /** @class */ (function (_super) {
            __extends(EntityRepo, _super);
            function EntityRepo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityRepo = __decorate([
                CustomRepository_1.CustomRepository(Entity)
            ], EntityRepo);
            return EntityRepo;
        }(BaseFirestoreRepository_1.BaseFirestoreRepository));
        var repository = store.metadataStorage.repositories.get(Entity);
        chai_1.expect(store.metadataStorage.repositories.size).to.eql(1);
        chai_1.expect(repository.entity).to.eql(Entity);
        chai_1.expect(repository.target).to.eql(EntityRepo);
    });
    it('should only register a repository once', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        chai_1.expect(function () {
            var EntityRepo = /** @class */ (function (_super) {
                __extends(EntityRepo, _super);
                function EntityRepo() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EntityRepo = __decorate([
                    CustomRepository_1.CustomRepository(Entity)
                ], EntityRepo);
                return EntityRepo;
            }(BaseFirestoreRepository_1.BaseFirestoreRepository));
            var EntityRepo2 = /** @class */ (function (_super) {
                __extends(EntityRepo2, _super);
                function EntityRepo2() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                EntityRepo2 = __decorate([
                    CustomRepository_1.CustomRepository(Entity)
                ], EntityRepo2);
                return EntityRepo2;
            }(BaseFirestoreRepository_1.BaseFirestoreRepository));
        }).to.throw;
    });
    it('should only register a repository once', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        var EntityRepo = /** @class */ (function (_super) {
            __extends(EntityRepo, _super);
            function EntityRepo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityRepo = __decorate([
                CustomRepository_1.CustomRepository(Entity),
                CustomRepository_1.CustomRepository(Entity)
            ], EntityRepo);
            return EntityRepo;
        }(BaseFirestoreRepository_1.BaseFirestoreRepository));
        var repository = store.metadataStorage.repositories.get(Entity);
        chai_1.expect(store.metadataStorage.repositories.size).to.eql(1);
        chai_1.expect(repository.entity).to.eql(Entity);
        chai_1.expect(repository.target).to.eql(EntityRepo);
    });
    it('should enforce that custom repository inherits from BaseRepository', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        chai_1.expect(function () {
            var EntityRepo = /** @class */ (function () {
                function EntityRepo() {
                }
                EntityRepo = __decorate([
                    CustomRepository_1.CustomRepository(Entity)
                ], EntityRepo);
                return EntityRepo;
            }());
        }).to.throw;
    });
});
//# sourceMappingURL=CustomRepository.spec.js.map