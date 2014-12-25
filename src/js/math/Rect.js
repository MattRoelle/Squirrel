squirrel.Rect = (function() {
  function Rect() {
    if (arguments.length > 2) {
      this.position = new squirrel.Vector2(arguments[0], arguments[1]);
      this.size = new squirrel.Vector2(arguments[2], arguments[3])
    } else {
      this.position = arguments[0];
      this.size = arguments[1];
    }
  }

  Rect.prototype.intersects = function(r2) {
    return (
      this.position.x <= r2.position.x + r2.size.x &&
      r2.position.x <= this.position.x + this.size.x &&
      this.position.y <= r2.position.y + r2.size.y &&
      r2.position.y <= this.position.y + this.size.y
    );
  };

  return Rect;
})();
