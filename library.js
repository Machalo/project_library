let myLibrary = [];

/* Book template */

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let reed = this.read;
        let word = "";
        let word2 = "";
        if (reed == true) {
            word = " already";
            word2 = ".";
        }
        else {
            word = " not";
            word2 = " yet.";
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages," + word + " read" + word2;
    }
}

/* Add book */

idCount=0;
function addBookToLibrary(id, title, author, pages, read) {
    id = idCount+1;
    const newBook = new Book (id, title, author, pages, read);
    myLibrary.push(newBook);
    idCount ++;
}

/* Add card */

const container = document.querySelector(".cards");

function addCardToDom() {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("id", "card" + idCount);
    
    const newText = document.createElement("div");
    newText.classList.add("text");
    newText.setAttribute('style', 'white-space: pre;');
    let readBook = "";
    if (myLibrary[myLibrary.length -1].read === true) {
        readBook = "Yes";
    }
    else{
        readBook = "No";
    }
    newText.textContent =  
    `Name : ${myLibrary[myLibrary.length -1].title} 
    \r\nAuthor : ${myLibrary[myLibrary.length -1].author} 
    \r\nPages : ${myLibrary[myLibrary.length -1].pages}
    \r\nRead it ? : ${readBook}`;
    
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class" , "deleteButton");
    deleteButton.setAttribute("id", idCount);
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", "deleteCard(this.id)");
    
    const readButton = document.createElement("button");
    readButton.setAttribute("class" , "readButton");
    readButton.setAttribute("id", idCount);
    readButton.textContent = "Read ?";
    readButton.setAttribute("onclick", "changeReadStatus(this.id)");

    newCard.appendChild(newText);
    newCard.appendChild(deleteButton);
    newCard.appendChild(readButton);
    container.appendChild(newCard);

}

/* Delete card */ 

function deleteCard(id) {
    const idToBeDeleted = "#card" + id;
    const toBeDeleted = document.querySelector(idToBeDeleted);
    const deleteFromLibrary = myLibrary.find(x => x.id === parseInt(id));
    myLibrary.splice(myLibrary.indexOf(deleteFromLibrary), 1);
    container.removeChild(toBeDeleted);
}

/* Change read status */

function changeReadStatus(id) {
    const idToBeChanged = "#card" + id + " .text";
    const toBeChanged = document.querySelector(idToBeChanged);
    const changeInLibrary = myLibrary.find(x => x.id === parseInt(id));
    let changeReadCard = "";

    if (changeInLibrary.read === true) {
        changeInLibrary.read = false;
        changeReadCard = "No";
    }
    else if (changeInLibrary.read === false) {
        changeInLibrary.read = true;
        changeReadCard = "Yes";
    }

    toBeChanged.textContent = 
    `Name : ${changeInLibrary.title} 
    \r\nAuthor : ${changeInLibrary.author} 
    \r\nPages : ${changeInLibrary.pages}
    \r\nRead it ? : ${changeReadCard}`;
}

/* Form */

const showButton = document.getElementById("showForm");
const formNewBook = document.getElementById("formNewBook");

showButton.addEventListener("click", () => {
    formNewBook.showModal();
})

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let titleForm = document.getElementById("title").value;
    let authorForm = document.getElementById("author").value;
    let pagesForm = document.getElementById("pages").value;
    let readForm = document.getElementsByName("read");
    let readIt = "";
    for(i=0; i<2 ; i++) {
        if (readForm[i].checked) {
            readIt = readForm[i].value;
        }
    }
    if (readIt === "yes") {
        readIt = true;
    }
    else {
        readIt = false;
    }

    addBookToLibrary(0, titleForm, authorForm, pagesForm, readIt);
    addCardToDom();

    formNewBook.close();
    form.reset();
})


