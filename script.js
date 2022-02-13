let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function displayBook(book) {
  // Create book card
  const bookCard = document.createElement("div");
  bookCard.classList.add("book");

  // Add title
  const bookTitle = document.createElement("h1");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.title;
  bookCard.appendChild(bookTitle);

  // Add author
  const bookAuthor = document.createElement("h2");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = book.author;
  bookCard.appendChild(bookAuthor);

  // Add author
  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");
  bookPages.textContent = book.pages;
  bookCard.appendChild(bookPages);

  // Add status
  const bookStatus = document.createElement("p");
  bookStatus.classList.add("book-readStatus");
  bookStatus.textContent = book.read ? "Read" : "Unread";
  bookCard.appendChild(bookStatus);

  // Add status button
  const statusButton = document.createElement("button");
  statusButton.classList.add("read-update");
  statusButton.textContent = book.read ? "Unread" : "Read";
  bookCard.appendChild(statusButton);

  // Add delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";
  bookCard.appendChild(deleteButton);

  // Displays the book on the page
  const libraryCards = document.querySelector(".library");
  libraryCards.prepend(bookCard);
}

function displaysBooks() {
  myLibrary.forEach((book) => displayBook(book));
}

const submitButton = document.querySelector(".input-submit");
submitButton.addEventListener("click", () => {
  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#readStatus").checked;

  // Checked if form is valid
  if (title == "" || author == "" || pages == "") return;

  // Create Book object from the from
  const newBook = new Book(title, author, pages, readStatus);
  console.log(newBook); //for testing

  // Add book to library & display it
  myLibrary.push(newBook);
  displayBook(newBook);

  // Reset form values
  document.querySelector("#title").value = null;
  document.querySelector("#author").value = null;
  document.querySelector("#pages").value = null;
  document.querySelector("#readStatus").checked = false;
});

const sampleBook = new Book("Harry Potter", "J. K. Rowling", 8, true);
const sampleBook2 = new Book("Marxism-Leninism", "Marx & Lenin", 247);

myLibrary.push(sampleBook);
myLibrary.push(sampleBook2);

console.log(myLibrary);

displaysBooks();
