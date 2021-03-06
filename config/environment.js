module.exports = function(environment) {
  var ENV = {
    locationType: 'auto',

    modulePrefix: 'library-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyC_30m-WZXmXqZ7GzFMqvHjSCYvlnJZEG4",
      authDomain: "library-app-6b5b5.firebaseapp.com",
      databaseURL: "https://library-app-6b5b5.firebaseio.com",
      projectId: "library-app-6b5b5",
      storageBucket: "",
      messagingSenderId: "592772475367"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'g-map': {
      key: 'AIzaSyDgsbrqVocgMdeF2TUAbyV-jYyncuUz5r0',
    }

  };
  
  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-faker'] = {
      enabled: true
    };
  }

  return ENV;
};
