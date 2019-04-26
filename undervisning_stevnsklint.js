let info;
let acc = document.getElementsByClassName("accordion");
let i;


document.addEventListener("DOMContentLoaded", hentJson2);



async function hentJson2() {

    let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/undervisning?per_page=20";
    let jsonData = await fetch(url);
    ture = await jsonData.json();

    visTure();

    console.log("getjson2");

}

function visTure() {


    let geoFag1 = ture.find(geoFag1 => geoFag1.id == 77);

    let geoFag2 = ture.find(geoFag2 => geoFag2.id == 80);






    console.log("visTure");
    //            Mobil undervisning her:
    document.querySelector(".ottendeklasse").innerHTML = `<h3>${geoFag1.title.rendered}</h3><br><p>${geoFag1.content.rendered}</p><br> <b>Målgruppe:</b>${geoFag1.klassetrin}<br><b>Fag:</b>${geoFag1.fag}<br><b>Max antal deltagere:</b>${geoFag1.antal_deltagere}<br><b>Varighed:</b>${geoFag1.varighed}<br><b>Lokation:</b>${geoFag1.lokation}<br><b>Pris:</b>${geoFag1.pris}<br>`;






    document.querySelector(".stx").innerHTML = `<h3>${geoFag2.title.rendered}</h3><br><p>${geoFag2.content.rendered}</p><br> <b>Målgruppe:</b>${geoFag2.klassetrin}<br><b>Fag:</b>${geoFag2.fag}<br><b>Max antal deltagere:</b>${geoFag2.antal_deltagere}<br><b>Varighed:</b>${geoFag2.varighed}<br><b>Lokation:</b>${geoFag2.lokation}<br><b>Pris:</b>${geoFag2.pris}<br>`;






    //            DESKTOP UNDERVISNING    her:
    document.querySelector(".deskottendeklasse").innerHTML = `<h3>${geoFag1.title.rendered}</h3><br><p>${geoFag1.content.rendered}</p><br> <b>Målgruppe:</b>${geoFag1.klassetrin}<br><b>Fag:</b>${geoFag1.fag}<br><b>Max antal deltagere:</b>${geoFag1.antal_deltagere}<br><b>Varighed:</b>${geoFag1.varighed}<br><b>Lokation:</b>${geoFag1.lokation}<br><b>Pris:</b>${geoFag1.pris}<br>`;






    document.querySelector(".deskstx").innerHTML = `<h3>${geoFag2.title.rendered}</h3><br><p>${geoFag2.content.rendered}</p><br> <b>Målgruppe:</b>${geoFag2.klassetrin}<br><b>Fag:</b>${geoFag2.fag}<br><b>Max antal deltagere:</b>${geoFag2.antal_deltagere}<br><b>Varighed:</b>${geoFag2.varighed}<br><b>Lokation:</b>${geoFag2.lokation}<br><b>Pris:</b>${geoFag2.pris}<br>`;







    //           document.querySelector(".syvklasse").innerHTML = geoGuide3.content.rendered;
    // document.querySelector(".stx").innerHTML = geoGuide4.content.rendered;
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
