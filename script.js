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

console.log(myLibrary);

function displayBooks() {
  let i = 0;
  while (i < myLibrary.length){
    let newCard = document.createElement("div")
    newCard.className = "bookCard";
    let subCardTitle = document.createElement("p");
    subCardTitle.className = "title";
    let subCardAuthor = document.createElement("p");
    subCardAuthor.className = "author";
    let subCardPages = document.createElement("p");
    subCardPages.className = "pages";
    let subCardRead = document.createElement("p");
    subCardRead.className = "read";

    newCard.appendChild(subCardTitle);
    newCard.appendChild(subCardAuthor);
    newCard.appendChild(subCardPages);
    newCard.appendChild(subCardRead);

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

  displayBooks();