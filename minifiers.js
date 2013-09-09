CleanCSSProcess = Npm.require('clean-css').process;
UglifyJSMinify = function(source, options) {
	// This is where the magic happen
	output = source
		.replace(/Meteor\.isClient/g, 'true')
		.replace(/Meteor\.isServer/g, 'false')
	
	// Call regular uglify and return the result
	return Npm.require('uglify-js').minify(output, options);
};