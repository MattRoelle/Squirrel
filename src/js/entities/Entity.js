squirrel.Entity = (function() {
  function Entity() { }

  Entity.prototype.pos = new squirrel.Vector2(0, 0);
  Entity.prototype.velocity = new squirrel.Vector2(0, 0);

  Entity.prototype.mass = 0;

  Entity.prototype._update = function() {
    this.pos = this.pos.add(this.velocity);
    this.update();
  };

  Entity.prototype._render = function() {
    this.render();
  };

  Entity.prototype._eventQueue = [];

  Entity.prototype._processEvents = function() {
    this._eventQueue.forEach(function(ev, i) {
      switch (ev.type) {
        default:
          break;
      }
    });
  };

  Entity.prototype._removeEvent = function(i) {
    this._eventQueue.slice(i, -1);
  };

  Entity.prototype.on = function(type) {
    this._eventQueue.push({
      type: type,
      args: utils.argsToArray(arguments, 1, -1),
      cb: arguments[arguments.length - 1]
    });
  };

  return Entity;
})();
