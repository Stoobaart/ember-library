import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAuthor(author) {
      author.set('isEditing', true);
    },
    cancelAuthorEdit(author) {
      author.set('isEditing', false);
      author.rollbackAttributes();
    },
    saveAuthor(author) {
      if (author.get('isNotValid')) {
        return;
      }
      author.set('isEditing', false);
      author.save();
    }
  }
});
