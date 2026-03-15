const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const toggleRead = document.querySelector(".toggle-read");
const hideModal = document.querySelector(".hide-modal");

const addBookForm = document.querySelector("#addBookForm");

const bookLists = document.querySelector(".book_lists");
const modalBox = document.querySelector(".modal");
const form = document.querySelector("form");

function Book(title, author, pages, haveRead = "Have not yet read") {
  if (!new.target) {
    throw Error("You must use the new keyword when creating a new book");
  }
  ((this.id = crypto.randomUUID()),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead));
}

const books = [
  {
    id: 12,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
  {
    id: 13,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: true,
  },
  {
    id: 14,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
  {
    id: 15,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
  {
    id: 16,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
  {
    id: 17,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
  {
    id: 18,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  books.forEach(function (book) {
    loadBooks(book);
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  addNewBookToLibrary(
    formData.get("title"),
    formData.get("author"),
    formData.get("num_pages"),
  );

  modalBox.classList.remove("show-modal");
  form.reset();
});

bookLists.addEventListener("click", function (event) {
  event.preventDefault();

  let bookCard = event.target.closest("li");
  let clickedBookId = parseInt(bookCard.dataset.index);

  let foundBook = books.find((book) => book.id === clickedBookId);

  if (event.target.matches(".toggle-read")) {
    changeReadStatus(foundBook);
    changeCardReadStatus(bookCard, foundBook);
  } else if (event.target.matches(".remove-book")) {
    removeBook(bookCard, clickedBookId);
  }
});

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  modalBox.classList.add("show-modal");
});

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  deleteAllBooks();
});
hideModal.addEventListener("click", function (event) {
  event.preventDefault();

  modalBox.classList.remove("show-modal");
});

function addNewBookToLibrary(title, author, pages, haveRead) {
  const new_book = new Book(title, author, pages, haveRead);

  books.push(new_book);

  createNewItem(new_book);
}

function createNewItem(book) {
  const newListElement = document.createElement("li");
  newListElement.classList.add("book");
  newListElement.dataset.index = book.id;

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = book.title;

  const author = document.createElement("p");
  author.classList.add("book__author");
  author.textContent = book.author;

  newListElement.appendChild(bookTitle);
  newListElement.appendChild(author);

  const bookInfoContainer = document.createElement("div");
  bookInfoContainer.classList.add("book__info");

  const pageNums = document.createElement("span");
  pageNums.textContent = `${book.pages} pages`;

  const readStatus = document.createElement("span");
  readStatus.textContent = book.haveRead ? "Have not yet read" : "Read";

  bookInfoContainer.appendChild(pageNums);
  bookInfoContainer.appendChild(readStatus);

  newListElement.appendChild(bookInfoContainer);

  const actionContainer = document.createElement("div");
  actionContainer.classList.add("book__action");

  const toggleReadBtn = document.createElement("button");
  toggleReadBtn.textContent = "Toggle read";
  toggleReadBtn.classList.add("toggle-read");

  const removeBookBtn = document.createElement("button");
  removeBookBtn.textContent = "Remove book";
  removeBookBtn.classList.add("remove-book");

  actionContainer.appendChild(toggleReadBtn);
  actionContainer.appendChild(removeBookBtn);

  newListElement.appendChild(actionContainer);
  bookLists.appendChild(newListElement);
}

function loadBooks(book) {
  createNewItem(book);
}

function removeBook(bookCard, idToRemove) {
  books.splice(idToRemove, 1);
  bookCard.remove();
}

function changeReadStatus(foundBook) {
  foundBook.haveRead =
    foundBook.haveRead === "Read" ? "Have not yet read" : "Read";
}

function changeCardReadStatus(card, foundBook) {
  const statusDiv = card.querySelector(".book__info");

  const statusSpan = statusDiv.querySelectorAll("span")[1];

  statusSpan.textContent = foundBook.haveRead;
}

function deleteAllBooks() {
  bookLists.replaceChildren();
}
