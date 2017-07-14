import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import sinon from 'sinon';

moduleForComponent('author-listing', 'Integration | Component | author listing', {
  integration: true
});

test('it should show a list of authors', function(assert) {
  this.set('author', Ember.A([
    Ember.Object.create({
      name: 'Luke'
    })
  ]));
  this.render(hbs`{{author-listing model=author}}`);

  assert.equal(this.$('.name').text().trim(), 'Luke');

});
test('when editing an author name, you should see a save button appear', function(assert) {
  this.set('author', Ember.A([
    Ember.Object.create({
      name: 'Luke'
    })
  ]));
  this.render(hbs`{{author-listing model=author}}`);

  this.$('.name').click();

  assert.equal(this.$('.saveButton').text().trim(), 'Save');
});

test('when clicking on the save button the edited author name should save', function(assert) {
  const save = sinon.stub();
  this.set('author', Ember.A([
    Ember.Object.create({
      name: 'Luke',
      save,
    })
  ]));
  this.render(hbs`{{author-listing model=author}}`);

  this.$('.name').click();

  this.$('.nameField').val('Mike');
  this.$('.nameField').change();

  this.$('.saveButton').click();

  assert.equal(this.$('.name').text().trim(), 'Mike');
  sinon.assert.calledOnce(save);

});
