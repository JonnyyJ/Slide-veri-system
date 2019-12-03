import init from '../initialize/initialize'
import renewCaptcha from '../initialize/initialize'
import disappear from './appearAndDisappear'


exports.everything = ()=> {
    /**
     * Function for remove everythings about veri, and recreate it.
     */
    disappear(document.getElementById("veri-frame"),() => {
        init(window.veri.data.id,window.veri.data.conn,window.veri.data.size);
    });
};
exports.captcha = () => {
    /**
     * Function for create a new captcha, and put new picture on the clients side.
     */
    renewCaptcha()
};