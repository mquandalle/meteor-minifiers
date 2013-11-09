Package.describe({
  summary: "JavaScript and CSS minifiers",
  internal: true
});

Npm.depends({
  "clean-css": "1.0.11",
  "grasp": "0.1.0",
  // We depend on this commit, which has not been released yet.
  "uglify-js": "https://github.com/mishoo/UglifyJS2/tarball/b1febde3e9be32b9d88918ed733efc3796e3f143"
});

Package.on_use(function (api) {
  api.export(['CleanCSSProcess', 'UglifyJSMinify']);
  api.add_files(['grasp.js', 'minifiers.js'], 'server');
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.add_files(['grasp.js', 'minifiers.js', 'tests.js'], 'server');
});
