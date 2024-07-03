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

const dialog = document.querySelector("#bookDialog");
const addBook = document.querySelector("#addBook");
const submit = document.querySelector("#submit");

addBook.addEventListener("click", () => {
    dialog.showModal(); 
});

submit.addEventListener("click", (event) => {
    let title = document.querySelector("#book_title").value;
    let author = document.querySelector("#book_author").value;
    let pages = document.querySelector("#book_pages").value;
    let read = document.querySelector("#read").value;
    addBookToLibrary(title, author, pages, read)
    event.preventDefault(); 
    dialog.close();
});




function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book (title, author, pages, read)
    myLibrary.push(newBook);
    renderLibrary(newBook);
    
}

function renderLibrary(newBook) { 
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.textContent = `Title: ${newBook.title}, Author:${newBook.author}, Pages: ${newBook.pages}, Read: ${newBook.read}`;
    container.appendChild(row);
}






