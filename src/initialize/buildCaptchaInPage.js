import rebuild from '../view/renewImage'
import startMouseMonitor from '../movement_tracing/mouseTracing'
import buildCaptcha from '../view/initialize'



exports.building = (rebuild = false)=>{
    /*
    * Method for building the captcha in DOM
    * */
    let smallPictureLink = window.veri.data.smallPicture + "?authID=" +  window.veri.data.authID;
    let largePictureLink = window.veri.data.largePicture + "?authID=" +  window.veri.data.authID;

    if (rebuild) {
        rebuild(smallPictureLink,largePictureLink,() => {
            // Start mouse tracking
            startMouseMonitor("veri-smallPic","veri-largePic");
        });
    }else {
        // Add elements to DOM
       buildCaptcha(smallPictureLink,largePictureLink,() => {
            // Start mouse tracking
       startMouseMonitor("veri-smallPic","veri-largePic");
        });
    }
};