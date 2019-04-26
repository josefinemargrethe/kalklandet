function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("mobile_nav").classList.add("hide");

    document.querySelector('body').style.overflow = 'hidden'




}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("mobile_nav").classList.remove("hide");

    document.querySelector('body').style.overflow = 'scroll'

}
