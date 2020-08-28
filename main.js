var shareOptions = document.getElementById('share-options')
var shareDesktopOptions = document.getElementById('share-desktop')
var userInfo = document.getElementById('user-info')
var shareButton = document.getElementById('share-button')

var desktop = window.matchMedia('screen and (min-width: 768px)')
console.log(desktop);

var isActive = false
if (desktop.matches) {
    shareButton.addEventListener('click',showHideShareDesktopOptions )
} else {
    shareButton.addEventListener('click', showShareOptions )
}

desktop.addListener(validacion)

function validacion(event) {
    if (event.matches) {
    console.log(shareDesktopOptions);
        shareButton.addEventListener('click', showShareDesktopOptions)
    } else {
        shareButton.addEventListener('click', showShareOptions )
    }
}

function showShareOptions() {
    shareOptions.classList.add('show')
}

function hideShareOptions() {
    shareOptions.classList.remove('show')
}

function showHideShareDesktopOptions() {
    if (!isActive) {
        shareDesktopOptions.classList.add('show')
        shareButton.classList.add('active')
        isActive = true
    } else {
        shareDesktopOptions.classList.remove('show')
        shareButton.classList.remove('active')
        isActive = false
    }
}




console.log(shareOptions)
console.log(userInfo);