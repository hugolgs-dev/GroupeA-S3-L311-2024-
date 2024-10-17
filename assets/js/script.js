// le contenu html initial est chargé & analysé
window.addEventListener("DOMContentLoaded", (event) => {

    let is_run = true; // Initialisation de is_run

    init();

    function init(){
        console.log("la fonction init est appelée");

        document.querySelector('.button').addEventListener('click', (event) => { 
            console.log("Le bouton a été cliqué");

            // ajout d'un écouteur d'évènement à l'élément avec la classe .button
            is_run = !is_run; // fonctionne comme un interrupteur (si is_run est true, alors il devient false, et vice versa)
            console.log("état de is_run maintenant :", is_run);
            
            /* Opérateur conditionnel ternaire */

            // opérande 1 : la condition | on regarde si la classe "pause" est présente dans l'élément qui possède la classe "button"
            const hasPauseClass = ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1);
            console.log("la classe 'pause' est présente :", hasPauseClass);

            // opérande 2 : si la condition est vraie => on enlève la classe "pause"
            hasPauseClass 
            ? document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) 
            // opérande 3 : si la condition est fausse => on ajoute la classe "pause"
            : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class')+' pause');

        })

        setInterval(function(){
            console.log("Vérification de is_run :", is_run);
            if(is_run){
                console.log("is_run est vrai => mise à jour de l'heure");

                // si l'interrupteur est allumé (is_run retourne un true)
                let oDate = new Date(); // on récupère la date & l'heure actuels
                console.log("Heure actuelle :", oDate);

                /* Puis on extrait l'heure, la minute et la seconde actuelles, que l'on affiche dans leurs éléments html respectifs*/
                document.querySelector('#hours').innerHTML   =  adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML =  adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML =  adjustTimer(oDate.getSeconds());

                 console.log("Heure mise à jour : heures =", oDate.getHours(), "minutes =", oDate.getMinutes(), "secondes =", oDate.getSeconds());
                
                // On associe ensuite une couleur aléatoire à l'heure, la minute et la seconde
                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML, 
                    document.querySelector('#minutes').innerHTML, 
                    document.querySelector('#seconds').innerHTML
                );
                console.log("La couleur de fond a changé");
            }
        }, 1000);
    }

    /* 
        Un autre opérateur conditionnel ternaire. Ici, on regarde si la variable "timer" a une valeur inférieure à 10.
        Si c'est le cas, on rajoute un 0 devant la valeur de "timer". Sinon, on ne change pas la valeur de "timer".
    */ 
    function adjustTimer(timer){
        console.log("Mise à jour de la valeur du timer :", timer);
        return (timer < 10 ? '0'+timer : timer);
    }

    /* 
        Attribue une couleur en déterminant une valeur aléatoire pour le rouge, le vert et le bleu dans rgb(r, g, b)
        Par exemple : rgb(100, 150, 200) ou rgb(250, 200, 100), etc.
    */
    function randomHexColor(x, y, z){
        console.log("Génération de la couleur aléatoire du fond avec x :", x, "y :", y, "z :", z);
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }

});
