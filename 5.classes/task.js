// ## Задача №1. Печатное издание
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
	  this.name = name;
	  this.releaseDate = releaseDate;
	  this.pagesCount = pagesCount;
	  this.state = 100;
	  this.type = null;
	}
  
	fix() {
	  this.state = this._state * 1.5;
	}
  
	set state(newState) {
	  if (newState < 0) {
		this._state = 0;
		return;
	  } else if (newState > 100) {
		this._state = 100;
		return;
	  } else {
		this._state = newState;
	  }
	  
	}
  
	get state() {
	  return this._state;
	}
  }

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
	constructor(name, realeseDate, pagesCount) {
		super(name, realeseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, realeseDate, pagesCount){
		super(name, realeseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, realeseDate, pagesCount) {
		super(author, name, realeseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, realeseDate, pagesCount) {
		super(author, name, realeseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, realeseDate, pagesCount) {
		super(author, name, realeseDate, pagesCount);
		this.type = "detective";
	}
}


const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15




// ## Задача №2. Библиотека

class Library {
	constructor(name) {
	  this.name = name;
	  this.books = [];
	}
  
	addBook(book) {
	  let bookState = book.state;
	  if (bookState > 30) {
		this.books.push(book);
	  }
	}
  
	findBookBy(type, value) {
	  let searchedBook = this.books.find((obj) => obj[type] === value);
	  if (searchedBook === undefined) {
		return null;
	  } else {
		return searchedBook;
	  }
	}
  
	giveBookByName(bookName) {
	  let givenBook = this.findBookBy("name", bookName);
	  if (givenBook === undefined) {
		return null;
	  } else {
		this.books = this.books.filter((obj) => obj.name !== bookName);
		return givenBook;
	  }
	}
  }
  
  
  const library = new Library("Библиотека имени Ленина");

  library.addBook(
	new DetectiveBook(
	  "Артур Конан Дойл",
	  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	  2019,
	  1008
	)
  );

  library.addBook(
	new FantasticBook(
	  "Аркадий и Борис Стругацкие",
	  "Пикник на обочине",
	  1972,
	  168
	)
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3