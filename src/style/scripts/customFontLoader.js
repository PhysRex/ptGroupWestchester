import WebFont from 'webfontloader';

import '../fonts/fonts.css';
// import Log from '../../utilities/logger/'


/**
 * Primarily uses the custom method of webfontloader npm package
 * -> https://www.npmjs.com/package/webfontloader#custom
 */
WebFont.load({
  google: {
    families: [
      'Titillium Web:300,400,700',
      'Alegreya SC:300,400,700',
      'Cinzel:300,400,700',
      'Cinzel Decorative:300,400,700',
      'Playfair Display SC:300,400,700',
      'Quattrocento:300,400,700',
      'Ultra:300,400,700',
      'Merriweather:300,400,700',
      'Sofia:300,400,700',
      'Rouge Script:300,400,700',
      'Oleo Script Swash Caps:300,400,700',
      'Laila:300,400,500,600,700',
      'Parisienne:400',
      'Mate SC:400',
      'Diplomata SC:400',
      'Gravitas One:400'
    ]
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
