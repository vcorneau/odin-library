// Book constructor
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

let myLibrary = [];

// Creates a new card to display books from array
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

// Creates a form to enter new book information
function addNewBookForm() {
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
  author.id = "authorField";
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
}
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", addNewBookForm);

// Submits form and displays books to the page
function submitForm(event) {
  event.preventDefault();
  document.getElementsByClassName("field");
  let title = titleField.value;
  let author = authorField.value;
  let pages = pagesField.value;
  let read = readButton.value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm());