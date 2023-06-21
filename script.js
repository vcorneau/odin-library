function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  if (read) {
    this.read = "Has been read"
  } else {
    this.read = "Has not been read"
  }
}

//Temporary code adding books to the array
let bookTemp1 = new Book("You Better Be Lightning", "Andrea Gibson", 115, false);
let bookTemp2 = new Book("The Midnight Library", "Matt Haig", 304, false);
let bookTemp3 = new Book("The Martian", "Andrew Weir", 384, true);
let myLibrary = [bookTemp1, bookTemp2, bookTemp3];
//End of temporary code

function createNewBook() {
  let newBook = new Book(title, author);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
};

function displayBooks() {
  let i = 0;
  while (i < myLibrary.length){
    let newCard = document.createElement("div");
    newCard.className = "bookCard";
    
    let subCardTitle = document.createElement("p");
    subCardTitle.className = "title";
    let subCardAuthor = document.createElement("p");
    subCardAuthor.className = "author";
    let subCardPages = document.createElement("p");
    subCardPages.className = "pages";
    let subCardRead = document.createElement("p");
    subCardRead.className = "read";
    let removeBook = document.createElement("button");
    removeBook.className = "removeBook";
    removeBook.innerHTML = "X";

    newCard.appendChild(subCardTitle);
    newCard.appendChild(subCardAuthor);
    newCard.appendChild(subCardPages);
    newCard.appendChild(subCardRead);
    newCard.appendChild(removeBook);

    let title = document.createTextNode(myLibrary[i].title);
    let author = document.createTextNode(myLibrary[i].author);
    let pages = document.createTextNode(myLibrary[i].pages + " pages");
    let read = document.createTextNode(myLibrary[i].read);

    subCardTitle.appendChild(title);
    subCardAuthor.appendChild(author);
    subCardPages.appendChild(pages);
    subCardRead.appendChild(read);

    const element = document.getElementById("inventory");
    element.appendChild(newCard);
    i++
    }
  }
document.getElementById("addBook");
addBook.addEventListener("click", addNewBook);

function addNewBook() {
  let form = document.createElement("div");
  form.className = "form";
  form.id = "form";

  let title = document.createElement("input");
  title.type = "text";
  title.className = "field";
  title.id = "titleField";
  title.placeholder = "Title";
  form.appendChild(title);
  
  let author = document.createElement("input");
  author.type = "text";
  author.className = "field";
  author.id = "pagesField";
  author.placeholder = "Author";
  form.appendChild(author);

  let pages = document.createElement("input");
  pages.type = "text";
  pages.className = "field";
  pages.id = "pagesField";
  pages.placeholder = "Pages";
  form.appendChild(pages);

  let read = document.createElement("Input");
  read.type = "checkbox";
  read.className = "checkbox";
  read.id = "readButton";
  read.innerHTML = "Read";
  form.appendChild(read);

  let submitButton = document.createElement("button");
  submitButton.className = "submitButton";
  submitButton.id = "submitButton";
  submitButton.innerHTML = "Submit";
  form.appendChild(submitButton);

  let displayForm = document.getElementById("formContainer");
  displayForm.appendChild(form);

  const submission = document.querySelector("#submitButton");
  submission.addEventListener("click", submitForm);
  
  function submitForm(event) {
    document.getElementById("titleField").innerHTML;
    event.preventDefault();
  }

  submitButton.addEventListener("click", function() {
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();
  });
}