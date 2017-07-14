import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import Ember from 'ember';

moduleForComponent('free-read', 'Integration | Component | free read', {
  integration: true
});

test('page renders with a search box', function(assert) {
  this.render(hbs`{{free-read}}`);

  assert.equal(this.$('.bookSearch').text().trim(), '');
});

// test('10 books are found when a user clickd on the search button', function(assert) {
//   this.render(hbs`{{free-read}}`);

//   this.$('.')
// });