"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const canvasSketch = require('canvas-sketch');
const canvas_sketch_1 = __importDefault(require("canvas-sketch"));
const settings = {
    dimensions: [2048, 2048]
};
const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
    };
};
(0, canvas_sketch_1.default)(sketch, settings);
