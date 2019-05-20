'use strict';

define('sample/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n10:28 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n10:28 - \'$\' is not defined. (no-undef)\n11:28 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n11:28 - \'$\' is not defined. (no-undef)\n14:54 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/repositories.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/repositories.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/repositories/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/repositories/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/repositories/repository.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/repositories/repository.js should pass ESLint\n\n11:43 - \'error\' is defined but never used. (no-unused-vars)\n22:14 - Unnecessary semicolon. (no-extra-semi)\n28:28 - \'$\' is not defined. (no-undef)\n28:28 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n36:17 - Unexpected console statement. (no-console)\n41:21 - \'$\' is not defined. (no-undef)\n41:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n56:6 - Unnecessary semicolon. (no-extra-semi)\n59:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n59:5 - \'$\' is not defined. (no-undef)\n66:13 - \'tempcontext\' is assigned a value but never used. (no-unused-vars)\n82:27 - \'bigimage\' is not defined. (no-undef)');
  });

  QUnit.test('models/repository.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/repository.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n11:36 - Use snake case in dynamic segments of routes (ember/routes-segments-snake-case)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/repositories.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/repositories.js should pass ESLint\n\n');
  });

  QUnit.test('routes/repositories/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/repositories/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/repositories/repository.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/repositories/repository.js should pass ESLint\n\n14:9 - Unexpected console statement. (no-console)\n21:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/ajax.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/ajax.js should pass ESLint\n\n1:8 - \'Service\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('services/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/user.js should pass ESLint\n\n');
  });
});
define('sample/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('sample/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'sample/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('sample/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'sample/templates/index.hbs should pass TemplateLint.\n\nsample/templates/index.hbs\n  2:1  error  Incorrect indentation for `<input>` beginning at L2:C1. Expected `<input>` to be at an indentation of 2 but was found at 1.  block-indentation\n  3:1  error  Incorrect indentation for `<input>` beginning at L3:C1. Expected `<input>` to be at an indentation of 2 but was found at 1.  block-indentation\n  4:1  error  Incorrect indentation for `<button>` beginning at L4:C1. Expected `<button>` to be at an indentation of 2 but was found at 1.  block-indentation\n  2:1  error  Self-closing a void element is redundant  self-closing-void-elements\n  3:1  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('sample/templates/repositories.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'sample/templates/repositories.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('sample/templates/repositories/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'sample/templates/repositories/index.hbs should pass TemplateLint.\n\nsample/templates/repositories/index.hbs\n  2:4  error  Incorrect indentation for `<ul>` beginning at L2:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `{{#each}}` beginning at L6:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<li>` beginning at L3:C8. Expected `<li>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<li>` beginning at L4:C8. Expected `<li>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<ul>` beginning at L7:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:12  error  Incorrect indentation for `<li>` beginning at L8:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `<li>` beginning at L9:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:12  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });

  QUnit.test('sample/templates/repositories/repository.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'sample/templates/repositories/repository.hbs should pass TemplateLint.\n\nsample/templates/repositories/repository.hbs\n  2:4  error  Incorrect indentation for `<ul>` beginning at L2:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `{{#each}}` beginning at L6:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<li>` beginning at L3:C8. Expected `<li>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `<li>` beginning at L4:C8. Expected `<li>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<ul>` beginning at L7:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:12  error  Incorrect indentation for `<li>` beginning at L8:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `<li>` beginning at L9:C12. Expected `<li>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:0  error  Incorrect indentation for `<div>` beginning at L15:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  23:4  error  Incorrect indentation for `<button>` beginning at L23:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `<button>` beginning at L24:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `<div>` beginning at L25:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<div>` beginning at L16:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  20:4  error  Incorrect indentation for `<button>` beginning at L20:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  17:8  error  Incorrect indentation for `<label>` beginning at L17:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:8  error  Incorrect indentation for `<input>` beginning at L18:C8. Expected `<input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  26:5  error  Incorrect indentation for `<video>` beginning at L26:C5. Expected `<video>` to be at an indentation of 6 but was found at 5.  block-indentation\n  27:8  error  Incorrect indentation for `<canvas>` beginning at L27:C8. Expected `<canvas>` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
});
define('sample/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/repositories/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/repositories/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/repositories/repository-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/repositories/repository-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/repositories-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/repositories-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/repositories/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/repositories/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/repositories/repository-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/repositories/repository-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/ajax-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/user-test.js should pass ESLint\n\n');
  });
});
define('sample/tests/test-helper', ['sample/app', 'sample/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('sample/tests/unit/controllers/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define('sample/tests/unit/controllers/repositories/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | repositories/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:repositories/index');
      assert.ok(controller);
    });
  });
});
define('sample/tests/unit/controllers/repositories/repository-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | repositories/repository', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:repositories/repository');
      assert.ok(controller);
    });
  });
});
define('sample/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('sample/tests/unit/routes/repositories-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | repositories', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:repositories');
      assert.ok(route);
    });
  });
});
define('sample/tests/unit/routes/repositories/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | repositories/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:repositories/index');
      assert.ok(route);
    });
  });
});
define('sample/tests/unit/routes/repositories/repository-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | repositories/repository', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:repositories/repository');
      assert.ok(route);
    });
  });
});
define('sample/tests/unit/services/ajax-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | ajax', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:ajax');
      assert.ok(service);
    });
  });
});
define('sample/tests/unit/services/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:user');
      assert.ok(service);
    });
  });
});
define('sample/config/environment', [], function() {
  var prefix = 'sample';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('sample/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
