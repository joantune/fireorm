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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var MetadataStorage_1 = require("./MetadataStorage");
var BaseRepository_1 = require("./BaseRepository");
var QueryBuilder_1 = __importDefault(require("./QueryBuilder"));
var AbstractFirestoreRepository = /** @class */ (function (_super) {
    __extends(AbstractFirestoreRepository, _super);
    function AbstractFirestoreRepository(nameOrConstructor, collectionPath) {
        var _this = _super.call(this) || this;
        _this.toSerializableObject = function (obj) {
            var serializedObj = __rest(obj, []);
            _this.subColMetadata.forEach(function (scm) {
                delete serializedObj[scm.propertyKey];
            });
            return serializedObj;
        };
        _this.transformFirestoreTypes = function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (!obj[key])
                    return;
                if (typeof obj[key] === 'object' && 'toDate' in obj[key]) {
                    obj[key] = obj[key].toDate();
                }
                else if (obj[key].constructor.name === 'GeoPoint') {
                    var _a = obj[key], latitude = _a.latitude, longitude = _a.longitude;
                    obj[key] = { latitude: latitude, longitude: longitude };
                }
                else if (obj[key].constructor.name === 'DocumentReference') {
                    var _b = obj[key], id = _b.id, path = _b.path;
                    obj[key] = { id: id, path: path };
                }
                else if (typeof obj[key] === 'object') {
                    _this.transformFirestoreTypes(obj[key]);
                }
            });
            return obj;
        };
        _this.initializeSubCollections = function (entity) {
            // Requiring here to prevent circular dependency
            var getRepository = require('./helpers').getRepository;
            _this.subColMetadata.forEach(function (subCol) {
                var _a;
                Object.assign(entity, (_a = {},
                    _a[subCol.propertyKey] = getRepository(subCol.entity, _this.collectionPath + "/" + entity.id + "/" + subCol.name),
                    _a));
            });
        };
        _this.extractTFromDocSnap = function (doc) {
            if (!doc.exists) {
                return null;
            }
            // tslint:disable-next-line:no-unnecessary-type-assertion
            var entity = class_transformer_1.plainToClass(_this.colMetadata.entity, __assign({ id: doc.id }, _this.transformFirestoreTypes(doc.data())));
            _this.initializeSubCollections(entity);
            return entity;
        };
        _this.extractTFromColSnap = function (q) {
            return q.docs.map(function (i) { return _this.extractTFromDocSnap(i); });
        };
        _this.colName =
            typeof nameOrConstructor === 'function'
                ? nameOrConstructor.name
                : nameOrConstructor;
        var _a = MetadataStorage_1.getMetadataStorage(), getCollection = _a.getCollection, getSubCollection = _a.getSubCollection, getSubCollectionsFromParent = _a.getSubCollectionsFromParent, config = _a.config;
        _this.colMetadata = getSubCollection(_this.colName) || getCollection(_this.colName);
        _this.config = config;
        _this.collectionPath = collectionPath || _this.colName;
        if (!_this.colMetadata) {
            throw new Error("There is no metadata stored for \"" + _this.colName + "\"");
        }
        _this.subColMetadata = getSubCollectionsFromParent(_this.colMetadata.entity);
        return _this;
    }
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be equal to @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereEqualTo = function (prop, val) {
        return new QueryBuilder_1.default(this).whereEqualTo(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be greater than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereGreaterThan = function (prop, val) {
        return new QueryBuilder_1.default(this).whereGreaterThan(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be greater or equal than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereGreaterOrEqualThan = function (prop, val) {
        return new QueryBuilder_1.default(this).whereGreaterOrEqualThan(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be less than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereLessThan = function (prop, val) {
        return new QueryBuilder_1.default(this).whereLessThan(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param prop must be less or equal than @param val.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereLessOrEqualThan = function (prop, val) {
        return new QueryBuilder_1.default(this).whereLessOrEqualThan(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a filter specifying that the
     * value in @param val must be contained in @param prop.
     *
     * @param {IWherePropParam<T>} prop field to be filtered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @param {IFirestoreVal} val value to compare in the filter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * query applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.whereArrayContains = function (prop, val) {
        return new QueryBuilder_1.default(this).whereArrayContains(prop, val);
    };
    /**
     * Returns a new QueryBuilder with a maximum number of results
     * to return. Can only be used once per query.
     *
     * @param {number} limitVal maximum number of results to return
     * Must be greater or equal than 0
     * @returns {IQueryBuilder<T>} QueryBuilder A new QueryBuilder with
     * the specified limit applied
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.limit = function (limitVal) {
        if (limitVal < 0) {
            throw new Error("limitVal must be greater than 0. It received: " + limitVal);
        }
        return new QueryBuilder_1.default(this).limit(limitVal);
    };
    /**
     * Returns a new QueryBuilder with an additional ascending order
     * specified by @param prop. Can only be used once per query.
     *
     * @param {IWherePropParam<T>} prop field to be ordered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * ordering applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.orderByAscending = function (prop) {
        return new QueryBuilder_1.default(this).orderByAscending(prop);
    };
    /**
     * Returns a new QueryBuilder with an additional descending order
     * specified by @param prop. Can only be used once per query.
     *
     * @param {IWherePropParam<T>} prop field to be ordered on, where
     * prop could be keyof T or a lambda where T is the first parameter
     * @returns {QueryBuilder<T>} A new QueryBuilder with the specified
     * ordering applied.
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.orderByDescending = function (prop) {
        return new QueryBuilder_1.default(this).orderByDescending(prop);
    };
    /**
     * Execute the query and applies all the filters (if specified)
     *
     * @returns {Promise<T[]>} List of documents that matched the filters
     * (if specified)
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.find = function () {
        return new QueryBuilder_1.default(this).find();
    };
    /**
     * Execute the query to find at least one document matching all
     * filters (if specified)
     *
     * @returns {Promise<T | null>} One document that matched the filters
     * (if specified), or null if none exists.
     *
     * @memberof AbstractFirestoreRepository
     */
    AbstractFirestoreRepository.prototype.findOne = function () {
        return new QueryBuilder_1.default(this).findOne();
    };
    /**
     * Uses class-validator to validate an entity using decorators set in the collection class
     *
     * @param item class or object representing an entity
     * @returns {Promise<ValidationError[]>} An array of class-validator errors
     */
    AbstractFirestoreRepository.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var classValidator, _a, getSubCollection, getCollection, Entity, entity, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('class-validator')); })];
                    case 1:
                        classValidator = _b.sent();
                        _a = MetadataStorage_1.getMetadataStorage(), getSubCollection = _a.getSubCollection, getCollection = _a.getCollection;
                        Entity = (getSubCollection(this.colName) || getCollection(this.colName)).entity;
                        entity = item instanceof Entity
                            ? item
                            : Object.assign(new Entity(), item);
                        return [2 /*return*/, classValidator.validate(entity)];
                    case 2:
                        error_1 = _b.sent();
                        if (error_1.code === 'MODULE_NOT_FOUND') {
                            throw new Error('It looks like class-validator is not installed. Please run `npm i -S class-validator` to fix this error, or initialize FireORM with `validateModels: false` to disable validation.');
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AbstractFirestoreRepository;
}(BaseRepository_1.BaseRepository));
exports.AbstractFirestoreRepository = AbstractFirestoreRepository;
//# sourceMappingURL=AbstractFirestoreRepository.js.map