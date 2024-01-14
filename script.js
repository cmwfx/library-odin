function Books(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			this.read ? "read" : "not read yet"
		}`;
	};
	// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}
let theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
let harryPotter = new Books("Harry Potter", "J.K. Rowling", 411, true);
console.log(harryPotter.info());

const myLibrary = [];

function Book() {
	// the constructor...
}

function addBookToLibrary() {
	// do stuff here
}
