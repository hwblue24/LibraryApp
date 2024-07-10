const myLibrary = []; 

function Book(title, author, pages, read){ 
    this.title = title; 
    this.author=author; 
    this.pages= pages; 
    this.read = read;
}

//prototype defined on prototype for efficiency 
Book.prototype.info = function () { 
    return (`${this.title} by ${this.author} Pages: ${this.pages}`)
    
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
    //function to handle the number of books added to library  
    if (myLibrary.length < 9 ) {
        renderLibrary(newBook);
        
        

    }else {
        const dialog = document.querySelector(".libraryFull");
        dialog.showModal();
        myLibrary.pop();
    }
    
}

function renderLibrary(newBook) { 
    let libDataContainer = document.querySelector(".libDataContainer");
    let rowData = document.createElement("div");
    rowData.classList.add("rowData");
    rowData.textContent = newBook.info(); 
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

//handles removing libdata 
const libDataContainer = document.querySelector(".libDataContainer");

libDataContainer.addEventListener ("click", (e) => {
    if(e.target.className === 'rmvBtn') {
        myLibrary.pop();
        console.log(myLibrary.length);
        const libDataContainer = document.querySelector(".libDataContainer");
        let rowData = e.target.closest('.rowData');
        libDataContainer.removeChild(rowData);
        
    }

})

// Toggle read status button click event listener
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


const dialoglibraryFull = document.querySelector(".libraryFull");
const removeLibFull = document.querySelector(".libraryFull button")

removeLibFull.addEventListener("click", () => { 
    dialoglibraryFull.close();
});