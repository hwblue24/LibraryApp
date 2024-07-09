const myLibrary = []; 

function Book(title, author, pages, read){ 
    this.title = title; 
    this.author=author; 
    this.pages= pages; 
    this.read = read;
}

//prototype defined on prototype for efficiency 
Book.prototype.info = function () { 
    return (`Title: ${this.title} Author: ${this.author} Pages: ${this.pages} Read:`)
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

    let rowStatus = document.createElement("div");
    rowStatus.classList.add("rowStatus"); 
    rowStatus.textContent = newBook.read;
    rowData.appendChild(rowStatus);


    let readBtn = document.createElement("button")
    readBtn.classList.add('readBtn');
    if (rowStatus.textContent === 'no') {
        readBtn.textContent = 'Read'; 
        rowData.appendChild(readBtn);
    } else { 
        readBtn.textContent = 'Not Read'; 
        rowData.appendChild(readBtn);
    }
    

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

// Toggle read status button click event listener
libDataContainer.addEventListener ("click", (e) => {
    if(e.target.textContent === 'Read') {
        e.target.textContent = 'Not Read';
        const rowData = e.target.closest('.rowData');
        const rowStatus = rowData.querySelector('.rowStatus');
        rowStatus.textContent = 'yes';
    } else if (e.target.textContent === 'Not Read') {
        e.target.textContent = 'Read';
        const rowData = e.target.closest('.rowData');
        const rowStatus = rowData.querySelector('.rowStatus');
        rowStatus.textContent = 'no'
    };
})


