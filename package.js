Package.describe({
  summary: "JavaScript and CSS minifiers",
  internal: true
});

Npm.depends({
  "clean-css": "2.0.0",
  "grasp": "0.1.0",
  "uglify-js": "2.4.3"
});

Package.on_use(function (api) {
  api.export(['CleanCSSProcess', 'UglifyJSMinify']);
  api.add_files(['grasp.js', 'minifiers.js'], 'server');
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.add_files(['grasp.js', 'minifiers.js', 'tests.js'], 'server');
});
