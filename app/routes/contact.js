import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('contact');
	},

	actions: {

  	saveMessage(newContact) {
  		newContact.save().then(() => this.transitionTo('/'));
  	},

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
	}
});
