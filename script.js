let myLibrary = ["buns", "butts", "bingo"];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  if (read === true) {
    this.read = "has been read"
  } else {
    this.read = "has not been read"
  }
  this.info = function() {
    return title + " by " + author + ", " + pages + " pages, " + this.read
  }
}

/*Write a function that loops through the array and displays 
each book on the page. You can display them in some sort of table, 
or each on their own “card”. It might help for now to manually add a 
few books to your array so you can see the display.*/

function displayBooks() {
  let i = 0;
  while (i <= myLibrary.length-1){
    console.log(myLibrary.at(i));
    i++
    }
  }