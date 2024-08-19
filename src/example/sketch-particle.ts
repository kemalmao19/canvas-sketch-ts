import canvasSketch from "canvas-sketch";
import { Particle, draw, update } from "./components/particle";
import { makeLine } from "./components/line";

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

type Canvas = {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
};

const sketch = () => {
  const [width, height] = settings.dimensions;

  const numParticles = 40;
  const particles = Array.from({ length: numParticles }, () =>
    Particle(width, height),
  );

  return ({ context, width, height }: Canvas) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    makeLine(particles)(context);

    particles.map(update).map((particle) => draw(particle)(context));
  };
};

canvasSketch(sketch, settings);
