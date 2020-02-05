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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorators_1 = require("../src/Decorators");
var fixture_1 = require("./fixture");
var src_1 = require("../src");
var class_validator_1 = require("class-validator");
var AlbumImage = /** @class */ (function () {
    function AlbumImage() {
    }
    AlbumImage = __decorate([
        Decorators_1.Collection()
    ], AlbumImage);
    return AlbumImage;
}());
// Why I do this? Because by using the instance of Album
// located in fixture.ts, you have the risk to reuse the
// same class in many tests and every method that depends
// in the instance of the class being unique might clash
// with each other (happened with getRepository)
//
// Hours lost debugging this: 2
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        class_validator_1.Length(1, 50, {
            message: 'Name is too long',
        }),
        __metadata("design:type", String)
    ], Album.prototype, "name", void 0);
    __decorate([
        Decorators_1.SubCollection(AlbumImage),
        __metadata("design:type", Object)
    ], Album.prototype, "images", void 0);
    Album = __decorate([
        Decorators_1.Collection()
    ], Album);
    return Album;
}(fixture_1.Album));
var Band = /** @class */ (function () {
    function Band() {
    }
    Band.prototype.getLastShowYear = function () {
        return this.lastShow.getFullYear();
    };
    Band.prototype.getPopularGenre = function () {
        return this.genres[0];
    };
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsEmail({}, {
            message: 'Invalid email!',
        }),
        __metadata("design:type", String)
    ], Band.prototype, "contactEmail", void 0);
    __decorate([
        src_1.Type(function () { return fixture_1.Coordinates; }),
        __metadata("design:type", fixture_1.Coordinates)
    ], Band.prototype, "lastShowCoordinates", void 0);
    __decorate([
        Decorators_1.SubCollection(Album),
        __metadata("design:type", Object)
    ], Band.prototype, "albums", void 0);
    __decorate([
        src_1.Type(function () { return fixture_1.FirestoreDocumentReference; }),
        __metadata("design:type", fixture_1.FirestoreDocumentReference)
    ], Band.prototype, "relatedBand", void 0);
    Band = __decorate([
        Decorators_1.Collection('bands')
    ], Band);
    return Band;
}());
exports.Band = Band;
//# sourceMappingURL=BandCollection.js.map