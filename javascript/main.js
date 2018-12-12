
// // // Object literal
// // // const book1 = {
// // //     title: 'Book One',
// // //     author: 'John Doe',
// // //     year: '2013',
// // //     getSummary: function() {
// // //         return `${this.title} was written by ${this.author} in ${this.year}`;
// // //     }
// // // };

// // // document.write(book1.getSummary());

// // // const book2 = {
// // //     title: 'Book Two',
// // //     author: 'Jane Doe',
// // //     year: '2016',
// // //     getSummary: function() {
// // //         return `${this.title} was written by ${this.author} in ${this.year}`;
// // //     }
// // // };

// // // document.write(book2.getSummary());

// // // console.log(Object.values(book2));
// // // console.log(Object.keys(book2));


// // //Constructor

// // // function Book(title, author, year) {
// // //     this.title = title;
// // //     this.author = author;
// // //     this.year = year;
// // //     this.getSummary = function () {
// // //         return `${this.title} was written by ${this.author} in ${this.year}`;
// // //     };
    
// // // }

// // // const book1 = new Book('Book One', 'John Doe', '2013');
// // // const book2 = new Book('Book Two', 'Jane Doe', '2016');

// // // console.log(book1.getSummary());

// // function Book(title, author, year) {
// //     this.title = title;
// //     this.author = author;
// //     this.year = year;
// // }

// // //getSummary

// // Book.prototype.getSummary = function() {
// //     return `${this.title} was written by ${this.author} in ${this.year}`;
// // };

// // //getAge

// // Book.prototype.getAge = function() {
// //     const years = new Date().getFullYear() - this.year;
// //     return `${this.title} is ${years} years old`;
// // };

// // // Revise / Change Year
// // Book.prototype.revise = function(newYear) {
// //     this.year = newYear;
// //     this.revised = true;
// // }

// // const book1 = new Book('Book One', 'John Doe', '2013');
// // const book2 = new Book('Book Two', 'Jane Doe', '2016');

// // console.log(book2);
// // book2.revise('2018');
// // console.log(book2);


// // Constructor

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// //getSummary

// Book.prototype.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// // Magazine Constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title,author, year);

//     this.month = month;
// }

// //Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// // Instantiate Magazine
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// // Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

//Object Of Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.title = 'John Doe';
book1.year = '2013';

console.log(book1);
