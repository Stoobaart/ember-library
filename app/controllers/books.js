import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
		filterByTitle(param) {
			let capParam = param.toUpperCase();
      if (param !== '') {
      	return this.store.query('book', {orderBy: 'title', startAt: capParam });
      } else {
        return this.store.findAll('book');
      }
	  }
  }
});
