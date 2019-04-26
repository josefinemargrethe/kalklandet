let data;


document.addEventListener("DOMContentLoaded", start);


function start() {
    async function getJson() {

        //!!!!Opdater hjemmesiden så den passer!!!!

        let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/210";
        let jsonData = await fetch(url);
        data = await jsonData.json();
        showData();
    }


    function showData() {




        // footer_stuff

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
