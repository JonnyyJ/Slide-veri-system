import distance from './eleDistanceToScreen';
import loading  from '../view/loading';
import verify   from '../request/verify';
import verified from '../view/verified';
import move     from '../view/elementMove';
import captcha  from '../view/rebuilt';
import move     from '../view/elementMove';



exports.startFingerMonitor = (smallPictureID, largePictureID) =>{
    /*
    * Method for finger touchpoint monitor
    * @param smallPictureID Small picture's element ID
    * @param largePictureID Large picture's element ID
    * 
    * */

    let smallPic = document.getElementById(smallPictureID);
    let largePic = document.getElementById(largePictureID);

    //when the user touch on small picture
    smallPic.ontouchstart = (ontouchdownEvent) =>{
        //when the finger is touching on the screen, preventDefault would disable scrolling.
        ontouchdownEvent.preventDefault();

        //Get the initial position of small picture
        window.veri.data.smPicIniPosX = smallPic.offsetLeft;
        window.veri.data.smPicIniPosY = smallPic.offsetaTop;

        //Get the position of finger inside the small picture
        let dstnXCenToSmPic = ontouchdownEvent.touches[0].clientX - smallPic.offsetLeft;
        let dstnYCenToSmPic = ontouchdownEvent.touches[0].clientY - smallPic.offsetTop;

        //When the user touch on the small picture and move the mouse
        document.ontouchmove = (ontouchmove) => {
            smallPic.style.top = (ontouchmove.touches[0].clientY - dstnXCenToSmPic) + 'px';
            smallPic.style.left = (ontouchmove.touches[0].clientX - dstnYCenToSmPic) + 'px';
        //when the user release the mouse.
        document.ontouchend = (onTouchEndEvent) => {
            // Stop moving
            document.ontouchmove = null;
            let lgPicDstnToScreen = distance(largePic)
            //Get coordinate of small picture inside of large picture
            let xCoordinate = Math.round(((smallPic.offsetLeft - largePic.offsetLeft) * 300) / largePic.offsetWidth);
            let yCoordinate = Math.round(((smallPic.offsetLeft - largePic.offsetTop) * 200) / largePic.offsetHeight);

            if (onTouchEndEvent.changedTouches[0].clientY >  lgPicDstnToScreen.top&& onTouchEndEvent.changedTouches[0].clientY < lgPicDstnToScreen.bottom && onTouchEndEvent.changedTouches[0].clientX > lgPicDstnToScreen.left && onTouchEndEvent.changedTouches[0].clientX < lgPicDstnToScreen.right) {
                loading.start();
                smallPic.ontouchstart = null;
                verify(window.zcapt.data.verify,window.zcapt.data.authID,xCoordinate,yCoordinate, (verifyResult) => {
                    if (verifyResult) {
                        window.zcapt.data.result = 1;
                        verified();
                    }else {
                        move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
                        captcha();
                    }
                })
            }else {
                move(smallPic,window.zcapt.data.smallPictureInitialPositionX,window.zcapt.data.smallPictureInitialPositionY);
            }
        }
    }
}
}
