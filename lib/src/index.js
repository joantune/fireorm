"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Decorators"));
__export(require("./BaseFirestoreRepository"));
__export(require("./types"));
__export(require("./helpers"));
var MetadataStorage_1 = require("./MetadataStorage");
exports.initialize = MetadataStorage_1.initialize;
exports.Initialize = MetadataStorage_1.Initialize;
// Temporary while https://github.com/wovalle/fireorm/issues/58 is being fixed
var class_transformer_1 = require("class-transformer");
exports.Type = class_transformer_1.Type;
//# sourceMappingURL=index.js.map