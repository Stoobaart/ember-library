// import DS from 'ember-data';

// export default DS.Model.extend({
//   name: DS.attr('string'),
//   books: DS.hasMany('book')
// });

import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({

  name: DS.attr('string'),
  books: DS.hasMany('book', {inverse: 'author'}),

  book: DS.belongsTo('book', {inverse: 'author', async: true}),

  isNotValid: Ember.computed.empty('name'),

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }
});