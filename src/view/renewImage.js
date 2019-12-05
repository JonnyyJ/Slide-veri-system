import loading from './loading'

exports.rebuild = (smallPictureLink,largePictureLink,callback = () => {}) => {
    /**
     * Rebuilt picture in view. Replace the old pictures by new one.
     */

    let numberOfLoaded = 0;

    // Create small picture
    let smallPicture = new Image();
    smallPicture.classList.add('veri-smallPic');
    smallPicture.id = "veri-smallPic";
    smallPicture.draggable = false;
    smallPicture.src = smallPictureLink;
    smallPicture.setAttribute("unselectable", "on");
    smallPicture.onload = loadedCheck;

    // Large PIcture
    let largePicture = new Image();
    largePicture.classList.add('veri-largePic');
    largePicture.draggable = false;
    largePicture.id = "veri-largePic";
    largePicture.setAttribute("unselectable", "on");
    largePicture.src = largePictureLink;
    largePicture.onload = loadedCheck;

    let fragment = document.createDocumentFragment();
    fragment.appendChild(smallPicture);
    fragment.appendChild(largePicture);

    // Function for loading check.
    function loadedCheck() {
        if (numberOfLoaded === 0) { // If non of the picture has already loaded.
            numberOfLoaded ++;
        } else {
            // If one of the picture has already loaded,
            // render them
            let frame = document.getElementById("veri-frame");
            frame.removeChild(document.getElementById("veri-largePic"));
            frame.removeChild(document.getElementById("veri-smallPic"));
            frame.appendChild(fragment);
            loading.end(() => {
                callback(null);
            });
        }
    }
};