//array books for stocking all books

let books = [
    {
        title: "The Lady of the Camellias",
        price: 30,
        author: "Alexandre Dumas fils",
        date: '2022-02-08'
    },
    {
        title: "Anna Karenina",
        price: 25,
        author: "Leo Tolstoy",
        date: '2022-08-08'
    },
    {
        title: "IT",
        price: 90,
        author: "Stephen King",
        date: '2022-02-02'
    },
    {
        title: "Madame Bovary",
        price: 50,
        author: "Gustave Flaubert",
        date: '2021-02-21'
    },
    {
        title: "Lord of the Flies ",
        price: 35,
        author: "William Golding",
        date: '2020-02-20'
    },
    {
        title: "Nostromo",
        price: 80,
        author: "Joseph Conrad",
        date: '2019-09-19'
    }
];

//variables declaration for the 4 inputs and their initialization

let titleInput = document.getElementById("title-input");
let authorInput = document.getElementById("author-input");
let priceInput = document.getElementById("price-input");
let dateInput = document.getElementById("date-input");

//variable declaration for button and initialize it

let createButton = document.getElementById("create-button");

// variable declaration for table body and initialize it

let tableBody = document.getElementById("table-body");

// variable declaration for total price for books purchase

let totalPrice = document.getElementById("total-price");

// function for creating new book

function create() {
    let newBook = {}; //new object created for adding new book to books array

    newBook.title = titleInput.value;
    newBook.author = authorInput.value;
    newBook.price = parseInt(priceInput.value);
    newBook.date = dateInput.value;

    books.push(newBook);

    insertBookInTable(newBook);
};

// function for inserting a new book in table

function insertBookInTable(book) {
    let newRow = document.createElement("tr");

    let newTitleCell = document.createElement("td");
    newTitleCell.innerHTML = book.title;
    newRow.appendChild(newTitleCell);

    let newAuthorCell = document.createElement("td");
    newAuthorCell.innerHTML = book.author;
    newRow.appendChild(newAuthorCell);

    let newPriceCell = document.createElement("td");
    newPriceCell.innerHTML = book.price;
    newRow.appendChild(newPriceCell);

    let newDateCell = document.createElement("td");
    newDateCell.innerHTML = book.date;
    newRow.appendChild(newDateCell);

    tableBody.appendChild(newRow);

    totalPrice.innerHTML = getTotalPrice();
};

function read() {
    for (let i = 0; i < books.length; i++) {
        insertBookInTable(books[i]);
    }
}

function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < books.length; i++) {
        sum = sum + books[i].price;
    }
    return sum;
}

read();

createButton.addEventListener("click", create);