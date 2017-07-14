import { test } from 'qunit';
import moduleForAcceptance from 'library-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | library application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
