//not transpiled

// register babel to transpile before tests are runs
require('babel-register')();

//disable functions that webpack doesn't understand
require.extensions['.css'] = function() {};
