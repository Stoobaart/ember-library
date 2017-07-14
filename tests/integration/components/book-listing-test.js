import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import sinon from 'sinon';

moduleForComponent('book-listing', 'Integration | Component | book listing', {
  integration: true
});

test('it should show a list of books', function(assert) {
  this.set('book', Ember.A([
    Ember.Object.create({
      title: 'Test Book',
      releaseYear: '01/01/2000'
    })
  ]));
  this.render(hbs`{{book-listing model=book}}`);
  assert.equal(this.$('.title').text().trim(), 'Test Book');
});

test('when editing a book name you should see a save button appear', function(assert) {
  this.set('book', Ember.A([
    Ember.Object.create({
      title: 'Test Book',
      releaseYear: '01/01/2000'
    })
  ]));
  this.render(hbs`{{book-listing model=book}}`);

 this.$('.title').click();

 assert.equal(this.$('.saveButton').text().trim(), 'Save')
  
});


test('when clicking on the save button the edited book name should save', function(assert) {
  const save = sinon.stub();
  this.set('book', Ember.A([
    Ember.Object.create({
      title: 'Test Book',
      releaseYear: '01/01/2000',
      save,
    })
  ]));
  this.render(hbs`{{book-listing model=book}}`);

  this.$('.title').click();

  this.$('.titleField').val('Test Book 2');
  this.$('.titleField').change();

  this.$('.saveButton').click();

  assert.equal(this.$('.title').text().trim(), 'Test Book 2');
  sinon.assert.calledOnce(save);
});
