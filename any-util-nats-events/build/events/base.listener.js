"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseListener = void 0;
var BaseListener = /** @class */ (function () {
    function BaseListener(client) {
        this._ackWait = 5 * 1000;
        this._client = client;
    }
    BaseListener.prototype.subscriptionOptions = function () {
        return this._client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this._ackWait)
            .setDurableName(this.queueGroupName);
    };
    BaseListener.prototype.listen = function () {
        var _this = this;
        var subscription$ = this._client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription$.on("message", function (msg) {
            console.log("Message received: " + _this.subject + "/ " + _this.queueGroupName);
            var parsedData = _this.parseMessage(msg);
            _this.onMessage(parsedData, msg);
        });
    };
    BaseListener.prototype.parseMessage = function (msg) {
        var data = msg.getData();
        return typeof data === "string"
            ? JSON.parse(data)
            : JSON.parse(data.toString("utf-8"));
    };
    return BaseListener;
}());
exports.BaseListener = BaseListener;
