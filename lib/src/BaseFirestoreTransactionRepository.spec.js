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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var MockFirebase = require('mock-cloud-firestore');
var BaseFirestoreRepository_1 = require("./BaseFirestoreRepository");
var fixture_1 = require("../test/fixture");
var MetadataStorage_1 = require("./MetadataStorage");
var BandCollection_1 = require("../test/BandCollection");
var BandRepository = /** @class */ (function (_super) {
    __extends(BandRepository, _super);
    function BandRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BandRepository;
}(BaseFirestoreRepository_1.BaseFirestoreRepository));
describe('BaseFirestoreTransactionRepository', function () {
    var bandRepository = null;
    var firestore;
    var defaultMetadataConfig;
    beforeEach(function () {
        var fixture = Object.assign({}, fixture_1.getFixture());
        var firebase = new MockFirebase(fixture, {
            isNaiveSnapshotListenerEnabled: false,
        });
        firestore = firebase.firestore();
        MetadataStorage_1.initialize(firestore, defaultMetadataConfig);
        // Save the default config to reset any changes made in tests
        defaultMetadataConfig = MetadataStorage_1.getMetadataStorage().config;
        bandRepository = new BandRepository('bands');
    });
    describe('limit', function () {
        it('must throw when using limit', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                chai_1.expect(function () { return tran.limit(); }).to.throw;
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('orderBy*', function () {
        it('must throw when using orderByAscending', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                chai_1.expect(function () { return tran.orderByAscending(); }).to.throw;
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must throw when using orderByDescending', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                chai_1.expect(function () { return tran.orderByDescending(); }).to.throw;
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('findById', function () {
        it('must find by id', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        chai_1.expect(pt).instanceOf(BandCollection_1.Band);
                                        chai_1.expect(pt.id).to.equal('porcupine-tree');
                                        chai_1.expect(pt.name).to.equal('Porcupine Tree');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must have proper getters', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        chai_1.expect(pt.getLastShowYear()).to.eql(2010);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('return null if not found', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var sw;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('steven-wilson')];
                                    case 1:
                                        sw = _a.sent();
                                        chai_1.expect(sw).to.be.null;
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('create', function () {
        it('should return T when an item is created', function () { return __awaiter(void 0, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new BandCollection_1.Band();
                        entity.id = 'rush';
                        entity.name = 'Rush';
                        entity.formationYear = 1968;
                        entity.genres = ['progressive-rock', 'hard-rock', 'heavy-metal'];
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var band;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(entity)];
                                        case 1:
                                            band = _a.sent();
                                            chai_1.expect(band).to.be.instanceOf(BandCollection_1.Band);
                                            chai_1.expect(band.getPopularGenre()).to.equal('progressive-rock');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must not validate if the validate config property is false', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MetadataStorage_1.initialize(firestore, { validateModels: false });
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var entity, band;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            entity = new BandCollection_1.Band();
                                            entity.contactEmail = 'Not an email';
                                            return [4 /*yield*/, tran.create(entity)];
                                        case 1:
                                            band = _a.sent();
                                            chai_1.expect(band.contactEmail).to.equal('Not an email');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must fail validation if an invalid class is given', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var entity, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        entity = new BandCollection_1.Band();
                                        entity.contactEmail = 'Not an email';
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, tran.create(entity)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _a.sent();
                                        chai_1.expect(error_1[0].constraints.isEmail).to.equal('Invalid email!');
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must fail validation if an invalid object is given', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var entity, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        entity = {
                                            contactEmail: 'Not an email',
                                        };
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, tran.create(entity)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_2 = _a.sent();
                                        chai_1.expect(error_2[0].constraints.isEmail).to.equal('Invalid email!');
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must create items when id is passed', function () { return __awaiter(void 0, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new BandCollection_1.Band();
                        entity.id = 'perfect-circle';
                        entity.name = 'A Perfect Circle';
                        entity.formationYear = 1999;
                        entity.genres = ['alternative-rock', 'alternative-metal', 'hard-rock'];
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var band;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(entity)];
                                        case 1:
                                            band = _a.sent();
                                            chai_1.expect(band.id).to.equal(entity.id);
                                            chai_1.expect(band.name).to.equal(entity.name);
                                            chai_1.expect(band.formationYear).to.equal(entity.formationYear);
                                            chai_1.expect(band.genres).to.equal(entity.genres);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must create items and assign a custom id if no id is passed', function () { return __awaiter(void 0, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new BandCollection_1.Band();
                        entity.name = 'The Pinapple Thief';
                        entity.formationYear = 1999;
                        entity.genres = ['progressive-rock'];
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var band;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(entity)];
                                        case 1:
                                            band = _a.sent();
                                            chai_1.expect(typeof band.id).to.equal('string');
                                            chai_1.expect(band.id).not.to.be.undefined;
                                            chai_1.expect(band.name).to.equal(entity.name);
                                            chai_1.expect(band.formationYear).to.equal(entity.formationYear);
                                            chai_1.expect(band.genres).to.equal(entity.genres);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must save autogenerated id field in document if no id is passed', function () { return __awaiter(void 0, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new BandCollection_1.Band();
                        entity.name = 'Deftones';
                        entity.formationYear = 1988;
                        entity.genres = ['alternative-metal'];
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var band, foundBand;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(entity)];
                                        case 1:
                                            band = _a.sent();
                                            return [4 /*yield*/, tran.findById(band.id)];
                                        case 2:
                                            foundBand = _a.sent();
                                            chai_1.expect(band.id).to.equal(foundBand.id);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must be able to create document from anonymous object without id');
    });
    describe('update', function () {
        it('must update and return updated item', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var band, updatedBand;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        band = _a.sent();
                                        band.name = 'Steven Wilson';
                                        return [4 /*yield*/, tran.update(band)];
                                    case 2:
                                        updatedBand = _a.sent();
                                        chai_1.expect(band.name).to.equal(updatedBand.name);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must update and store updated item', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var band, updatedBand;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        band = _a.sent();
                                        band.name = 'Steven Wilson';
                                        return [4 /*yield*/, tran.update(band)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 3:
                                        updatedBand = _a.sent();
                                        chai_1.expect(band.name).to.equal(updatedBand.name);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must not validate if the validate config property is false', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MetadataStorage_1.initialize(firestore, { validateModels: false });
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var band, updatedBand;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                        case 1:
                                            band = _a.sent();
                                            band.contactEmail = 'Not an email';
                                            return [4 /*yield*/, tran.update(band)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, tran.findById('porcupine-tree')];
                                        case 3:
                                            updatedBand = _a.sent();
                                            chai_1.expect(updatedBand.contactEmail).to.equal('Not an email');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must fail validation if an invalid class is given', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var band, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        band = _a.sent();
                                        band.contactEmail = 'Not an email';
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, tran.update(band)];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        error_3 = _a.sent();
                                        chai_1.expect(error_3[0].constraints.isEmail).to.equal('Invalid email!');
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must fail validation if an invalid object is given', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var band, updatedBand, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        band = _a.sent();
                                        updatedBand = __assign(__assign({}, band), { contactEmail: 'Not an email' });
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 5]);
                                        return [4 /*yield*/, tran.update(band)];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        error_4 = _a.sent();
                                        chai_1.expect(error_4[0].constraints.isEmail).to.equal('Invalid email!');
                                        return [3 /*break*/, 5];
                                    case 5: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must throw if item is not found');
    });
    describe('delete', function () {
        it('must delete item', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.delete('porcupine-tree')];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 2:
                                        pt = _a.sent();
                                        chai_1.expect(pt).to.be.null;
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must throw if item is not found', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                chai_1.expect(function () { return tran.delete('lol'); }).to.throw;
                                return [2 /*return*/];
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('.where*', function () {
        it('whereEqualTo must accept function as first parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereEqualTo(function (b) { return b.name; }, 'Porcupine Tree')
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(1);
                                        chai_1.expect(list[0].name).to.equal('Porcupine Tree');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must return T[]', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var progressiveRockBands;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereArrayContains('genres', 'progressive-rock')
                                            .find()];
                                    case 1:
                                        progressiveRockBands = _a.sent();
                                        progressiveRockBands.forEach(function (b) {
                                            chai_1.expect(b.getPopularGenre()).to.eql(b.genres[0]);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must return same list if where filter does not apply', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereGreaterOrEqualThan('formationYear', 1983)
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(2);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereEqualTo', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.whereEqualTo('name', 'Porcupine Tree').find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(1);
                                        chai_1.expect(list[0].name).to.equal('Porcupine Tree');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereGreaterThan', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.whereGreaterThan('formationYear', 1983).find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(1);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereGreaterOrEqualThan', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereGreaterOrEqualThan('formationYear', 1983)
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(2);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereLessThan', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.whereLessThan('formationYear', 1983).find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(1);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereLessOrEqualThan', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereLessOrEqualThan('formationYear', 1983)
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(2);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with whereArrayContains', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereArrayContains('genres', 'progressive-rock')
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(2);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('must filter with two or more operators', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var list;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran
                                            .whereLessOrEqualThan('formationYear', 1983)
                                            .whereArrayContains('genres', 'funk-rock')
                                            .find()];
                                    case 1:
                                        list = _a.sent();
                                        chai_1.expect(list.length).to.equal(1);
                                        chai_1.expect(list[0].id).to.equal('red-hot-chili-peppers');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('miscellaneous', function () {
        it('should correctly parse dates', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        chai_1.expect(pt.lastShow).to.be.instanceOf(Date);
                                        chai_1.expect(pt.lastShow.toISOString()).to.equal('2010-10-14T00:00:00.000Z');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('must handle subcollections', function () {
        it('should initialize subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        chai_1.expect(pt.name).to.equal('Porcupine Tree');
                                        chai_1.expect(pt.albums).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should initialize nested subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt, album;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('red-hot-chili-peppers')];
                                    case 1:
                                        pt = _a.sent();
                                        return [4 /*yield*/, pt.albums.findById('stadium-arcadium')];
                                    case 2:
                                        album = _a.sent();
                                        chai_1.expect(album.images).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to execute operations in the subcollection', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var band, bestAlbum;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('red-hot-chili-peppers')];
                                    case 1:
                                        band = _a.sent();
                                        return [4 /*yield*/, band.albums.findById('stadium-arcadium')];
                                    case 2:
                                        bestAlbum = _a.sent();
                                        chai_1.expect(bestAlbum.id).to.equal('stadium-arcadium');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to create subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            var band, firstAlbum, secondAlbum, thirdAlbum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        band = new BandCollection_1.Band();
                        band.id = '30-seconds-to-mars';
                        band.name = '30 Seconds To Mars';
                        band.formationYear = 1998;
                        band.genres = ['alternative-rock'];
                        firstAlbum = new fixture_1.Album();
                        firstAlbum.id = '30-seconds-to-mars';
                        firstAlbum.name = '30 Seconds to Mars';
                        firstAlbum.releaseDate = new Date('2002-07-22');
                        secondAlbum = new fixture_1.Album();
                        secondAlbum.id = 'a-beautiful-lie';
                        secondAlbum.name = 'A Beautiful Lie';
                        secondAlbum.releaseDate = new Date('2005-07-30');
                        thirdAlbum = new fixture_1.Album();
                        thirdAlbum.id = 'this-is-war';
                        thirdAlbum.name = 'This Is War';
                        thirdAlbum.releaseDate = new Date('2009-12-08');
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var albums;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(band)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, band.albums.create(firstAlbum)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, band.albums.create(secondAlbum)];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, band.albums.create(thirdAlbum)];
                                        case 4:
                                            _a.sent();
                                            return [4 /*yield*/, band.albums.find()];
                                        case 5:
                                            albums = _a.sent();
                                            chai_1.expect(albums.length).to.eql(3);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should initialize nested subcollections on create', function () { return __awaiter(void 0, void 0, void 0, function () {
            var band, firstAlbum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        band = new BandCollection_1.Band();
                        band.id = '30-seconds-to-mars';
                        band.name = '30 Seconds To Mars';
                        band.formationYear = 1998;
                        band.genres = ['alternative-rock'];
                        firstAlbum = new fixture_1.Album();
                        firstAlbum.id = '30-seconds-to-mars';
                        firstAlbum.name = '30 Seconds to Mars';
                        firstAlbum.releaseDate = new Date('2002-07-22');
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var album;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(band)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, band.albums.create(firstAlbum)];
                                        case 2:
                                            album = _a.sent();
                                            chai_1.expect(album.images).to.be.instanceOf(BaseFirestoreRepository_1.BaseFirestoreRepository);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to validate subcollections on create', function () { return __awaiter(void 0, void 0, void 0, function () {
            var band, firstAlbum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        band = new BandCollection_1.Band();
                        band.id = '30-seconds-to-mars';
                        band.name = '30 Seconds To Mars';
                        band.formationYear = 1998;
                        band.genres = ['alternative-rock'];
                        firstAlbum = new fixture_1.Album();
                        firstAlbum.id = 'invalid-album-name';
                        firstAlbum.name = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                        firstAlbum.releaseDate = new Date('2002-07-22');
                        return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var error_5;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.create(band)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 4, , 5]);
                                            return [4 /*yield*/, band.albums.create(firstAlbum)];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            error_5 = _a.sent();
                                            chai_1.expect(error_5[0].constraints.length).to.equal('Name is too long');
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to update subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt, album, updatedAlbum;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        return [4 /*yield*/, pt.albums.findById('fear-blank-planet')];
                                    case 2:
                                        album = _a.sent();
                                        album.comment = 'Anesthethize is top 3 IMHO';
                                        return [4 /*yield*/, pt.albums.update(album)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, pt.albums.findById('fear-blank-planet')];
                                    case 4:
                                        updatedAlbum = _a.sent();
                                        chai_1.expect(updatedAlbum.comment).to.eql('Anesthethize is top 3 IMHO');
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to validate subcollections on update', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt, album, error_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        return [4 /*yield*/, pt.albums.findById('fear-blank-planet')];
                                    case 2:
                                        album = _a.sent();
                                        album.name = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                                        _a.label = 3;
                                    case 3:
                                        _a.trys.push([3, 5, , 6]);
                                        return [4 /*yield*/, pt.albums.update(album)];
                                    case 4:
                                        _a.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        error_6 = _a.sent();
                                        chai_1.expect(error_6[0].constraints.length).to.equal('Name is too long');
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to update collections with subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt, updatedPt, foundUpdatedPt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        pt.name = 'Porcupine Tree IS THE BEST';
                                        return [4 /*yield*/, tran.update(pt)];
                                    case 2:
                                        updatedPt = _a.sent();
                                        return [4 /*yield*/, tran.update(pt)];
                                    case 3:
                                        foundUpdatedPt = _a.sent();
                                        chai_1.expect(updatedPt.name).to.eql(pt.name);
                                        chai_1.expect(foundUpdatedPt.name).to.eql(pt.name);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be able to delete subcollections', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                            var pt, updatedBandAlbums;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                    case 1:
                                        pt = _a.sent();
                                        return [4 /*yield*/, pt.albums.delete('fear-blank-planet')];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, pt.albums.find()];
                                    case 3:
                                        updatedBandAlbums = _a.sent();
                                        chai_1.expect(updatedBandAlbums.length).to.eql(3);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe('miscellaneous', function () {
            it('should correctly parse dates', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, bandRepository.runTransaction(function (tran) { return __awaiter(void 0, void 0, void 0, function () {
                                var pt, releaseDate;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tran.findById('porcupine-tree')];
                                        case 1:
                                            pt = _a.sent();
                                            return [4 /*yield*/, pt.albums.findById('deadwing')];
                                        case 2:
                                            releaseDate = (_a.sent()).releaseDate;
                                            chai_1.expect(releaseDate).instanceOf(Date);
                                            chai_1.expect(releaseDate.toISOString()).to.equal('2005-03-25T00:00:00.000Z');
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
//# sourceMappingURL=BaseFirestoreTransactionRepository.spec.js.map