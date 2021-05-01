class Media {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(value) {
      this._ratings.push(value);
    }
  
    set isCheckedOut(bool) {
      this._isCheckedOut = bool;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    } 
  
    get pages() {
      return this._pages;
    }
  
    get getAverageRating() {
      let sum = 0
      this._ratings.forEach(item => sum += item);
      return (sum/this._ratings.length).toFixed(2);
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
    get getAverageRating() {
      let sum = 0;
      this._ratings.forEach(item => sum += item)
      return (sum/this._ratings.length).toFixed(2);
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  console.log(historyOfEverything);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.ratings);
  console.log(speed.getAverageRating);
  