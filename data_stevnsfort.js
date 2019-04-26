let data;


document.addEventListener("DOMContentLoaded", start);


function start() {
    async function getJson() {

        let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/234";
        let jsonData = await fetch(url);
        data = await jsonData.json();
        showData();
    }


    function showData() {

        // BACKGROUND

        let background = data.baggrundsbillede.guid;

        let section_1_background = data.mobil_billede_1.guid;

        let section_2_background = data.mobil_billede_2.guid;



        console.log(background)

        document.getElementById("section1d").style.backgroundImage = "url(" + background + ")";

        document.getElementById("section1m").style.backgroundImage = "url(" + background + ")";

        document.getElementById("section2m").style.backgroundImage = "url(" + section_1_background + ")";

        document.getElementById("section3m").style.backgroundImage = "url(" + section_2_background + ")";

        //        TEXT


        document.querySelector(".datainsert1").innerHTML = data.textbox1;

        document.querySelector(".datainsert2").innerHTML = data.textbox2;

        document.querySelector(".datainsert3").innerHTML = data.textbox1;

        document.querySelector(".datainsert4").innerHTML = data.textbox2;


        //        IMG DESKTOP


        document.getElementById("imageinsert1").src = data.billede_1.guid;

        document.getElementById("imageinsert2").src = data.billede_2.guid;



        //        Priser Mobil

        document.querySelector(".voksen_m").innerHTML =
            "Voksen kr: " + data.voksen;

        document.querySelector(".children_m").innerHTML =
            "Børn 6-17 år kr: " + data.big_children;

        document.querySelector(".students_m").innerHTML =
            "Studerende kr: " + data.students;

        document.querySelector(".retired_m").innerHTML =
            "Pensionister kr: " + data.retired;



        //        Priser Desktop

        document.querySelector(".voksen_d").innerHTML =
            "Voksen kr: " + data.voksen;

        document.querySelector(".children_d").innerHTML =
            "Børn 6-17 år kr: " + data.big_children;

        document.querySelector(".students_d").innerHTML =
            "Studerende kr: " + data.students;

        document.querySelector(".retired_d").innerHTML =
            "Pensionister kr: " + data.retired;




        document.querySelector(".phone").innerHTML = "+45" + " " +
            data.telefon_nr;

        document.querySelector(".phone_times").innerHTML = data.telefontider;

        document.getElementById("myAnchor").href = "mailto:" + data.mail;

        document.getElementById("facebookAnchor").href = data.facebook;

        document.getElementById("instagramAnchor").href = data.instagram;




        console.log("showing data");


    }

    getJson();
}
