'use strict';



;define('sample/app', ['exports', 'sample/resolver', 'ember-load-initializers', 'sample/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('sample/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('sample/controllers/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        ajax: Ember.inject.service(),
        user: Ember.inject.service(),
        actions: {
            login() {
                let self = this;
                let userName = $('input[name=username]').val();
                let password = $('input[name=password]').val();
                this.user.setUsername(userName);
                this.user.setPassword(password);
                this.ajax.request('/user').then(function (response) {
                    self.transitionToRoute('repositories');
                });
            }
        }
    });
});
;define('sample/controllers/repositories', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
;define('sample/controllers/repositories/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            openRepositories(repoName) {
                this.transitionToRoute('repositories.repository', repoName);
            }
        }
    });
});
;define('sample/controllers/repositories/repository', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        isCreateFile: false,
        ajax: Ember.inject.service(),
        user: Ember.inject.service(),
        actions: {
            getImage() {
                var videoObj = { "video": true },
                    errBack = function (error) {
                    // alert("Video capture error: ", error.code);
                };

                // Ask the browser for permission to use the Webcam
                if (navigator.getUserMedia) {
                    // Standard
                    navigator.getUserMedia(videoObj, this.startWebcam, errBack);
                } else if (navigator.webkitGetUserMedia) {
                    // WebKit
                    navigator.webkitGetUserMedia(videoObj, this.startWebcam, errBack);
                } else if (navigator.mozGetUserMedia) {
                    // Firefox
                    navigator.mozGetUserMedia(videoObj, this.startWebcam, errBack);
                };
            },
            showCreateFile() {
                this.toggleProperty('isCreateFile');
            },
            createFile() {
                let fileName = $('input[name=name]').val();
                //let path = $('input[name=path]').val();
                let data = {};
                data.message = "New File Creation";
                data.content = btoa(" ");
                this.ajax.put('repos/' + this.model.repository.owner.login + "/" + this.model.repository.name + "/contents/" + fileName, {
                    data: data
                }).then(function (response) {
                    console.log(response);
                });
            }
        },
        startWebcam(stream) {
            var webcam = $('#webcam')[0],
                video = webcam.querySelectorAll('video'),
                canvas = webcam.querySelectorAll('canvas');

            video.width = video.offsetWidth;

            if (navigator.getUserMedia) {
                // Standard
                video.src = stream;
                video[0].play();
            } else if (navigator.webkitGetUserMedia) {
                // WebKit
                video.src = window.webkitURL.createObjectURL(stream);
                video[0].play();
            } else if (navigator.mozGetUserMedia) {
                // Firefox
                video.src = window.URL.createObjectURL(stream);
                video[0].play();
            };

            // Click to take the photo
            $('#webcam-popup .takephoto').click(function () {
                // Copying the image in a temporary canvas
                var temp = document.createElement('canvas');

                temp.width = video.offsetWidth;
                temp.height = video.offsetHeight;

                var tempcontext = temp.getContext("2d"),
                    tempScale = temp.height / temp.width;

                temp.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);

                // Resize it to the size of our canvas
                canvas.style.height = parseInt(canvas.offsetWidth * tempScale);
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
                var context = canvas.getContext("2d"),
                    scale = canvas.width / temp.width;
                context.scale(scale, scale);
                context.drawImage(bigimage, 0, 0);
            });
        }
    });
});
;define('sample/helpers/app-version', ['exports', 'sample/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('sample/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('sample/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('sample/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sample/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('sample/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('sample/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('sample/initializers/export-application-global', ['exports', 'sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('sample/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('sample/models/repository', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _model, _attr) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _model.default.extend({
        archive_url: (0, _attr.default)(),
        archived: (0, _attr.default)(),
        assignees_url: (0, _attr.default)(),
        blobs_url: (0, _attr.default)(),
        branches_url: (0, _attr.default)(),
        clone_url: (0, _attr.default)(),
        collaborators_url: (0, _attr.default)(),
        comments_url: (0, _attr.default)(),
        commits_url: (0, _attr.default)(),
        compare_url: (0, _attr.default)(),
        contents_url: (0, _attr.default)(),
        contributors_url: (0, _attr.default)(),
        created_at: (0, _attr.default)(),
        default_branch: (0, _attr.default)(),
        deployments_url: (0, _attr.default)(),
        description: (0, _attr.default)(),
        disabled: (0, _attr.default)(),
        downloads_url: (0, _attr.default)(),
        events_url: (0, _attr.default)(),
        fork: (0, _attr.default)(),
        forks: (0, _attr.default)(),
        forks_count: (0, _attr.default)(),
        forks_url: (0, _attr.default)(),
        full_name: (0, _attr.default)(),
        git_url: (0, _attr.default)(),
        html_url: (0, _attr.default)(),
        id: (0, _attr.default)(),
        name: (0, _attr.default)(),
        node_id: (0, _attr.default)(),
        owner: (0, _attr.default)(),
        permissions: (0, _attr.default)(),
        private: (0, _attr.default)(),
        pulls_url: (0, _attr.default)(),
        releases_url: (0, _attr.default)(),
        ssh_url: (0, _attr.default)(),
        updated_at: (0, _attr.default)(),
        url: (0, _attr.default)()
    });
});
;define('sample/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        avatar_url: _emberData.default.attr(),
        bio: _emberData.default.attr(),
        blog: _emberData.default.attr(),
        collaborators: _emberData.default.attr(),
        company: _emberData.default.attr(),
        created_at: _emberData.default.attr(),
        disk_usage: _emberData.default.attr(),
        email: _emberData.default.attr(),
        events_url: _emberData.default.attr(),
        followers: _emberData.default.attr(),
        followers_url: _emberData.default.attr(),
        following: _emberData.default.attr(),
        following_url: _emberData.default.attr(),
        gists_url: _emberData.default.attr(),
        gravatar_id: _emberData.default.attr(),
        hireable: _emberData.default.attr(),
        html_url: _emberData.default.attr(),
        location: _emberData.default.attr(),
        login: _emberData.default.attr(),
        name: _emberData.default.attr(),
        node_id: _emberData.default.attr(),
        organizations_url: _emberData.default.attr(),
        owned_private_repos: _emberData.default.attr(),
        plan: _emberData.default.attr(),
        private_gists: _emberData.default.attr(),
        public_gists: _emberData.default.attr(),
        public_repos: _emberData.default.attr('number'),
        received_events_url: _emberData.default.attr(),
        repos_url: _emberData.default.attr(),
        site_admin: _emberData.default.attr(),
        starred_url: _emberData.default.attr(),
        subscriptions_url: _emberData.default.attr(),
        total_private_repos: _emberData.default.attr(),
        two_factor_authentication: _emberData.default.attr(),
        type: _emberData.default.attr(),
        updated_at: _emberData.default.attr(),
        url: _emberData.default.attr()
    });
});
;define('sample/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('sample/router', ['exports', 'sample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('repositories', function () {
      this.route('repository', { path: '/:repoName' });
    });
  });

  exports.default = Router;
});
;define('sample/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({});
});
;define('sample/routes/repositories', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('sample/routes/repositories/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        user: Ember.inject.service(),
        ajax: Ember.inject.service(),
        beforeModel() {
            if (!this.user.getUsername()) {
                this.transitionTo('/');
            }
        },
        model() {
            return this.ajax.request('users/' + this.user.getUsername() + '/repos').then(function (response) {
                return { "repos": response };
            });
        }
    });
});
;define('sample/routes/repositories/repository', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        user: Ember.inject.service(),
        ajax: Ember.inject.service(),
        beforeModel() {
            if (!this.user.getUsername()) {
                this.transitionTo('/');
            }
        },
        model(param) {
            let parentModel = this.modelFor('repositories.index');
            console.log(parentModel);
            let repository = null;
            parentModel.repos.forEach(repo => {
                if (repo.name == param.repoName) {
                    repository = repo;
                }
            });
            console.log(repository);
            return this.ajax.request('repos/' + this.user.getUsername() + '/' + param.repoName + '/contents').then(function (response) {
                return { "files": response, "repository": repository };
            });
        }
    });
});
;define('sample/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ajax.default.extend({
        user: Ember.inject.service(),
        userName: Ember.computed.oneWay('user'), //NO I18N
        headers: Ember.computed('userName', function () {
            return {
                "Authorization": "Basic " + btoa(this.user.getUsername() + ':' + this.user.getPassword()),
                "Content-Type": "application/json",
                "Accept": "application/json"
            };
        }),
        host: 'https://api.github.com'
    });
});
;define('sample/services/user', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        userName: null,
        password: null,

        setUsername(name) {
            this.set('userName', name);
        },

        setPassword(password) {
            this.set('password', password);
        },

        isAuthenticated(isAuthenticated) {
            this.set('isAuthenticated', isAuthenticated);
        },

        getUsername() {
            return this.userName;
        },

        getPassword() {
            return this.password;
        }
    });
});
;define("sample/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "khsTp6Sk", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample/templates/application.hbs" } });
});
;define("sample/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4eJo2ekc", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[0,\"\\n\\t\"],[7,\"input\"],[11,\"name\",\"username\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\\t\"],[7,\"input\"],[11,\"name\",\"password\"],[11,\"type\",\"password\"],[9],[10],[0,\"\\n\\t\"],[7,\"button\"],[11,\"name\",\"Login\"],[11,\"value\",\"submit\"],[3,\"action\",[[22,0,[]],\"login\"]],[9],[0,\"Login\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample/templates/index.hbs" } });
});
;define("sample/templates/repositories", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "flF+XdDx", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample/templates/repositories.hbs" } });
});
;define("sample/templates/repositories/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lA+xishL", "block": "{\"symbols\":[\"repo\"],\"statements\":[[7,\"div\"],[11,\"class\",\"repositories\"],[9],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"Repository Name\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"Repository Owner\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"repos\"]]],null,{\"statements\":[[0,\"        \"],[7,\"ul\"],[3,\"action\",[[22,0,[]],\"openRepositories\",[22,1,[\"name\"]]]],[9],[0,\"\\n            \"],[7,\"li\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n            \"],[7,\"li\"],[9],[1,[22,1,[\"owner\",\"login\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sample/templates/repositories/index.hbs" } });
});
;define("sample/templates/repositories/repository", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QMfr/VOb", "block": "{\"symbols\":[\"file\"],\"statements\":[[7,\"div\"],[11,\"class\",\"files\"],[9],[0,\"\\n    \"],[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"File Name\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"File path\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"files\"]]],null,{\"statements\":[[0,\"        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n            \"],[7,\"li\"],[9],[1,[22,1,[\"path\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"isCreateFile\"]]],null,{\"statements\":[[7,\"div\"],[9],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"FileName\"],[10],[0,\"\\n        \"],[7,\"input\"],[11,\"name\",\"name\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"createFile\"]],[9],[0,\"Create File\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"showCreateFile\"]],[9],[0,\"Create File\"],[10],[0,\"\\n    \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"getImage\"]],[9],[0,\"Upload Image\"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"webcam\"],[9],[0,\"\\n    \\t\"],[7,\"video\"],[9],[10],[0,\"\\n        \"],[7,\"canvas\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "sample/templates/repositories/repository.hbs" } });
});
;

;define('sample/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("sample/app")["default"].create({"name":"sample","version":"0.0.0+4d218d16"});
          }
        
//# sourceMappingURL=sample.map
