"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
exports.env = {
    MONGODB_URI: process.env.MONGODB_URI || "",
    PORT: process.env.PORT || "",
};
