// Buttons
const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const toggleRead = document.querySelectorAll(".toggle-read");
const hideModal = document.querySelector(".hide-modal");
const buttons = document.querySelectorAll("button");

const addBookForm = document.querySelector("#addBookForm");

buttons.forEach(function (button) {
  button.addEventListener("click", performAction);
});

// Elements
const modalBox = document.querySelector(".modal");

// Implement event on toggle button
toggleRead.forEach(function (toggle) {
  toggle.addEventListener("click", function (event) {
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
function addBook() {
  addBookForm.submit();
}
function performAction(event) {
  event.preventDefault();

  let btnName = event.target.textContent;

  switch (btnName) {
    case "Add new book":
      addBook();
      break;

    default:
      break;
  }
}
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

function addNewBookToLibrary(title, author, pages, haveRead) {
  const new_book = new Book(title, author, pages, haveRead);

  books.push(new_book);
}
