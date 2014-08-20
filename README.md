# grunt-keaton

> Bust your assets via a hash change in a dedicated one liner version file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-keaton --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-keaton');
```

## The "keaton" task

### Overview
In your project's Gruntfile, add a section named `keaton` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  keaton: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.algorithm
Type: `String`
Default value: `'sha1'`

Hash algorithm such as `'sha1'`, `'md5'`, `'sha256'`, etc.
Note that it must be available on your platform.

#### options.length
Type: `Integer`
Default value: `3`

The length of the generated hash.

### Usage Examples

#### Default Options
Using sha1 algorithm to generate a 3 character hash in ./version.txt

```js
grunt.initConfig({
  keaton: {
    options: {},
    files: {
      src: ['version.txt']
    },
  },
});
```

#### Custom Options
Using md5 algorithm to generate a six character hash in ./static/version.txt

```js
grunt.initConfig({
  keaton: {
    options: {
      algorithm: 'md5',
      length: 6,
    },
    files: {
      src: ['static/version.txt']
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
