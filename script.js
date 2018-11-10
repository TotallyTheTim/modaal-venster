//De div waar alles instaat
let holder = document.getElementById("holder");

//modaal object waar alle informatie in staat.
let modaal = {

        title: [
            //Title 1
            "Rood grietje",

            //Title 2
            "Mijn logo ofzo",

            //Title 3
            "Nog een titel"
        ],


        img: [
            //img 1
            "redhead.jpg",

            //img 2
            "newlogoface.png",

            //img 3
            "snapchat.jpg"
        ],


        text: [
            //text 1
            "Ze ziet er niet slecht uit om eerlijk te zijn!<br>" +
            "Ik zou d'r doen hoor!",

            //text 2
            "Het ziet er lekker uit hé?<br>" +
            "Je kan hier ook een <a href='https://www.w3schools.com/tags/att_a_href.asp' target='_blank'>link</a> in doen hé!",

            //text 3
            "Wat ben ik toch fucking <b>lekker</b> hé. <br>" +
            "Nee? Fuck <i>you</i>."

        ]


    };

//opent voor elke één nieuwe div in de functie newModaal
let i;
for (i = 0; i < modaal.title.length && i < modaal.img.length && i < modaal.text.length; i++) {
 newModaal(modaal.title[i],modaal.img[i],modaal.text[i]);
}

function newModaal(title, img, text) {
    //new div
    let div = document.createElement('div');
    div.classList.add("modaalDiv");
    //bg div
    div.style.background = "url('img/" + img + "')";
    //title div
    div.innerText = title;
    //on click opent het de text etc
    div.addEventListener("click", function(){
        modaalFull(title,img,text);
    });
    //plaatst te div in <div id="holder">
    holder.appendChild(div);
}
//    Maakt de modaal overlay
function modaalFull(title,img,text) {
    //zwarte achtergrond div
    let bg = document.createElement('div');
    bg.classList.add("modaal");
    document.body.appendChild(bg);

    // foto
    let image = document.createElement('img');
    image.src= 'img/' + img + '';
    bg.appendChild(image);

    // text div met title EN text er in
    let div = document.createElement('div');
    bg.appendChild(div);
    div.innerHTML = "<h1>"+ title +"</h1>" + text;

    //close button met sluit functie
    let close = document.createElement('button');
    bg.appendChild(close);
    close.innerText = "close me!";
    close.addEventListener("click", function(){
        bg.parentNode.removeChild(bg);
    });

}