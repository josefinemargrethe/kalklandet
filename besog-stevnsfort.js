let info;
let acc = document.getElementsByClassName("accordion");
let i;

document.addEventListener("DOMContentLoaded", hentJson);
document.addEventListener("DOMContentLoaded", hentJson2);

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


async function hentJson() {
    const url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/234";

    //ID 210 er museumsinformation for geomuseum faxe
    //ID 234 Stevnsfort
    //ID 237 Stevns Klint
    //wordpress har standard visning på 10 posts per side, det kan du ændre her foroven.

    const myJson = await fetch(url);

    info = await myJson.json();


    visInfo();
    showFooter();

}

async function hentJson2() {

    let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/guidet_tur_stevnsfor";
    let jsonData = await fetch(url);
    ture = await jsonData.json();

    visTure();

    console.log("getjson2");

}

function visTure() {


    let kolGuide1 = ture.find(kolGuide1 => kolGuide1.id == 266);
    let kolGuide2 = ture.find(kolGuide2 => kolGuide2.id == 265);
    let kolGuide3 = ture.find(kolGuide3 => kolGuide3.id == 264);
    let kolGuide4 = ture.find(kolGuide4 => kolGuide4.id == 263);


    console.log("visTure");
    //            Guidet ture her:
    document.querySelector(".under").innerHTML = kolGuide1.content.rendered;
    document.querySelector(".fac").innerHTML = kolGuide2.content.rendered;
    document.querySelector(".andre").innerHTML = kolGuide3.content.rendered;
    document.querySelector(".rund").innerHTML = kolGuide4.content.rendered;


    //         DESKTOP   Guidet ture her:
    document.querySelector(".deskunder").innerHTML = kolGuide1.content.rendered;
    document.querySelector(".deskfac").innerHTML = kolGuide2.content.rendered;
    document.querySelector(".deskandre").innerHTML = kolGuide3.content.rendered;
    document.querySelector(".deskrund").innerHTML = kolGuide4.content.rendered;

}




for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "arotate" class
        to arrows */

        //                this.lastElementChild.classList.toggle("rotate");


        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

    console.log("readaccordion");


}






function visInfo() {

    //            adresse her:
    document.querySelector("#adrdiv").innerHTML = info.adresse;



    //            åbningstider her:

    document.querySelector(".forar").innerHTML = `${info.forrssson_bningstid} - ${info.forrssson_lukketid}`;
    document.querySelector(".sommer").innerHTML = `${info.sommersson_bningstid} - ${info.sommersson_lukketid}`;
    document.querySelector(".efterar").innerHTML = `${info.efterrssson_bningstid} - ${info.efterrssson_lukketid}`;
    document.querySelector(".saerlige").innerHTML = ` <b>Efterårsferie:</b> ${info.efteraarsferie_bningstid} - ${info.efteraarsferie_lukketid}`;


    //          transport her:
    document.querySelector(".cykel").innerHTML = info.cykel;
    document.querySelector(".bil").innerHTML = info.bil;
    document.querySelector(".dot").innerHTML = info.dot;


    // priser
    document.querySelector(".voksen").innerHTML = `${info.voksen} kr`;
    document.querySelector(".studpen").innerHTML = `<b>Studerende:</b> ${info.students} kr <br> <b>Pensionister:</b> ${info.retired} kr`;
    document.querySelector(".born").innerHTML = `${info.big_children} kr`;

    document.querySelector(".aarskort").innerHTML = `${info.small_children}`;



    //        DESKTOP  transport her:
    document.querySelector(".deskcykel").innerHTML = info.cykel;
    document.querySelector(".deskbil").innerHTML = info.bil;
    document.querySelector(".deskdot").innerHTML = info.dot;


    //            DESKTOP priser her:
    document.querySelector(".deskvoksen").innerHTML = `${info.voksen} kr`;
    document.querySelector(".deskstudpen").innerHTML = `<b>Studerende:</b> ${info.students} kr <br> <b>Pensionister:</b> ${info.retired} kr`;
    document.querySelector(".deskborn").innerHTML = `${info.big_children} kr`;

    document.querySelector(".deskaarskort").innerHTML = `${info.small_children}`;


}


//Transport JS


function openOptionTransport(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();


//PRISER JS

function openOptionPrices(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();



//Guide JS

function openOptionGuide(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink3");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen3").click();






function showFooter() {




    // footer_stuff

    document.querySelector(".phone").innerHTML = "+45" + " " +
        info.telefon_nr;

    document.querySelector(".phone_times").innerHTML = info.telefontider;

    document.getElementById("myAnchor").href = "mailto:" + info.mail;

    document.getElementById("facebookAnchor").href = info.facebook;

    document.getElementById("instagramAnchor").href = info.instagram;



    console.log("showing info");


}
