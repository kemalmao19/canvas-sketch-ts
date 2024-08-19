// Vector :: (x, y) -> Vector
const Vector = (x: number, y: number) => <Vector>{ x, y };

// Particle :: (width, height) -> Particle
const Particle: ParticleFunc = (width, height) => {
  const position = Vector(Math.random() * width, Math.random() * height);
  const velocity = Vector(Math.random() * 2 - 1, Math.random() * 2 - 1);
  return {
    position: position,
    velocity: velocity,
    rad: Math.random() * 15 + 5,
    width: width,
    height: height,
  };
};

// update :: Particle -> Particle
const update: UpdateFunc = (particle) => {
  const newPosition = Vector(
    (particle.position.x += particle.velocity.x),
    (particle.position.y += particle.velocity.y),
  );

  const newVelocity = Vector(
    newPosition.x <= 0 || newPosition.x >= particle.width
      ? (particle.velocity.x *= -1)
      : particle.velocity.x,
    newPosition.y <= 0 || newPosition.y >= particle.height
      ? (particle.velocity.y *= -1)
      : particle.velocity.y,
  );

  return {
    ...particle,
    position: newPosition,
    velocity: newVelocity,
  };
};

// draw :: Particle -> (context) -> ()
const draw: DrawFunc =
  ({ position, rad }) =>
  (context) => {
    context.save();
    context.beginPath();
    context.lineWidth = 4;
    context.arc(position.x, position.y, rad, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.stroke();
    context.restore();
  };

export { Particle, draw, update };
