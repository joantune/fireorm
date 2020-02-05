"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Eventually I'll abstract this class since right
// now is tied to WriteBatch class from firestore
var FirestoreBatchRepository = /** @class */ (function () {
    function FirestoreBatchRepository(collection, serializer) {
        var _this = this;
        this.collection = collection;
        this.serializer = serializer;
        this.create = function (item) {
            var doc = item.id ? _this.collection.doc(item.id) : _this.collection.doc();
            if (!item.id) {
                item.id = doc.id;
            }
            var serialized = _this.serializer(item);
            _this.batch.set(doc, serialized);
        };
        this.update = function (item) {
            _this.batch.update(_this.collection.doc(item.id), _this.serializer(item));
        };
        this.delete = function (item) {
            _this.batch.delete(_this.collection.doc(item.id), _this.serializer(item));
        };
        this.commit = function () {
            return _this.batch.commit();
        };
        this.batch = collection.firestore.batch();
    }
    return FirestoreBatchRepository;
}());
exports.FirestoreBatchRepository = FirestoreBatchRepository;
//# sourceMappingURL=BatchFirestoreRepository.js.map