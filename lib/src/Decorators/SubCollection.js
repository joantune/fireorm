"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MetadataStorage_1 = require("../MetadataStorage");
var pluralize_1 = require("pluralize");
function SubCollection(entity, entityName) {
    return function (target, propertyKey) {
        MetadataStorage_1.getMetadataStorage().setSubCollection({
            entity: entity,
            name: entityName || pluralize_1.plural(propertyKey),
            parentEntity: target.constructor,
            propertyKey: propertyKey,
        });
    };
}
exports.SubCollection = SubCollection;
//# sourceMappingURL=SubCollection.js.map