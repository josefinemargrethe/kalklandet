window.addEventListener("DOMContentLoaded", scrollLoop, false);


var image1 = document.querySelector("#section2d_img");
var image2 = document.querySelector("#section3d_img");
var mobiletext1 = document.querySelector("#section2m_textbox");
var mobiletext2 = document.querySelector("#section3m_textbox");

var xScrollPosition;
var yScrollPosition;

function scrollLoop(e) {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.1, image1);
    setTranslate(0, yScrollPosition * -0.1, image2);
    setTranslate(0, yScrollPosition * -0.1, mobiletext1);
    setTranslate(0, yScrollPosition * -0.1, mobiletext2);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {


    el.style.transform = "translate3d(" + xPos + "," + yPos + "px, 0";

}
