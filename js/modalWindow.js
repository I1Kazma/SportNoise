/*function modalWindowForm(id) {
    let modalWindow = document.getElementById(id);
    let modalWindowClose = document.getElementById(id + '__close')
    let modalWindowVideo = document.getElementById(id + '__video')

    if (modalWindow.classList.contains('open')) {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")

    } else {
        modalWindow.classList.toggle("open");
        document.body.classList.toggle("body-block")

    }

    modalWindowClose.onclick = () => {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")

    };
}

function modalWindowVideo(id) {
    let modalWindow = document.getElementById(id);
    let modalWindowClose = document.getElementById(id + '__close')
    let modalWindowVideo = document.getElementById(id + '__video')

    if (modalWindow.classList.contains('open')) {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")
        modalWindowVideo.pause();
        modalWindowVideo.currentTime = 0;

    } else {
        modalWindow.classList.toggle("open");
        document.body.classList.toggle("body-block")
        modalWindowVideo.play()
    }

    modalWindowClose.onclick = () => {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block")
        modalWindowVideo.pause();
        modalWindowVideo.currentTime = 0;
    };
}*/

function toggleModal(id, manageVideo = false) {
    let modalWindow = document.getElementById(id);
    let modalWindowClose = document.getElementById(id + '__close');
    let modalWindowVideo = document.getElementById(id + '__video');

    if (modalWindow.classList.contains('open')) {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block");
        if (manageVideo) {
            modalWindowVideo.pause();
            modalWindowVideo.currentTime = 0;
        }
    } else {
        modalWindow.classList.add("open");
        document.body.classList.add("body-block");
        if (manageVideo) {
            modalWindowVideo.play();
        }
    }

    modalWindowClose.onclick = () => {
        modalWindow.classList.remove("open");
        document.body.classList.remove("body-block");
        if (manageVideo) {
            modalWindowVideo.pause();
            modalWindowVideo.currentTime = 0;
        }
    };
}