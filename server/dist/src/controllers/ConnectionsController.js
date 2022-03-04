"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../database/connections"));
class ConnectionController {
    async index(request, response) {
        const totalConnections = await connections_1.default('connections').count('* as total');
        const { total } = totalConnections[0];
        return response.json({ total });
    }
    async create(request, response) {
        const { user_id } = request.body;
        await connections_1.default('connections').insert({
            user_id
        });
        return response.status(201).send();
    }
}
exports.default = ConnectionController;
