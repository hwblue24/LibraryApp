const myLibrary = []; 

function Book(title, author, pages, read){ 
    this.title = title; 
    this.author=author; 
    this.pages= pages; 
    this.read = read;
}

//prototype defined on prototype for efficiency 
Book.prototype.info = function () { 
    return (`Title: ${this.title} Author: ${this.author} Pages: ${this.pages} Read: ${this.read}`)
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
    let libDataContainer = document.querySelector(".libDataContainer");
    let rowData = document.createElement("div");
    rowData.classList.add("rowData");
    rowData.textContent = newBook.info(); 
    libDataContainer.appendChild(rowData);

    let readBtn = document.createElement("button")
    readBtn.classList.add('readBtn');
    readBtn.textContent = 'Read'; 
    rowData.appendChild(readBtn);

    let rmvBtn = document.createElement("button")
    rmvBtn.classList.add('rmvBtn');
    rmvBtn.textContent = 'Remove'; 
    rowData.appendChild(rmvBtn);


}

const libDataContainer = document.querySelector(".libDataContainer");

libDataContainer.addEventListener ("click", (e) => {
        if(e.target.className === 'rmvBtn') {
            const libDataContainer = document.querySelector(".libDataContainer");
            let rowData = document.querySelector(".rowData");
            libDataContainer.removeChild(rowData);
        }

})

libDataContainer.addEventListener ("click", (e) => {
    if(e.target.textContent === 'Read') {
        e.target.textContent = 'Not Read'
    } else if (e.target.textContent === 'Not Read') {
        e.target.textContent = 'Read'
    };

})

//Book.prototype.read = function () {
    //if ()
    //return (`Title: ${this.title} Author: ${this.author} Pages: ${this.pages} Read: ${this.read}`)
//};