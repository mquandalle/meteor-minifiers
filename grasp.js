// See documentation at http://graspjs.com/
// 
// XXX This should be in a separate package that would exports the global object 
// `Grasp`. I'm waiting for the new package system to make this change.

var grasp = Npm.require('grasp');
var stream = Npm.require('stream');

var defineQueryLanguage = function (queryLanguage) {
	return Meteor._wrapAsync(function (query, source, callback) {
		var passthrough = new stream.PassThrough();
		grasp({
			// Prefix with --equery or --squery
			args: '--' + queryLanguage + ' ' + query,

			// See http://stackoverflow.com/questions/19878078/string-variable-to-stdin-interface#19878183
			stdin: passthrough,

			// Our callback use the classical `function (err, res)` signature
			// This is required by the use of Meteor._wrapAsync
			callback: function (res) { callback(null, res); },
			error: function(err) { callback(err, null); }
		});
		passthrough.push(source);
		passthrough.end();
	});
};

Grasp = {
	equery: defineQueryLanguage('equery'),
	squery: defineQueryLanguage('squery'),
	_grasp: grasp
};
