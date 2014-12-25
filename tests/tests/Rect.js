QUnit.module('squirrel.Rect');

QUnit.test('Rect.intersects', function(assert) {
  var r1 = new squirrel.Rect(10, 10, 10, 10);
  var r2 = new squirrel.Rect(15, 15, 20, 20);
  var r3 = new squirrel.Rect(50, 50, 20, 20);

  assert.ok(r1.intersects(r2));
  assert.ok(!r1.intersects(r3));
});
