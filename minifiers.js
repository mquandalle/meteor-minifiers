CleanCSSProcess = Npm.require('clean-css').process;

removeServerCode = function(source) {
  source = Grasp.equery('Meteor.isServer --replace false', source);
  source = Grasp.equery('Meteor.isClient --replace true', source);
  return source;
};

UglifyJSMinify = function(source, options) {
  source = removeServerCode(source);
  return Npm.require('uglify-js').minify(source, options);
};
