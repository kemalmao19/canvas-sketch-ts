// const canvasSketch = require('canvas-sketch');
import canvasSketch from 'canvas-sketch';

const settings = {
  dimensions: [ 2048, 2048 ]
};

type Canvas = {
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
};

const sketch: () => void = () => {
  return ({ context, width, height }: Canvas) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);