// Buttons
const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const toggleRead = document.querySelectorAll(".toggle-read");
const hideModal = document.querySelector(".hide-modal");
// const buttons = document.querySelectorAll("button");

const addBookForm = document.querySelector("#addBookForm");

// buttons.forEach(function (button) {
//   button.addEventListener("click", performAction);
// });

// Elements
const bookLists = document.querySelector(".book_lists");
const modalBox = document.querySelector(".modal");
const form = document.querySelector("form");

//load book lists when page load
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

  //   document.
});

// Implement event on toggle button
toggleRead.forEach(function (toggle) {
  toggle.addEventListener("click", function (event) {
    console.log("here");

    event.preventDefault();

    let parent = this.closest("li");
    parent.querySelector("span.read-info").textContent = "read";
  });
});

// Implement event on add book btn
addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  modalBox.classList.add("show-modal");
});

// Implement event on hide modal btn
hideModal.addEventListener("click", function (event) {
  event.preventDefault();

  modalBox.classList.remove("show-modal");
});

// function performAction(event) {
//   event.preventDefault();

//   let btnName = event.target.textContent;

//   switch (btnName) {
//     case "Add book":
//       addBook(event);
//       break;

//     default:
//       break;
//   }
// }
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
    id: 13,
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 230,
    haveRead: false,
  },
];

function Book(title, author, pages, haveRead = false) {
  if (!new.target) {
    throw Error("You must use the new keyword when creating a new book");
  }
  ((this.id = crypto.randomUUID()),
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.haveRead = haveRead));
}

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
  author.textContent = book.author;

  newListElement.appendChild(bookTitle);
  newListElement.appendChild(author);

  const bookInfoContainer = document.createElement("div");
  bookInfoContainer.classList.add("book__info");

  const pageNums = document.createElement("span");
  pageNums.textContent = book.pages;

  const readStatus = document.createElement("span");
  readStatus.textContent = book.haveRead ? "Read" : "Have not yet read";

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
