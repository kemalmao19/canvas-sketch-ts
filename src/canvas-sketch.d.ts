declare module 'canvas-sketch' {
    export default function canvasSketch(sketch: () => void, settings: any): void;
}

declare module 'canvas-sketch-util/math' {
    export function mapRange(value: number, a1: number, a2: number, b1: number, b2: number): number;
}