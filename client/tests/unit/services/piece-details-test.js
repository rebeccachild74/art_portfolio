import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | pieceDetails', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:piece-details');
    assert.ok(service);
  });
});
