import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | repositories/repository', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:repositories/repository');
    assert.ok(route);
  });
});
