import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isFilled: Ember.computed.gte('message.length', 5),
  bothValid: Ember.computed.and('isValid', 'isFilled'),
	isDisabled: Ember.computed.not('bothValid')
});
