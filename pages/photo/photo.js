addEventListener('click', (event) => {
    var elClassName = event.target.className;
    console.log(elClassName)
    if (elClassName === 'thumbnail') {
        var bgImage = "background-image: url('" + event.target.src.replace('thumb', 'img') + "');"
        var imageEl = document.getElementById("image");
        var imageContainerEl = document.getElementById("image-container");
        imageEl.setAttribute("style", bgImage)
        imageEl.setAttribute("data-value", event.target.dataset['value'])
        var captionEl = document.getElementById("caption");
        captionEl.innerHTML = event.target.alt;
        imageContainerEl.classList.remove("hide");
    } else if (elClassName.includes('arrowImg')) {
        navigateImages(elClassName.includes('left'));
    } else {
        hideThings();
    }
});

function hideThings() {
    var imageContainerEl = document.getElementById("image-container");
    imageContainerEl.classList.add("hide");
}

addEventListener('keydown', (event) => {
    console.log("on key down")
    console.log(event)
    console.log(event.code)
    switch (event.code) {
        case "ArrowLeft":
            navigateImages(true);
            break;
        case "ArrowRight":
            navigateImages(false);
            break;
        case "Escape":
            hideThings();
    }
});

function navigateImages(isLeft) {
    var images = document.getElementsByClassName('thumbnail');
    var imageEl = document.getElementById("image");
    var index = parseInt(document.getElementById('image').dataset['value'])
    if (isLeft) {
        index = (index - 1 < 1) ? images.length : index - 1;
    } else {
        index = (index + 1 > images.length) ? 1 : index + 1;
    }
    var bgImage = "background-image: url('" + images[index - 1].src.replace('thumb', 'img') + "');"
    imageEl.setAttribute("style", bgImage)
    var captionEl = document.getElementById("caption");
    captionEl.innerHTML = images[index - 1].alt;
    imageEl.setAttribute("data-value", index)
}
