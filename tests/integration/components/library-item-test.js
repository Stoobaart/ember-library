import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('library-item', 'Integration | Component | library item', {
  integration: true
});

test('a single panel renders on the libraries view page', function(assert) {

  this.set('item', Ember.A([
    Ember.Object.create({
      name: 'The British Library',
      address: '96 Euston Road London NW1 2DB',
      phone: '020 3787 8789',
      lat: '51.5300013',
      lng: '-0.1286335'
    })
  ]));

  this.render(hbs`{{library-item model=item}}`);

  assert.equal(this.$('.address').text().trim(), 'Address: 96 Euston Road London NW1 2DB');

});
