"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("./types/types");
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: `Server is running on port: ${types_1.env.PORT}`,
    });
});
app.use("/todo", todo_1.default);
//Error handling middleware
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.status;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
// 404 error handling middleware
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
// Connect to MongoDB and start the server
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
