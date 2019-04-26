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


    let geoFag1 = ture.find(geoFag1 => geoFag1.id == 277);

    let geoFag2 = ture.find(geoFag2 => geoFag2.id == 278);

    let geoFag3 = ture.find(geoFag3 => geoFag3.id == 279);
    let geoFag4 = ture.find(geoFag4 => geoFag4.id == 280);
    let geoFag5 = ture.find(geoFag5 => geoFag5.id == 281);


    let geoFag6 = ture.find(geoFag6 => geoFag6.id == 282);
    let geoFag7 = ture.find(geoFag7 => geoFag7.id == 283);




    console.log("visTure");
    //          MOBIL  Undervisning her:
    document.querySelector(".treklasse").innerHTML = `<h3>${geoFag1.title.rendered}</h3>
        <br>
    <p>${geoFag1.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag1.klassetrin}
        <br>
    <b>Fag:</b>${geoFag1.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag1.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag1.varighed}
        <br>
    <b>Lokation:</b>${geoFag1.lokation}
        <br>
    <b>Pris:</b>${geoFag1.pris}<br>`;






    document.querySelector(".syvklasse").innerHTML = `<h3>${geoFag2.title.rendered}</h3>
        <br>
    <p>${geoFag2.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag2.klassetrin}
        <br>
    <b>Fag:</b>${geoFag2.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag2.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag2.varighed}
        <br>
    <b>Lokation:</b>${geoFag2.lokation}
        <br>
    <b>Pris:</b>${geoFag2.pris}
        <br>`;









    document.querySelector(".stx").innerHTML = `<h3>${geoFag3.title.rendered}</h3>
        <br>
    <p>${geoFag3.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag3.klassetrin}
        <br>
    <b>Fag:</b>${geoFag2.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag2.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag2.varighed}
        <br>
    <b>Lokation:</b>${geoFag2.lokation}
        <br>
    <b>Pris:</b>${geoFag2.pris}
        <br>`;

    document.querySelector(".stx").innerHTML += `<br>
        <br>
    <h3>${geoFag4.title.rendered}</h3>
        <br>
    <p>${geoFag4.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag4.klassetrin}
        <br>
    <b>Fag:</b>${geoFag4.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag4.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag4.varighed}
        <br>
    <b>Lokation:</b>${geoFag4.lokation}
        <br>
    <b>Pris:</b>${geoFag4.pris}
        <br>`;

    document.querySelector(".stx").innerHTML += `<br>
        <br>
    <h3>${geoFag5.title.rendered}</h3>
        <br>
    <p>${geoFag5.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag5.klassetrin}
        <br>
    <b>Fag:</b>${geoFag5.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag5.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag5.varighed}
        <br>
    <b>Lokation:</b>${geoFag5.lokation}
        <br>
    <b>Pris:</b>${geoFag5.pris}
        <br>`;







    document.querySelector(".andet").innerHTML += `<h3>${geoFag6.title.rendered}</h3>
        <br>
    <p>${geoFag6.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag6.klassetrin}
        <br>
    <b>Fag:</b>${geoFag6.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag6.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag6.varighed}
        <br>
    <b>Lokation:</b>${geoFag6.lokation}
        <br>
    <b>Pris:</b>${geoFag6.pris}
        <br>`;


    document.querySelector(".andet").innerHTML += `<br>
        <br>
    <h3>${geoFag7.title.rendered}</h3>
        <br>
    <p>${geoFag7.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag7.klassetrin}
        <br>
    <b>Fag:</b>${geoFag7.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag7.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag7.varighed}
        <br>
    <b>Lokation:</b>${geoFag7.lokation}
        <br>
    <b>Pris:</b>${geoFag7.pris}
        <br>`;





    //          DESKTOP  Undervisning her:DESKTOP
    // Undervisning her:DESKTOP  Undervisning her:DESKTOP
    // Undervisning her:DESKTOP  Undervisning her:

    document.querySelector(".desktreklasse").innerHTML = `<h3>${geoFag1.title.rendered}</h3>
        <br>
    <p>${geoFag1.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag1.klassetrin}
        <br>
    <b>Fag:</b>${geoFag1.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag1.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag1.varighed}
        <br>
    <b>Lokation:</b>${geoFag1.lokation}
        <br>
    <b>Pris:</b>${geoFag1.pris}
        <br>`;






    document.querySelector(".desksyvklasse").innerHTML = `<h3>${geoFag2.title.rendered}</h3>
        <br>
    <p>${geoFag2.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag2.klassetrin}
        <br>
    <b>Fag:</b>${geoFag2.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag2.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag2.varighed}
        <br>
    <b>Lokation:</b>${geoFag2.lokation}
        <br>
    <b>Pris:</b>${geoFag2.pris}
        <br>`;








    document.querySelector(".deskstx").innerHTML = `<h3>${geoFag3.title.rendered}</h3>
        <br>
    <p>${geoFag3.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag3.klassetrin}
        <br>
    <b>Fag:</b>${geoFag2.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag2.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag2.varighed}
        <br>
    <b>Lokation:</b>${geoFag2.lokation}
        <br>
    <b>Pris:</b>${geoFag2.pris}
        <br>`;

    document.querySelector(".deskstx").innerHTML += `<br>
        <br>
    <h3>${geoFag4.title.rendered}</h3>
        <br>
    <p>${geoFag4.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag4.klassetrin}
        <br>
    <b>Fag:</b>${geoFag4.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag4.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag4.varighed}
        <br>
    <b>Lokation:</b>${geoFag4.lokation}
        <br>
    <b>Pris:</b>${geoFag4.pris}
        <br>`;

    document.querySelector(".deskstx").innerHTML += `<br>
        <br>
    <h3>${geoFag5.title.rendered}</h3>
        <br>
    <p>${geoFag5.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag5.klassetrin}
        <br>
    <b>Fag:</b>${geoFag5.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag5.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag5.varighed}
        <br>
    <b>Lokation:</b>${geoFag5.lokation}
        <br>
    <b>Pris:</b>${geoFag5.pris}
        <br>`;







    document.querySelector(".deskandet").innerHTML += `<h3>${geoFag6.title.rendered}</h3>
        <br>
    <p>${geoFag6.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag6.klassetrin}
        <br>
    <b>Fag:</b>${geoFag6.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag6.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag6.varighed}
        <br>
    <b>Lokation:</b>${geoFag6.lokation}
        <br>
    <b>Pris:</b>${geoFag6.pris}
        <br>`;


    document.querySelector(".deskandet").innerHTML += `<br>
        <br>
    <h3>${geoFag7.title.rendered}</h3>
        <br>
    <p>${geoFag7.content.rendered}</p>
        <br>
    <b>Målgruppe:</b>${geoFag7.klassetrin}
        <br>
    <b>Fag:</b>${geoFag7.fag}
        <br>
    <b>Max antal deltagere:</b>${geoFag7.antal_deltagere}
        <br>
    <b>Varighed:</b>${geoFag7.varighed}
        <br>
    <b>Lokation:</b>${geoFag7.lokation}
        <br>
    <b>Pris:</b>${geoFag7.pris}
        <br>`;





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
