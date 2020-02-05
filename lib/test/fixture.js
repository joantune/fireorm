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
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates = /** @class */ (function () {
    function Coordinates() {
    }
    return Coordinates;
}());
exports.Coordinates = Coordinates;
var FirestoreDocumentReference = /** @class */ (function () {
    function FirestoreDocumentReference() {
    }
    return FirestoreDocumentReference;
}());
exports.FirestoreDocumentReference = FirestoreDocumentReference;
var AlbumImage = /** @class */ (function () {
    function AlbumImage() {
    }
    return AlbumImage;
}());
exports.AlbumImage = AlbumImage;
var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());
exports.Album = Album;
var Band = /** @class */ (function () {
    function Band() {
    }
    return Band;
}());
exports.Band = Band;
exports.getInitialData = function () {
    return [
        {
            id: 'porcupine-tree',
            name: 'Porcupine Tree',
            formationYear: 1987,
            lastShow: new Date('2010-10-14'),
            lastShowCoordinates: { latitude: 51.5009088, longitude: -0.1795547 },
            genres: ['psychedelic-rock', 'progressive-rock', 'progressive-metal'],
            albums: [
                {
                    id: 'lightbulb-sun',
                    name: 'Lightbulb Sun',
                    releaseDate: new Date('2000-05-22'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'in-absentia',
                    name: 'In Absentia',
                    releaseDate: new Date('2002-09-24'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'deadwing',
                    name: 'Deadwing',
                    releaseDate: new Date('2005-03-25'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'fear-blank-planet',
                    name: 'Fear of a Blank Planet',
                    releaseDate: new Date('2007-04-16'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
            ],
        },
        {
            id: 'pink-floyd',
            name: 'Pink Floyd',
            formationYear: 1965,
            lastShow: new Date('1981-06-17'),
            genres: ['psychedelic-rock', 'progressive-rock', 'space-rock'],
            albums: [
                {
                    id: 'dark-side-moon',
                    name: 'The Dark Side of the Moon',
                    releaseDate: new Date('1973-03-01'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'wish-you-were-here',
                    name: 'Wish You Were Here',
                    releaseDate: new Date('1975-09-12'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'animals',
                    name: 'Animals',
                    releaseDate: new Date('1977-01-23'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'the-wall',
                    name: 'The Wall',
                    releaseDate: new Date('1979-11-30'),
                    images: [],
                },
            ],
        },
        {
            id: 'red-hot-chili-peppers',
            name: 'Red Hot Chili Peppers',
            formationYear: 1983,
            lastShow: null,
            genres: ['funk-rock', 'funk-metal', 'alternative-rock'],
            albums: [
                {
                    id: 'californication',
                    name: 'Californication',
                    releaseDate: new Date('1999-06-08'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'by-the-way',
                    name: 'By the Way',
                    releaseDate: new Date('2002-07-09'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
                {
                    id: 'stadium-arcadium',
                    name: 'Stadium Arcadium',
                    releaseDate: new Date('2006-05-09'),
                    images: [
                        {
                            id: 'album-artwork',
                            url: 'http://lorempixel.com/100/100',
                        },
                    ],
                },
            ],
        },
    ];
};
var getCollectionBoilerplate = function (entity, hash) {
    var _a;
    return ({
        __collection__: (_a = {},
            _a[entity] = {
                __doc__: hash,
            },
            _a),
    });
};
exports.getBandFixture = function () {
    var initialData = exports.getInitialData();
    var objectifyList = function (arr, cb) {
        return arr.reduce(function (acc, cur) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[cur.id] = cb(cur), _a)));
        }, {});
    };
    return objectifyList(initialData, function (_a) {
        var albums = _a.albums, rest = __rest(_a, ["albums"]);
        return (__assign(__assign({}, rest), getCollectionBoilerplate('albums', objectifyList(albums, function (a) { return a; }))));
    });
};
exports.getFixture = function () {
    return getCollectionBoilerplate('bands', exports.getBandFixture());
};
//# sourceMappingURL=fixture.js.map