import Ember from 'ember';

export default Ember.Controller.extend({

  email: '',
  message: '',

  isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isFilled: Ember.computed.gte('model.message.length', 5),
  bothValid: Ember.computed.and('isValid', 'isFilled'),
	isDisabled: Ember.computed.not('bothValid')
});