import Base64 from 'js-base64'
import buildFrame from '../view/initialize'

exports.init = (id,conn) => {
    /**
     * Method for initialize the captcha
     * @para id element's id where the captcha would be made.
     * @para conn connection code from server side.
     * @para size the width of the captcha that would be created.
     * no callback function
     */
    buildFrame(id);  // Start Loading
    // Parse the links
    try {
        let links = JSON.parse(Base64.decode(conn));
        // Assign all the links to model data
        window.veri.data.conn = conn;
        window.veri.data.initialize = links.init;
        window.veri.data.largePicture = links.large;
        window.veri.data.smallPicture = links.small;
        window.veri.data.verify = links.veri;
        window.veri.data.id = id;
        window.veri.data.result = 0;
    }catch (e) {
        // If error in "conn" parameter
        console.log("Conn is incorrect");
        return null;
    }
    // Requesting to server to get authID
    require('../request/initialize').init(window.veri.data.initialize,(authID) => {
        if (authID === null) {
            console.log("Error when requesting to server");
            return null;
        } else {
            window.veri.data.authID = authID;

            // Start to building the captcha
            require('./buildCaptchaInPage').building();
        }
    });
};