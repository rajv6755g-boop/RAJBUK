'use strict';

/**
 * Node/Electron main process has no `window`. Obfuscator.io VM runtime
 * sometimes references it. Set this before any VM-protected require().
 * Entry shim — main.js source untouched.
 */
(function (g) {
  if (typeof g.window === 'undefined') g.window = g;
  if (typeof g.self === 'undefined') g.self = g;
  if (typeof g.global === 'undefined') g.global = g;
})(typeof globalThis !== 'undefined' ? globalThis : global);

require('./main.js');
