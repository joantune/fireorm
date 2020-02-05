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
var AbstractFirestoreRepository_1 = require("./AbstractFirestoreRepository");
var TransactionRepository = /** @class */ (function (_super) {
    __extends(TransactionRepository, _super);
    function TransactionRepository(collection, transaction, colName) {
        var _this = _super.call(this, colName) || this;
        _this.collection = collection;
        _this.transaction = transaction;
        return _this;
    }
    TransactionRepository.prototype.execute = function (queries) {
        var _this = this;
        var query = queries.reduce(function (acc, cur) {
            var op = cur.operator;
            return acc.where(cur.prop, op, cur.val);
        }, this.collection);
        return this.transaction.get(query).then(function (a) { return _this.extractTFromColSnap(a); });
    };
    TransactionRepository.prototype.findById = function (id) {
        return this._findById(id, this.collection);
    };
    TransactionRepository.prototype._findById = function (id, collection) {
        var _this = this;
        var query = collection.doc(id);
        return this.transaction.get(query).then(function (a) { return _this.extractTFromDocSnap(a); });
    };
    TransactionRepository.prototype.txFindById = function (id, repo) {
        return this._findById(id, repo.firestoreColRef);
    };
    TransactionRepository.prototype.create = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._create(item, this.collection)];
            });
        });
    };
    TransactionRepository.prototype._create = function (item, collection) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config.validateModels) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length) {
                            throw errors;
                        }
                        _a.label = 2;
                    case 2:
                        doc = item.id ? collection.doc(item.id) : collection.doc();
                        if (!item.id) {
                            item.id = doc.id;
                        }
                        return [4 /*yield*/, this.transaction.set(doc, this.toSerializableObject(item))];
                    case 3:
                        _a.sent();
                        this.initializeSubCollections(item);
                        return [2 /*return*/, item];
                }
            });
        });
    };
    TransactionRepository.prototype.txCreate = function (item, repo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._create(item, repo.firestoreColRef)];
            });
        });
    };
    TransactionRepository.prototype.update = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._update(item, this.collection)];
            });
        });
    };
    TransactionRepository.prototype._update = function (item, collection) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config.validateModels) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length) {
                            throw errors;
                        }
                        _a.label = 2;
                    case 2:
                        query = collection.doc(item.id);
                        return [4 /*yield*/, this.transaction.update(query, this.toSerializableObject(item))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, item];
                }
            });
        });
    };
    TransactionRepository.prototype.txUpdate = function (item, repo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._update(item, repo.firestoreColRef)];
            });
        });
    };
    TransactionRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._delete(id, this.collection)];
            });
        });
    };
    TransactionRepository.prototype._delete = function (id, collection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transaction.delete(collection.doc(id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionRepository.prototype.txDelete = function (id, repo) {
        return this._delete(id, repo.firestoreColRef);
    };
    TransactionRepository.prototype.limit = function () {
        throw new Error('`limit` is not available for transactions');
    };
    TransactionRepository.prototype.orderByAscending = function () {
        throw new Error('`orderByAscending` is not available for transactions');
    };
    TransactionRepository.prototype.orderByDescending = function () {
        throw new Error('`orderByDescending` is not available for transactions');
    };
    return TransactionRepository;
}(AbstractFirestoreRepository_1.AbstractFirestoreRepository));
exports.TransactionRepository = TransactionRepository;
//# sourceMappingURL=BaseFirestoreTransactionRepository.js.map