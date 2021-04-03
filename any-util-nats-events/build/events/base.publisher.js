"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePublisher = void 0;
var BasePublisher = /** @class */ (function () {
    function BasePublisher(client) {
        this._client = client;
    }
    BasePublisher.prototype.publish = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._client.publish(_this.subject, JSON.stringify(data), function (err) {
                if (err) {
                    return reject(err);
                }
                console.log("Event published to subject", _this.subject);
                resolve();
            });
        });
    };
    return BasePublisher;
}());
exports.BasePublisher = BasePublisher;
