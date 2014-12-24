squirrel.Rect = (function() {
  function Rect() {
    if (arguments.length > 2) {
      this.position = new Vector2(arguments[0], arguments[1]);
      this.size = new Vector2(arguments[2], arguments[3])
    } else {
      this.position = arguments[0];
      this.size = arguments[1];
    }
  }

  Rect.prototype.intersects = function(r2) {
    return !(
      this.position.x > r2.position.x + r2.size.x ||
      this.position.y > r2.position.y + r2.size.y ||
      this.position.x + this.size.x < r2.x ||
      this.position.y + this.size.y < r2.y
    );
  };

  return Rect;
})();
