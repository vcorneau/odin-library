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

const bookOne = new Book("Train your Brain", "Emily Stonecipher", 200, true)
const bookTwo = new Book("Train your Butt", "My brain", 100, false)

console.log(bookOne.info());
console.log(bookTwo.info());
