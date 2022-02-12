//  book objects are stored in a array
let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} page${this.pages > 1 ? 's' : ''}, ${this.read ? "is read" : "not read yet"}`;
  }
};

// let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
// console.log(hobbit.info())

function addBookToLibrary() {
  /**
   * take user’s input
   * store the new book objects into an array
   */
}

function displaysBooks() {
  /**
   * loops through the array,
   * displays each book on the page
   * in some sort of table or on their own “card”
   */
}