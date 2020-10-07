// ## Extra Practice

// ### Create a Book Class

// Create a book class. Make sure that your book class has at least 3 properties and 2 methods. Log those instances using your repl console or console.logs

class Book {
  constructor(title, genre, pages) {
    this.title = title,
    this.genre = genre,
    this.pages = pages,
    this.pagesRead = 0
  }

  readPages(pages) {
    this.pagesRead += pages;
    console.log(`You have read ${this.pagesRead} pages`);
  }

  percentageComplete() {
    let percentage = (this.pagesRead/this.pages * 100).toFixed(2)
    console.log(`You have read ${percentage}% of ${this.title}.`)
  }
}

let dune = new Book('Dune', 'Scifi', 425);
dune.readPages(10)
dune.readPages(140)
dune.percentageComplete()


// ### Create a Library Class

// Create a Library class. Add properties as you wish, but the be sure to include a `collection` property that starts as an empty array.


// If you have time:

// * Add an `addBook` method that takes an instance of book and adds it to your collection.
// * Add a `titles` method that iterates over your collection of books and returns only their titles.
// * Add an `authors` method that iterates over your collection of books and returns the authors for each book.