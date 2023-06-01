class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {// метод `fix()`, увеличивающий `state` в полтора раза.
		this.state = this.state * 1.5;
	}

	set state(num) {// принимает новое число
		if (num < 0) {
			this._state = 0;
		} else if (num > 100) {
			this._state = 100;
		} else {
			this._state = num;
		}
	}

	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {//аргументы родителя
		super(name, releaseDate, pagesCount);//наследуемые аргументы от родителя
		this.type = 'magazine'// свойство для расширения  ***PrintEditionItem*** от класса ***Magazine***
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;// расширение ***PrintEditionItem***
		this.type = 'book';// расширение ***PrintEditionItem***
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];// не принимает аргумент от класса ***class Library***, существует под капотом класса
	}


	addBook(book) {// ***будет в качестве аргумента принимать объект (книгу или журнал)***
		if (book.state > 30) {
			this.books.push(book);
		}
	}


	findBookBy(type, value) {
		let book = this.books.find(function (item) {
			if (item[type] === value) {
				return item[type]
			}
		})
		if (book != undefined) {
			return book
		} else {
			return null
		}
	}

	giveBookByName(bookName) {
		let index = this.books.findIndex((book) => book.name === bookName);
		if (index !== -1) {// запомни то*** findIndex*** возвращает индекс элемента если найдет нужный элемент и возвращает *** -1 *** если искомый элемент не будеть найден ((если index равен искомому элементу если нет, вернет *** -1*** ))
			return this.books.splice(index, 1)[0];
		} else  {
			return null;
		}
	};
}