/*let modalWindowOpen = document.querySelector('#modalWindowOpen')
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

let modalShowreelOpen = document.querySelector('#modalVideoOpen')
let modalVideo = document.querySelector('#modalVideo')
let modalVideoClose = document.querySelector('#modalVideoClose')

modalVideoOpen.onclick = () => {
    modalVideo.classList.toggle("open");
    document.body.classList.toggle("body-block")
};

modalVideoClose.onclick = () => {
    modalVideo.classList.remove("open");
    document.body.classList.remove("body-block")
};*/

function modalWindowOpen(id) {
    let modalWindow = document.getElementById(id);

    if (modalWindow.classList.contains('open')) {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")

    } else {
        modalWindow.classList.toggle("open");
        document.body.classList.toggle("body-block")
    }
}

function modalWindowClose(id) {
    let modalWindow = document.getElementById(id);
    let modalWindowClose = document.getElementById(id + '__close')

    modalWindowClose.onclick = () => {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")
    };
}
