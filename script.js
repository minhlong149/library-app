class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const libraryCards = document.querySelector(".library");
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
  libraryCards.prepend(bookCard);
}

const submitButton = document.querySelector(".input-submit");
submitButton.addEventListener("click", () => {
  // TODO: button should brings up a form

  // Get values from input
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector("#readStatus").checked;

  // Checked if input is valid
  if (title == "" || author == "" || pages == "") return;

  // Create a Book object and display it
  const newBook = new Book(title, author, pages, readStatus);
  displayBook(newBook);

  // Reset input
  document.querySelector("#title").value =
    document.querySelector("#author").value =
    document.querySelector("#pages").value =
      null;
  document.querySelector("#readStatus").checked = false;
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList == "read-update") {
    // toggles book’s read status
    const statusButton = event.target;
    const book = statusButton.parentElement;
    const status = book.querySelector(".book-readStatus");
    [status.textContent, statusButton.textContent] = [
      statusButton.textContent,
      status.textContent,
    ];
  } else if (event.target.classList == "delete") {
    // remove the book
    const book = event.target.parentElement;
    book.remove();
  }
});
