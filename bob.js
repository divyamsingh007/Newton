class Bob {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      friction: 0.5,
      density: 0.5,
      restitution: 1.3  ,
    };
    this.radius = radius;
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }
  display() {
    fill("gold");
    ellipseMode(RADIUS);
    ellipse(
      this.body.position.x,
      this.body.position.y,
      this.radius,
      this.radius
    );
  }
}
