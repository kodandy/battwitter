var path = require('path');

var dest = './assets/dest';
var src = './assets/src';
var relativeSrcPath = path.relative('.', src);

module.exports = {
  src: src,
  dest: dest,

  jade: {
    src: [
      src + '/templates/**/!(_)*.jade'
    ],
    dest: dest + '/templates',
    options: {pretty: true}
  },

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: true
  },

  webpack: {
    entry: src + '/js/main.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
  },

  stylus: {
    src: [
      src + '/stylus/**/!(_)*'
    ],
    dest: dest + '/css/',
    output: 'main.css',
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },

 copy: {
    src: [
      src + '/images/**/*'
    ],
    dest: dest + '/images/'
  },

 watch: {
    js: relativeSrcPath + '/js/**',
    styl: relativeSrcPath + '/styl/**',
    jade: relativeSrcPath + '/templates/**',
    copy: relativeSrcPath + '/images/**',
    browserSync: relativeSrcPath + '/**',
  },
}
