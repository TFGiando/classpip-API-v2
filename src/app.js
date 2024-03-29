"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./routes/index");
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json()); //Habilitar envio de json
app.use((0, cors_1.default)());
app.use(index_1.router);
app.listen(PORT, () => {
    console.log(`Escuchando por el puerto: ${PORT}`);
});
