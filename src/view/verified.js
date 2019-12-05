import loading from './loading'
import appear from './appearAndDisappear'

exports.verified = () => {
    /**
     * For changing the view while captcha is verified.
     * @type {HTMLElement}
     */

    let frame = document.getElementById("veri-frame");
    let verifiedLayer = document.createElement("div");
    verifiedLayer.id = "veri-verified";
    verifiedLayer.classList.add("veri-verified");

    // Creating SVG icon.
    // Tick icon
    let verifiedIcon = document.createElementNS("http://www.w3.org/2000/svg","svg");
    verifiedIcon.innerHTML = "<polygon class=\"veri-verified-fill\" points=\"385.621,62.507 146.225,301.901 21.213,176.891 0,198.104 146.225,344.327 406.834,83.72 \"/>";
    verifiedIcon.setAttribute("viewBox","0 0 406.834 406.834");
    verifiedIcon.id = "veri-verified-icon";
    appear(verifiedLayer, () => {
        window.veri.onverified();
    });
    verifiedLayer.appendChild(verifiedIcon);
    frame.appendChild(verifiedLayer);
    loading.end();
};