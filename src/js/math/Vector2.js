squirrel.Vector2 = (function() {
  function Vector2(x, y) {
    this.x = x;
    this.y = y;
  };

  Vector2.prototype.add = function(v2) {
    return new Vector2(this.x + v2.x, this.y + v2.y);
  };

  Vector2.prototype.subtract = function(v2) {
    return new Vector2(this.x - v2.x, this.y - v2.y);
  };

  Vector2.prototype.scale = function(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  };

  Vector2.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  Vector2.prototype.distance = function(v2) {
    return Math.sqrt(Math.pow(this.x - v2.x, 2) + Math.pow(this.y - v2.y, 2));
  };

  Vector2.prototype.angleBetween = function(v2) {
    return Math.atan2(this.y - v2.y, this.x - v2.x);
  };

  Vector2.prototype.theta = function() {
    return Math.atan2(this.y, this.x);
  };

  Vector2.prototype.normalize = function() {
    return new Vector2(Math.cos(this.theta()), Math.sin(this.theta()));
  };

  Vector2.prototype.dotProduct = function(v2) {
    return this.magnitude() * v2.magnitude() * Math.cos(this.angleBetween(v2));
  };

  return Vector2;
})();
