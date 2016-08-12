(require './src')
	bundle:        enabled: true
	documentation: enabled: true
	forever:       enabled: false
	nodemon:       enabled: true
	less:          enabled: false
	livereload:    enabled: true
	tests:         enabled: true
	copy:          enabled: true
	watch:         enabled: true
	coffee:
		enabled:             true
		sourceDirectoryPath: "src"
		targetDirectoryPath: "build"
