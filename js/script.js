let headerMenuClose = document.querySelector('#headerMenuClose');
let headerMenuOpen = document.querySelector('#headerMenuOpen');
let headerMenu = document.querySelector('#headerMenu');

headerMenuOpen.onclick = () => {
    headerMenu.classList.toggle("menu-open");
    document.body.classList.toggle("body-block")
};

headerMenuClose.onclick = () => {
    headerMenu.classList.remove("menu-open");
    document.body.classList.remove("body-block")
};

