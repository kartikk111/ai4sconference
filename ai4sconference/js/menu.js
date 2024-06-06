let sideMenuOpen = true;
let sideMenu = document.querySelector(".side-menu");
let windowWidth = document.windowWidth;

let toggleMenu = function() {
    if(sideMenuOpen) {
        sideMenuClose();
    }
    else {
        sideMenu.style.left = "0";
        sideMenuOpen = true;      
    }   
}

let sideMenuClose = function() {
    sideMenu.style.left = "-40vw";
    sideMenuOpen = false;
}

// <!-- JavaScript -->
// <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     if (dropdownContent.style.display === "none") {
//         dropdownContent.style.display = "block";
//     } else {
//         dropdownContent.style.display = "none";
//     }
// }
