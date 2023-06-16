function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  if (read) {
    this.read = "has been read"
  } else {
    this.read = "has not been read"
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

    let title = document.createTextNode(myLibrary.at(i).title);
    let author = document.createTextNode(myLibrary.at(i).author);
    let pages = document.createTextNode(myLibrary.at(i).pages);
    let read = document.createTextNode(myLibrary.at(i).read);

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);

    const element = document.getElementById("inventory");
    element.appendChild(newCard);
    i++
    }
  }

  displayBooks();