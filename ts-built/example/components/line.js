"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLine = void 0;
const math_1 = __importDefault(require("canvas-sketch-util/math"));
// getDistance :: (x, y) -> (x, y) -> Float
const getDistance = ({ x: x1, y: y1 }) => ({ x: x2, y: y2 }) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.hypot(dx, dy);
};
// makeLine :: [Particle] -> (context) -> ()
const makeLine = (particles) => (context) => {
    particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach((otherParticle) => {
            const distance = getDistance(particle.position)(otherParticle.position);
            if (distance <= 250) {
                context.lineWidth = math_1.default.mapRange(distance, 0, 200, 12, 1);
                context.beginPath();
                context.moveTo(particle.position.x, particle.position.y);
                context.lineTo(otherParticle.position.x, otherParticle.position.y);
                context.strokeStyle = "black";
                context.stroke();
            }
        });
    });
};
exports.makeLine = makeLine;
