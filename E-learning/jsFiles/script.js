//get elements
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let sub = document.getElementById("sub");
function toggleMenu() {
    var menu = document.getElementById("menu"); // Assuming you have an element with the ID "menu"

    if (menu.style.display === "block") {
        logo.style.display = "block";
        menu.style.display = "none"; // If menu is currently visible, hide it
        sub.style.display = "block";
    } else {
        logo.style.display = "none";
        menu.style.display = "block"; // If menu is currently hidden, show it
        sub.style.display = "none";
    }
}

