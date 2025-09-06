class Library {
    constructor() {
        this.bookList = []
    }
    addBook (bookObj) {
        return this.bookList.push(bookObj); 
    }
    removeBook(bookObj) {
        return this.bookList = this.bookList.filter(bookinstance => bookinstance !== bookObj); 
    }
    displayBooks () {
        return this.bookList 
    }
    

} 

class Book {
    constructor( title, author, pages, read) {
        this.title = title; 
        this.author = author; 
        this.pages = pages; 
        this.read = read;
    }
} 


const myLibrary = new Library();


// selects this items from DOM 
const dialog = document.querySelector("#bookDialog");
const addBook = document.querySelector("#addBook");
const form = document.getElementById("bookForm");

//selects start and shows dialog box 
addBook.addEventListener("click", () => {
    dialog.showModal(); 
});




const dialoglibraryFull = document.querySelector(".libraryFull");
const removeLibFull = document.querySelector(".libraryFull button")
removeLibFull.addEventListener("click", () => { 
    dialoglibraryFull.close();
});

//Create book Object instances 
function createBookInstance () {
    let title = document.querySelector("#book_title").value;
    let author = document.querySelector("#book_author").value;
    let pages = document.querySelector("#book_pages").value;
    let read = document.querySelector("#read").value;
    const newBook = new Book ( title, author, pages, read); 
    myLibrary.addBook(newBook);
    libraryFullCheck(newBook)
}

function libraryFullCheck (newBook) {
    if (myLibrary.bookList.length < 9 ) {
        renderLibrary(newBook);
    }else {
        const dialog = document.querySelector(".libraryFull");
        dialog.showModal();
        myLibrary.bookList.pop();
    }

}



function renderLibrary(newBook) { 
    let libDataContainer = document.querySelector(".libDataContainer");
    let rowData = document.createElement("div");
    rowData.classList.add("rowData");
    
    rowData.setAttribute("data-title", newBook.title);


    rowData.textContent = (`${newBook.title} by ${newBook.author} Pages: ${newBook.pages}`); 
    libDataContainer.appendChild(rowData);

    let rowStatus = document.createElement("div");
    rowStatus.classList.add("rowStatus"); 
    rowStatus.textContent = `Read: ${newBook.read}`;
    rowData.appendChild(rowStatus);


    let readBtn = document.createElement("button")
    readBtn.classList.add('readBtn');
    if (rowStatus.textContent === 'Read: no') {
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


//dialogue box for insertion book information 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    createBookInstance ();
    dialog.close();
    
});




//handles removing libdata 
const libDataContainer = document.querySelector(".libDataContainer");

libDataContainer.addEventListener ("click", (e) => {
    if(e.target.className === 'rmvBtn') {
        myLibrary.bookList.pop();
        const libDataContainer = document.querySelector(".libDataContainer");
        let rowData = e.target.closest('.rowData');
        libDataContainer.removeChild(rowData);
        
    }

})

//Toggle read status button click event listener
libDataContainer.addEventListener ("click", (e) => {
    if(e.target.textContent === 'Read') {
        e.target.textContent = 'Not Read';
        const rowData = e.target.closest('.rowData');
        const rowStatus = rowData.querySelector('.rowStatus');
        rowStatus.textContent = 'Read: yes';
    } else if (e.target.textContent === 'Not Read') {
        e.target.textContent = 'Read';
        const rowData = e.target.closest('.rowData');
        const rowStatus = rowData.querySelector('.rowStatus');
        rowStatus.textContent = 'Read: no'
    };
})

