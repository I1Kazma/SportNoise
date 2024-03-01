let modalWindowOpen = document.querySelector('#modalWindowOpen')
let modalWindow = document.querySelector('#modalWindow')
let modalWindowClose = document.querySelector('#modalWindowClose')

modalWindowOpen.onclick = () => {
    modalWindow.classList.toggle("open");
    document.body.classList.toggle("body-block")
};

modalWindowClose.onclick = () => {
    modalWindow.classList.remove("open");
    document.body.classList.remove("body-block")
};