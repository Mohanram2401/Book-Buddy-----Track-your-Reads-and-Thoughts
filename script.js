var book = document.getElementById("booktitle");
var author = document.getElementById("bookauthor");
var description = document.getElementById("description");
var popdiv = document.querySelector(".popup");
var lay = document.querySelector(".overlay");

// Function to add a new book entry
function AddBook() {
    var b = book.value.trim();
    var a = author.value.trim();
    var desc = description.value.trim();
    
    // Ensure that all fields are filled
    if (!b || !a || !desc) {
        alert("Please fill in all fields.");
        return;
    }

    popdiv.style.display = "none";
    lay.style.display = "none";

    // Create new book section
    var bs = document.createElement("div");
    bs.setAttribute("class", "booksection");

    var d = document.createElement("div");
    d.setAttribute("class", "books");
    d.innerHTML = "<h2>" + b + "</h2>" + "<h5>" + a + "</h5>" + "<p>" + desc + "</p>" + 
                  "<button class='del' onclick='DeleteBook(event)'>Delete</button>";

    bs.append(d);
    document.querySelector(".bcon").appendChild(bs); // Add new book section to the content area

    // Clear the input fields
    book.value = "";
    author.value = "";
    description.value = "";
}

// Function to cancel adding a book
function CancelBook() {
    popdiv.style.display = "none";
    lay.style.display = "none";
}

// Function to open the popup for adding a new book
function ABook() {
    lay.style.display = "block";
    popdiv.style.display = "block";
}

// Function to delete a book entry
function DeleteBook(event) {
    event.target.closest(".booksection").remove(); // Removes the entire book section
}

// Optional: Uncomment if you plan to use these functions later
// var Title = document.getElementById("bt");
// function show() {
//     ebook.style.display = "block";
//     bookcon.style.display = "block";
// }
