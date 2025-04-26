"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("./types/types");
const app = (0, express_1.default)();
mongoose_1.default
    .connect(types_1.env.MONGODB_URI)
    .then((result) => {
    app.listen(types_1.env.PORT, () => {
        console.log(`Server is running on ${result.connection.host}:${types_1.env.PORT}`);
    });
})
    .catch((err) => {
    console.log(err);
});
