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

function onEntryTransform(entryTransform) {
    entryTransform.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('transform-show');
        }
    });
}
let transformOptions = { threshold: [0.001] };
let transformObserver = new IntersectionObserver(onEntryTransform, transformOptions);
let transformElements = document.querySelectorAll('.transform-anim');
for (let elm of transformElements) {
    transformObserver.observe(elm);
}

function onEntryOpacity(entryOpacity) {
    entryOpacity.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('opacity-show');
        }
    });
}
let opacityOptions = { threshold: [0.1] };
let opacityObserver = new IntersectionObserver(onEntryOpacity, opacityOptions);
let opacityElements = document.querySelectorAll('.opacity-anim');
for (let elm of opacityElements) {
    opacityObserver.observe(elm);
}



