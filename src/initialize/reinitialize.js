exports.renewCaptcha = () => {
    // Requesting to server to get a new authID
    require('../request/initialize').init(window.veri.data.initialize,(authID) => {
        if (authID === null) {
            console.log("Error when requesting to server");
            return null;
        } else {
            window.veri.data.authID = authID;

            // Start to building the captcha
            require('./buildCaptchaInPage').building(true);
        }
    });
};