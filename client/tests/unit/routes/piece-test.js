import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | piece', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:piece');
    assert.ok(route);
  });
});
