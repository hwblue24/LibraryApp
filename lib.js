const myLibrary = []; 

function Book(title, author, pages, read){ 
    this.title = title; 
    this.author=author; 
    this.pages= pages; 
    this.read = read;
}

//prototype defined on prototype for efficiency 
Book.prototype.info = function () { 
    return (`${this.title}, written by ${this.author}, has ${this.pages}, and you have ${this.read} it`)
};


function addBookToLibrary () {
    title = prompt('Provide title of book');
    author = prompt('Provide author\'s name');
    pages = prompt('Provide length of book in pages'); 
    read = prompt(`Have you read the book?" `);
    newBook = new Book (title,author,pages,read); 
    myLibrary.push(newBook);
    return myLibrary

}

function bookTables(myLibrary) { 
    for (let books of myLibrary) {
        let container = document.querySelector(".container");
        content = document.createElement("div");
        content.textContent = `Title: ${books.title}, Author:${books.author}, Pages: ${books.pages}, Read: ${books.read}`;
        container.appendChild(content);

    }
}

