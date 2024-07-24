const myLibrary = [];

function Book(title, author, pages, read) {
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

const test1 = new Book ("LOTR", "JRR Tolkien", 350, true);
const test2 = new Book ("dfds", "machin B", 500, false);

myLibrary.push(test1, test2);


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("blabla", "moi", 15, true);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info())

    const container = document.querySelector(".cards");
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const newText = document.createElement("div");
    newText.classList.add("text");
    newText.setAttribute('style', 'white-space: pre;');
    newText.textContent = `Name : ${myLibrary[i].title} \r\nAuthor : ${myLibrary[i].author} \r\nPages : ${myLibrary[i].pages}`;

    newCard.appendChild(newText);
    container.appendChild(newCard);
}




const showButton = document.getElementById("showForm");
const formNewBook = document.getElementById("formNewBook");

showButton.addEventListener("click", () => {
    formNewBook.showModal();
  });


const form = document.querySelector("form");

form.addEventListener("submit", (envent) => {
    const titleForm = document.getElementById("title");
    console.log(titleForm);

})
