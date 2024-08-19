"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_sketch_1 = __importDefault(require("canvas-sketch"));
const particle_1 = require("./components/particle");
const line_1 = require("./components/line");
const settings = {
    dimensions: [1080, 1080],
    animate: true,
};
const sketch = () => {
    const [width, height] = settings.dimensions;
    // initial particles \\
    // numParticles :: Int
    const numParticles = 40;
    // particles :: Particle -> [Particle]
    const particles = Array.from({ length: numParticles }, () => (0, particle_1.Particle)(width, height));
    return ({ context, width, height }) => {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        // draw lines \\
        (0, line_1.makeLine)(particles)(context);
        // update particles \\
        particles.map(particle_1.update).map((particle) => (0, particle_1.draw)(particle)(context));
    };
};
(0, canvas_sketch_1.default)(sketch, settings);
