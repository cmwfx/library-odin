let addBookBtn = document.querySelector("#add-book-btn");
let addBookContainer = document.querySelector(".add-book-container");
let bookAuthor = document.querySelector("#book-author");
let bookTitle = document.querySelector("#book-title");
let bookPages = document.querySelector("#book-pages");
let bookRead = document.querySelector("#checkbox");
let NewBookBtn = document.querySelector(".add-book-btn");
let bookTitle1 = document.querySelector("#book-title");
let container = document.querySelector(".container");
let bookCardContainer = document.querySelector(".book");
let readBtn = document.querySelector(".read-btn");
// let theHobbit = new Books("The Hobbit", "J.R.R. Tolkien", 295, false);
// let harryPotter = new Books("Harry Potter", "J.K. Rowling", 411, true);
// console.log(harryPotter.info());
addBookBtn.addEventListener("click", addBookToLibrary);
let title = "";
let author = "";
let pages = "";
let read;
NewBookBtn.addEventListener("click", function (event) {
	event.preventDefault();
	title = bookTitle.value;
	author = bookAuthor.value;
	pages = bookPages.value;
	read = bookRead.checked;
	bookTitle1.innerHTML = title;
	newBookObject();
	// createBookCard();
	loopMyLibrary();
	console.log(myLibrary);
	bookTitle.value = "";
	bookAuthor.value = "";
	bookPages.value = "";
	bookRead.checked = false;
	addBookContainer.style.display = "none";
});

const myLibrary = [];

function Book(title, author, pages, read) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		// do stuff here
	};
}
function newBookObject() {
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
}

function addBookToLibrary() {
	// do stuff here
	addBookContainer.style.display = "flex";
}
function createBookCard() {
	const bookCard = document.createElement("div");
	bookCard.classList.add("book");
	const bookTitleValue = document.createElement("h3");
	bookTitleValue.classList.add("book-item");
	bookTitleValue.classList.add("book-item-name");

	const bookAuthorValue = document.createElement("p");
	bookAuthorValue.classList.add("book-item");
	bookAuthorValue.classList.add("book-item-author");

	const bookPagesValue = document.createElement("p");
	bookPagesValue.classList.add("book-item");
	bookPagesValue.classList.add("book-item-pages");

	const bookReadValue = document.createElement("button");
	bookReadValue.classList.add("book-item");
	bookReadValue.classList.add("book-item-read");
	bookReadValue.classList.add("read-btn");

	const bookDeleteValue = document.createElement("button");
	bookDeleteValue.classList.add("remove-btn");
	bookDeleteValue.classList.add("book-item-delete");

	bookCard.appendChild(bookTitleValue);
	bookCard.appendChild(bookAuthorValue);
	bookCard.appendChild(bookPagesValue);
	bookCard.appendChild(bookReadValue);
	bookCard.appendChild(bookDeleteValue);

	// let libraryValue = myLibrary.length - 1;
	// for (let i = libraryValue; i >= 0; i--) {
	// 	bookTitleValue.textContent = myLibrary[i].title;
	// 	bookAuthorValue.textContent = myLibrary[i].author;
	// 	bookPagesValue.textContent = `${myLibrary[i].pages} pages`;
	// 	if (myLibrary[i].read) {
	// 		bookReadValue.textContent = "Read";
	// 	} else {
	// 		bookReadValue.textContent = "Not Read";
	// 		bookReadValue.style.backgroundColor = "#ff9c9c";
	// 	}
	// }

	// bookTitleValue.textContent = title;
	// bookAuthorValue.textContent = author;
	// bookPagesValue.textContent = `${pages} pages`;
	// if (read) {
	// 	bookReadValue.textContent = "Read";
	// } else {
	// 	bookReadValue.textContent = "Not Read";
	// 	bookReadValue.style.backgroundColor = "#ff9c9c";
	// }
	bookDeleteValue.textContent = "Remove";
	container.appendChild(bookCard);
	return {
		bookTitleValue,
		bookAuthorValue,
		bookPagesValue,
		bookReadValue,
		bookDeleteValue,
	};
}
function loopMyLibrary() {
	let libraryValue = myLibrary.length - 1;
	for (let i = libraryValue; i >= 0; i--) {
		//bookCardContainer.innerHTML = "";
		if (myLibrary.length - 2 == i) {
			let bookCardContainerArray = Array.from(bookCardContainer);
			bookCardContainerArray.forEach(function (element) {
				element.remove();
			});
		}
		const {
			bookTitleValue,
			bookAuthorValue,
			bookPagesValue,
			bookReadValue,
			bookDeleteValue,
		} = createBookCard();
		bookTitleValue.textContent = myLibrary[i].title;
		bookAuthorValue.textContent = myLibrary[i].author;
		bookPagesValue.textContent = `${myLibrary[i].pages} pages`;

		bookDeleteValue.addEventListener("click", function () {
			myLibrary.splice(i, 1);
			let DeleteBook = document.querySelectorAll(".book")[i];
			DeleteBook.parentNode.removeChild(DeleteBook);
		});

		if (myLibrary[i].read) {
			bookReadValue.textContent = "Read";
			bookReadValue.addEventListener("click", function () {
				if (bookReadValue.textContent == "Read") {
					bookReadValue.textContent = "Not Read";
					bookReadValue.style.backgroundColor = "#ff9c9c";
				} else {
					bookReadValue.textContent = "Read";
					bookReadValue.style.backgroundColor = "#9cff9c";
				}
			});
		} else {
			bookReadValue.textContent = "Not Read";
			bookReadValue.style.backgroundColor = "#ff9c9c";
			bookReadValue.addEventListener("click", function () {
				if (bookReadValue.textContent == "Read") {
					bookReadValue.textContent = "Not Read";
					bookReadValue.style.backgroundColor = "#ff9c9c";
				} else {
					bookReadValue.textContent = "Read";
					bookReadValue.style.backgroundColor = "#9cff9c";
				}
			});
		}

		bookTitle.value = "";
		bookAuthor.value = "";
		bookPages.value = "";
		bookRead.checked = false;
		addBookContainer.style.display = "none";
	}
}

// function removeBookCard() {
// 	loopMyLibrary();
// }
