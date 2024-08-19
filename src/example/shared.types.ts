type Vector = {
  x: number;
  y: number;
};

type Particle = {
  position: Vector;
  velocity: Vector;
  rad: number;
  width: number;
  height: number;
};

type ParticleFunc = (width: number, height: number) => Particle;
type UpdateFunc = (particle: Particle) => Particle;
type DrawFunc = ({
  position,
  rad,
}: Particle) => (context: CanvasRenderingContext2D) => void;
