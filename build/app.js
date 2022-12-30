"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("./db/userModel"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.set('strictQuery', true);
mongoose_1.default
    .connect('mongodb://0.0.0.0:3000/')
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.post('/users', (req, res) => {
    const { name, username } = req.body;
    console.log(name, username);
    const user = new userModel_1.default({
        name,
        username,
    });
    user.save().then((user) => {
        res.json(user);
    });
});
exports.default = app;
