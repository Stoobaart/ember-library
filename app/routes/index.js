import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      let model = this.controller.get('model');

      if(model.get('hasDirtyAttributes')) {
        let confirmation = confirm('Your Invitation has been requested');
      }

      newInvitation.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();

  //     this.controller.get('model').rollbackAttributes();
  //     alert("Your Invitation has been requested");
  //   }

    }
  }
});