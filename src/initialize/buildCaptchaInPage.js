exports.building = (rebuild = false)=>{
    /*
    * Method for building the captcha in DOM
    * */
    let smallPictureLink = window.veri.data.smallPicture + "?authID=" +  window.veri.data.authID;
    let largePictureLink = window.veri.data.largePicture + "?authID=" +  window.veri.data.authID;

    if (rebuild) {
        require('../view/renewImage').rebuild(smallPictureLink,largePictureLink,() => {
            // Start mouse tracking
            require('../movement_tracing/mouseTracing').startMouseMonitor("veri-smallPic","veri-largePic");
        });
    }else {
        // Add elements to DOM
        require('../view/initialize').buildCaptcha(smallPictureLink,largePictureLink,() => {
            // Start mouse tracking
            require('../movement_tracing/mouseTracing').startMouseMonitor("veri-smallPic","veri-largePic");
        });
    }
};