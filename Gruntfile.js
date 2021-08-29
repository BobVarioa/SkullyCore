/**
 *
 * @param {import("grunt")} grunt
 */
module.exports = (grunt) => {
	require("@masterofbob777/grunt-config")(grunt, {
		configs: {
			platform: "browser",
			target: "es6",
		},
		options: {
			typescript: true,
		},
		general: {
			indir: "src",
			outdir: "dist",
			entry: "index",
		},
	});

	grunt.registerTask("full_build", [
		"build", 
		//"shell:dtsbundle"
	]);
};
