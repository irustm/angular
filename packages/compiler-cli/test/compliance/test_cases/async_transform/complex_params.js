export function foo(...[, {a}, {b: [{c: d}]}]) {
  return Zone.__awaiter(this, [...[, {a}, {b: [{c: d}]}]], function * foo_generator_1(...[, {a}, {b: [{c: d}]}]) {
    yield a;
    yield d;
  });
}