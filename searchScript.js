var searchBar = document.getElementById("searchBar");
var search = document.getElementById("search");
var body = document.getElementById("mainBody");

var glass = document.getElementById("glass");
var cancel = document.getElementById("cancelSearch");

var searching = false;

function mySearch() {
    searchBar.style.overflow = "visible";
    cancel.style.display = "flex";
}

search.addEventListener("click", function() { //search pressed
    searching = true;
    mySearch();
});

glass.addEventListener("click", function() {
    searching = true;
    mySearch();
});

body.addEventListener("click", function() { //anywhere pressed
    if(searching == false) {
        searchBar.style.overflow = "hidden";
        cancel.style.display = "none";
    } else {
        searching = false;
    }
});

cancel.addEventListener("click", function() {
    searchBar.style.overflow = "hidden";
    cancel.style.display = "none";
});