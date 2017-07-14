import Ember from 'ember';

export default Ember.Component.extend({
	searchValue: '',
	books: Ember.A(),
	isReading: false,

	init() {
		this._super(...arguments);

		// google.books.load();

	// Problems with the google.books.load function being destroyed after initial load meant transitioning away and then back to the free-read page would break the viewer.
		if (!window.myLoader) {
			window.myLoader = google.books.load;
		}
		window.myLoader();

    // function initialize() {
    //   var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));viewer.load('ISBN:0738531367');
    // }
    // google.books.setOnLoadCallback(initialize);
	},
	toggleBooks: function() {
		var searchedBooks = document.getElementsByClassName('customList');
		if (searchedBooks.style.display == "none") {
			searchedBooks.style.display = "block";
		} else {
			searchedBooks.style.display == "none";
		}
	},

	actions: {
		showBooks() {
			this.set('isReading', false);
		},
		hideBooks() {
			this.set('isReading', true);
		},
		readBook(thisBook) {
			this.set('isReading', true);
			var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
			viewer.load('ISBN:' + thisBook);
		},

		viewBooks() {
			this.set('isReading', false);
			var books = this.get('books');
			var searchBox = document.getElementsByClassName('bookSearch')
			var title = searchBox[0].value;

			$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title:' + title + '&maxResults=12', function(data) {
					books.pop();
					books.pushObject(data.items);
			});
		}
	}
});