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
var firestore_1 = require("@google-cloud/firestore");
var chai_1 = require("chai");
var Decorators_1 = require("./Decorators");
var BaseFirestoreRepository_1 = require("./BaseFirestoreRepository");
var helpers_1 = require("./helpers");
var MetadataStorage_1 = require("./MetadataStorage");
describe('Helpers', function () {
    beforeEach(function () {
        MetadataStorage_1.initialize(new firestore_1.Firestore());
    });
    it('getRepository: should get custom repositories', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Decorators_1.Collection()
            ], Entity);
            return Entity;
        }());
        var EntityRepo = /** @class */ (function (_super) {
            __extends(EntityRepo, _super);
            function EntityRepo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityRepo.prototype.meaningOfLife = function () {
                return 42;
            };
            EntityRepo = __decorate([
                Decorators_1.CustomRepository(Entity)
            ], EntityRepo);
            return EntityRepo;
        }(BaseFirestoreRepository_1.BaseFirestoreRepository));
        //TODO: I don't know why store is undefined here, check it out
        var rep = helpers_1.getRepository(Entity);
        chai_1.expect(rep).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
        chai_1.expect(rep.meaningOfLife()).to.eql(42);
    });
    it('should get base repositories if custom are not registered', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Decorators_1.Collection()
            ], Entity);
            return Entity;
        }());
        var rep = helpers_1.getRepository(Entity);
        chai_1.expect(rep).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
    });
    it('should throw if trying to get an unexistent collection', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        chai_1.expect(function () { return helpers_1.getRepository(Entity); }).to.throw("'Entity' is not a valid collection");
    });
    it('should get base repository even if a custom one is registered', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            Entity = __decorate([
                Decorators_1.Collection()
            ], Entity);
            return Entity;
        }());
        var EntityRepo = /** @class */ (function (_super) {
            __extends(EntityRepo, _super);
            function EntityRepo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityRepo.prototype.meaningOfLife = function () {
                return 42;
            };
            EntityRepo = __decorate([
                Decorators_1.CustomRepository(Entity)
            ], EntityRepo);
            return EntityRepo;
        }(BaseFirestoreRepository_1.BaseFirestoreRepository));
        var rep = helpers_1.getBaseRepository(Entity);
        chai_1.expect(rep).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
        chai_1.expect(rep['meaningOfLife']).to.be.undefined;
    });
    it('should throw if trying to get an unexistent collection', function () {
        var Entity = /** @class */ (function () {
            function Entity() {
            }
            return Entity;
        }());
        chai_1.expect(function () { return helpers_1.getRepository(Entity); }).to.throw("'Entity' is not a valid collection");
    });
});
//# sourceMappingURL=helpers.spec.js.map