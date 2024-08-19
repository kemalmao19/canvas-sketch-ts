import math from "canvas-sketch-util/math";

type Vector = {
    x: number,
    y: number
  }
  
  type Particle = {
    position: Vector,
    velocity: Vector,
    rad: number,
    width: number,
    height: number
  }

// getDistance :: (x, y) -> (x, y) -> Float
const getDistance =
  ({ x: x1, y: y1 }: Vector) =>
  ({ x: x2, y: y2 }: Vector) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.hypot(dx, dy);
  };

// makeLine :: [Particle] -> (context) -> ()
const makeLine = (particles: Particle[]) => (context: CanvasRenderingContext2D) => {
  particles.forEach((particle, index) => {
    particles.slice(index + 1).forEach((otherParticle) => {
      const distance = getDistance(particle.position)(otherParticle.position);
      if (distance <= 250) {
        context.lineWidth = math.mapRange(distance, 0, 200, 12, 1);

        context.beginPath();
        context.moveTo(particle.position.x, particle.position.y);
        context.lineTo(otherParticle.position.x, otherParticle.position.y);
        context.strokeStyle = "black";
        context.stroke();
      }
    });
  });
};

export { makeLine };