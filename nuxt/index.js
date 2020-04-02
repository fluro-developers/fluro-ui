/*
Nuxt.js module for fluro-ui
Usage:
    - Install fluro-ui package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'fluro-ui/nuxt'
            // Optionally passing options in module configuration
            ['fluro-ui/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        FluroUI: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.FluroUI, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'fluro-ui-plugin.template.js.tpl'),
    fileName: 'fluro-ui-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
