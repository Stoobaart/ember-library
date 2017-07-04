import Ember from 'ember';

export default Ember.Controller.extend({

	email: '',

 	headerMessage: 'Coming Soon',

  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')
});














