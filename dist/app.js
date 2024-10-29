"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001; // Changed to port 3001
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/mydatabase', {}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
app.use(body_parser_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
