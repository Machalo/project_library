let myLibrary = [];

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

i=0;
function addBookToLibrary(id, title, author, pages, read) {
    id = i;
    const newBook = new Book (id, title, author, pages, read);
    myLibrary.push(newBook);
    i ++;
    console.log(myLibrary);
}

/*
const test1 = new Book ("LOTR", "JRR Tolkien", 350, true);
const test2 = new Book ("dfds", "machin B", 500, false);
myLibrary.push(test1, test2);
addBookToLibrary("blabla", "moi", 15, true);


for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector(".cards");
    const newCard = document.createElement("div");
    newCard.classList.add("card" + i);
    const newText = document.createElement("div");
    newText.classList.add("text");
    newText.setAttribute('style', 'white-space: pre;');
    newText.textContent = `Name : ${myLibrary[i].title} \r\nAuthor : ${myLibrary[i].author} \r\nPages : ${myLibrary[i].pages}`;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class" , "deleteButton");
    deleteButton.setAttribute("id", i);
    deleteButton.textContent = "Delete";


    newCard.appendChild(newText);
    container.appendChild(newCard);
    newCard.appendChild(deleteButton);
}

*/


const container = document.querySelector(".cards");

function addCardToDom() {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("id", "card" + `${myLibrary.length-1}`);
    
    const newText = document.createElement("div");
    newText.classList.add("text");
    newText.setAttribute('style', 'white-space: pre;');
    newText.textContent = `Name : ${myLibrary[myLibrary.length -1].title} \r\nAuthor : ${myLibrary[myLibrary.length -1].author} \r\nPages : ${myLibrary[myLibrary.length -1].pages}`;
    
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class" , "deleteButton");
    deleteButton.setAttribute("id", `${myLibrary.length-1}`);
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", "deleteCard(this.id)");
    
    const readButton = document.createElement("button");
    readButton.setAttribute("class" , "readButton");
    readButton.setAttribute("id", `${myLibrary.length-1}`);
    readButton.textContent = "Read ?";
    readButton.setAttribute("onclick", "changeReadStatus(this.id)");

    newCard.appendChild(newText);
    newCard.appendChild(deleteButton);
    container.appendChild(newCard);

}

function deleteCard(id) {
    const idToBeDeleted = "#card" + id;
    const toBeDeleted = document.querySelector(idToBeDeleted);
    const deleteFromLibrary = myLibrary.find(x => x.id === parseInt(id));
    console.log(test);
    container.removeChild(toBeDeleted);
}

/* TO DO : accéder à myLibrary et delete le bouquin en même temps. Puis faire la fonction "changer lu/paslu" */





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
    let readForm = document.getElementsByName("read").value;
    if (readForm === "yes") {
        readForm = true;
    }
    else {
        readForm = false;
    }

    addBookToLibrary(0, titleForm, authorForm, pagesForm, readForm);
    addCardToDom();

    formNewBook.close();
    form.reset();
})


