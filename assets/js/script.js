// (title, author, pages, haveRead);
const books = [];

function Book(title, author, pages, haveRead = false) {
  if (!new.target) {
    throw Error("You must use the new keyword when creating a new book");
  }
  ((this.id = crypto.randomUUID()),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.have = haveRead));
}

function createBook(title, author, pages, haveRead) {
  const new_book = new Book(title, author, pages, haveRead);

  books.push(new_book);
}
