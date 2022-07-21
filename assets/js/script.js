const scroll = document.getElementById('scroll');
let defil;
// ecouter le scroll de l'utilisateur sur la page
window.addEventListener(
    "scroll",
    function () {
        //console.dir(document);
        // le "|" permet en cas de valeur null sur un navigateur
        // d'en selectionner une autre
        //console.log(document.scrollTop | document.scrollingElement.scrollTop | window.scrollY);
        // je stock dans ma variable defil le scroll depuis le haut de 
        // mon document
        defil = document.scrollTop
            | document.scrollingElement.scrollTop | window.scrollY;
        // a partir de 1200px de scroll je change le style d'un element HTML
        // ici le backgroud-color de la div#scroll
        if (defil >= 1200) {
            console.log("changement de couleur");
            scroll.style.backgroundColor = "red";
        }
        // comment detecter le "bas de page" avec l'event scroll
        // pour obtenir la hauteur defilement + hauteur ecran :
        console.log(defil+document.documentElement.clientHeight);
        // pour obtenir la hauteur totale du document - 100px de marge
        console.log(document.body.offsetHeight-100);
        // et enfin comparer les deux et avoir le bas de page :
        if(defil+document.documentElement.clientHeight >= 
            document.body.offsetHeight-100){
            alert("bas de page!")
        }
    }
)