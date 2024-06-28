const myLibrary = []; 

function Book(title, author, pages, read){ 
    this.title = title; 
    this.author=author; 
    this.pages= pages; 
    this.read = read; 
    this.info = function () { 
        return (`${this.title}, written by ${this.author}, has ${this.pages}, and you have ${this.read} it`)
    }
}



function addBookToLibrary (title, author, pages, read) {
    title = prompt('Provide title of book');
    author = prompt('Provide author\'s name');
    pages = prompt('Provide length of book in pages'); 
    read = prompt(`Have you read the book? Input "read" or "not read" `);
    title = new Book (title,author,pages,read); 
    myLibrary.push(title);

}

addBookToLibrary();
console.log(myLibrary);





/*const theLordOfTheRings = new Book ('The Lord of The Rings', 'JK Row', 130, 'read');

console.log(theLordOfTheRings)

console.log(theLordOfTheRings.info());*/

