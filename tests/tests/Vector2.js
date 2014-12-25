// squirrel.Vector2
QUnit.module('squirrel.Vector2');

QUnit.test('Vector2.add', function(assert) {
  var v1 = new squirrel.Vector2(10, 20);
  var v2 = new squirrel.Vector2(50, -10);
  var v3 = v1.add(v2);

  assert.strictEqual(v3.x, 60);
  assert.strictEqual(v3.y, 10);
});

QUnit.test('Vector2.subtract', function(assert) {
  var v1 = new squirrel.Vector2(10, 20);
  var v2 = new squirrel.Vector2(50, -10);
  var v3 = v1.subtract(v2);

  assert.strictEqual(v3.x, -40);
  assert.strictEqual(v3.y, 30);
});

QUnit.test('Vector2.scale', function(assert) {
  var v1 = new squirrel.Vector2(10, 20);
  var v2 = v1.scale(5);

  assert.strictEqual(v2.x, 50);
  assert.strictEqual(v2.y, 100);
});
