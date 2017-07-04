import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
		filterByAuthor(param) {
			let capParam = param.toUpperCase();
      if (param !== '') {
      	return this.store.query('author', {orderBy: 'name', startAt: capParam });
      } else {
        return this.store.findAll('author');
      }
	  }
  }
});