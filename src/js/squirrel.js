squirrel = {
  'ver': '0.0.1',
  conf: {
    name: 'Squirrel Engine Game'
  }
};

squirrel.config = function(options) {
  squirrel.conf.extend(options || {});
};
