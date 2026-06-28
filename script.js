const button = document.querySelector("#language-btn");

const texts = document.querySelectorAll("[data-en]");


let language = "EN";



button.addEventListener("click", () => {


    if (language === "EN") {


        texts.forEach(text => {


            text.innerHTML = text.dataset.pt;


        });



        language = "PT";


        document.querySelector("#pt").style.opacity = "1";

        document.querySelector("#en").style.opacity = ".4";


    } else {



        texts.forEach(text => {


            text.innerHTML = text.dataset.en;


        });



        language = "EN";


        document.querySelector("#pt").style.opacity = ".4";

        document.querySelector("#en").style.opacity = "1";


    }


});