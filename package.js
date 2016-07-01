/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'fuww:google-analytics',
  version: '0.0.1',
  summary: 'A lightweight package to add google analytics easily to meteor',
  git: 'https://github.com/fuww/meteor-google-analytics.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript@0.4.0',
    'random@1.0.7'
  ], 'client');

  api.mainModule('client/main.js', 'client');

  api.export([
    'ga'
  ], 'client');
});
