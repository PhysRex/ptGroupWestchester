import WebFont from 'webfontloader';

import '../fonts/fonts.css';
// import Log from '../../utilities/logger/'


/**
 * Primarily uses the custom method of webfontloader npm package
 * -> https://www.npmjs.com/package/webfontloader#custom
 */
WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700'],
  },
  custom: {
    families: [
      'ss-pika',
      'OpenSans-Bold',
      'OpenSans-BoldItalic',
      'OpenSans-ExtraBold',
      'OpenSans-ExtraBoldItalic',
      'OpenSans-Italic',
      'OpenSans-Light',
      'OpenSans-LightItalic',
      'OpenSans-Regular',
      'OpenSans-Semibold',
      'OpenSans-SemiboldItalic',
    ],
  },
  loading: function() {
    // Log.trace('loading');
  },
  inactive: function() {
    // Log.error('inactive');
  },
  active: function() {
    // Log.trace('active');
    if (window.doc) {
      // Log.trace(' -> webfont active');
    } else {
      // Log.warn(' -> webfont active before app created');
    }
  },
  fontloading: function() {
    // Log.trace('Font Loading');
  },
  fontinactive: function(family, fvd) {
    // Log.error(`Font Error ${family} ${fvd}`);
  },
  fontactive: function(family, fvd) {
    // Log.trace(`Font Loaded ${family} ${fvd}`);
  }
});
