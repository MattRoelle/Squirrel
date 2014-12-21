squirrel.utils = {};

squirrel.utils.argsToArray = function(args, i) {
  return Array.prototype.slice.call(args, i || 0);
}
;
