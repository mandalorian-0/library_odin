const addBtn = document.querySelector(".btn-add");
const clearBtn = document.querySelector(".btn-clear");
const toggleRead = document.querySelectorAll(".toggle-read");

// Implement event on button
toggleRead.forEach(function (toggle) {
  toggle.addEventListener("click", function (event) {
    event.preventDefault();

    let parent = this.closest("li");
    parent.querySelector("span.read-info").textContent = "read";
  });
});
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
