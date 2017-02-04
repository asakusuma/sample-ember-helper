
import { helloWorld } from 'dummy/helpers/hello-world';
import { module, test } from 'qunit';

module('Unit | Helper | hello world');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = helloWorld([42]);
  assert.ok(result);
});

