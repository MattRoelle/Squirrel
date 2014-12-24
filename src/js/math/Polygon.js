squirrel.Polygon = (function() {
  function Polygon() {
    this.verticies = [];

    // mega argument overload
    if (arguments.length > 0) {
      args = squirrel.utils.argsToArray(arguments);
      var that = this;
      if (args[0].constructor === Array) {
        if (args[0][0].constructor === Array) {
          args[0].forEach(function(vertex) {
            that.verticies.push(new squirrel.Vector2(vertex[0], vertex[1]));
          });
        } else if (args[0][0].constructor === squirrel.Vector2) {
          args[0].forEach(function(vertex) {
            that.verticies.push(vertex);
          });
        } else {
          args.forEach(function(vertex) {
            that.verticies.push(new squirrel.Vector2(vertex[0], vertex[1]));
          });
        }
      } else if (args[0].constructor === squirrel.Vector2) {
        args.forEach(function(vertex) {
          that.verticies.push(vertex);
        });
      }
    }

    this.nverticies = this.verticies.length;
  }

  return Polygon;
})();
