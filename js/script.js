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

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('transform-show');
        }
    });
}
let options = { threshold: [0.001] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.transform-anim');
for (let elm of elements) {
    observer.observe(elm);
}

