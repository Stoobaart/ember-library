import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		editBook(book) {
			book.set('isEditing', true);
		},
		cancelBookEdit(book) {
			book.set('isEditing', false);
			book.rollbackAttributes();
		},
		saveBook(book) {
			if(book.get('isNotValid')) {
				return;
			}
			book.set('isEditing', false);
			book.save();
		}
	}
});
