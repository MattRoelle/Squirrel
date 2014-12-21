Object.prototype.extend = function() {
  var that = this;
  Array.prototype.forEach.call(arguments, function(obj) {
    for(var k in obj) {
      if (obj[k].constructor === Object) {
        if (that[k] === undefined) {
          that[k] = obj[k];
        } else {
          that[k].extend(obj[k]);
        }
      } else {
        that[k] = obj[k] || that[k];
      }
    };
  });
  return that;
};
