# grunt-patternlibrary

> Create a pattern library with a set of HTML files.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-patternlibrary --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-patternlibrary');
```

## The "patternlibrary" task

### Overview
In your project's Gruntfile, add a section named `patternlibrary` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  patternlibrary: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
No task-wide options

#### Custom Options

```js
grunt.initConfig({
  patternlibrary: {
    patterns: {
      // Destination folder for the generated pattern library to be saved in
      dest: 'patterns/dist',

      // Name of the index HTML file that is generated (default: "index.html")
      indexName: 'foobar.html',

      // Stylesheets to include on the page (path relative to "dest") -- will be output in sequential order in the HEAD of the document
      stylesheets: [ 'stylesheet1.css', 'stylesheet2.css' ],

      // JavaScripts to include on the page (path relative to "dest") -- wil be output in sequential order at the bottom of the BODY tag in the document
      javascripts: [ 'script1.js', 'script2.js' ],

      // If this is set to true, none of grunt-patternlibrary's built in CSS or JS will be brought through to the output (optional)
      blankCanvas: true

      // Title for the pattern library
      title: 'My Pattern Library',

      // Additional files to include (these can be referenced in the "stylesheets" and "javascripts" options above)
      include: [
        {
          src: 'some-folder/style.css',
          // Relative to "dest"
          dest: 'css/my-styles.css'
        }
      ],

      // Path to your individual pattern HTML files
      src: 'patterns/src/**/*.html',

      // Path to a custom template for individual patterns
      patternTemplate: 'patterns/patternTemplate.html',

      // Path to a custom template for the wrapper around the patterns
      wrapperTemplate: 'patterns/wrapperTemplate.html'
    }
  }
});
```

##Patterns
Each HTML file found by the `src` path can be considered a *pattern*

The Pattern file supports 'YAML frontmatter' that allows data added at the top of the file to be used by the patternlibrary, it looks something like this:

```yml
---
	title: Headings
---
```

anything between the tripple-dashed lines will be parsed as [YAML](http://www.yaml.org/)

The patternlibrary supports the following options;

| Option | Description |
:---|:---
| `title` | The only **required** variable, it is used as the pattern name within the ui
| `status` | By default; displays an icon next to the pattern entry that denotes its progress.<br>Supported values: `not-started` `in-progress` `done`
| `category` | If set; creates a category that can be associated with one or many patterns (by adding the same value to multiple patterns) to form logical groups within the ui
| `template` | If set; uses the specified html file to wrap the pattern without including it in the source output. Use [EJS](http://www.embeddedjs.com/) to add the pattern content to each template: `<%= content %>`
| `notes` | Allows the addition of markdown enhanced documentation to the pattern. Note: to preserve newlines in yaml; use a pipe character followed by the multi-line content [example](https://gist.github.com/rjattrill/7523554)

A full example of a pattern's frontmatter:

```yml
---
	title: Headings
	status: done
	category: Text
	template: content-box
	notes: |
		**heading styles** for user editted content throughout the site
---
```




## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
