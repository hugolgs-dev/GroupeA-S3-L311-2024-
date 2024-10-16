// le contenu html initial est chargé & analysé
window.addEventListener("DOMContentLoaded", (event) => {
    let is_run    = "true";

    init();

    function init(){
       document.querySelector('.button').addEventListener('clic', (event) => // ajout d'un écouteur d'évènement à l'élément avec la classe .button
            is_run = !is_run // fonctionne comme un interrupteur (si is_run est true, alors il devient false, et vice versa)
            
            /* Opérateur conditionel ternaire */

            // opérande 1 : la condition | on regarde si la classe "pause" est présente dans l'élément qui possède la classe "button"
            ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) 

            // opérande 2 : si la condition est vraie => on enlève la classe "pause"
            ? dcument.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) 

            // opérande 3 : si la condition est fausse => on ajoute la classe "pause"
            : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class')+' pause');

        })

        setTimeInterval(function(){
            if(is_run){
                // si l'interrupteur est allumé (is_run retourne un true)
                let oDate = new Date(); // on récupère la date & l'heure actuels

                /* Puis on extrait l'heure, la minute et la seconde actuelles, que l'on affiche dans leurs éléments html respectifs*/
                document.querySelector('#hours').innerHTML   =  adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML =  adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML =  adjustTimer( oDate.getSeconds());
                
                // On associe ensuite une couleur aléatoire à l'heure, la minute et la seconde, avec la valeur rgb générée aléatoirement par la fonction randomHexColor().
                document.querySelector('body').style.background = randomHexColor(
                    document.querySelector('#hours').innerHTML, 
                    document.querySelector('#minutes').innerHTML, 
                    document.querySelector('#seconds').innerHTML);
                
            }
        }, 1000;
    }

    /* 
        Un autre opérateur conditionel ternaire. Ici, on regarde si la variable "timer" a une variable inférieure à 10.
        Si c'est le cas, on rajoute un 0 devant la valeur de "timer". Sinon, on ne change pas la valeur de "timer".
    */ 
    function adjustTimer(timer){
        (timer < 10 ? '0'+timer : timer);
    }

    /* 
        Attribue une couleur en déterminant une valeur aléatoire pour le rouge, le vert et le bleu dans rgb(r, b, g)
        Par exemple: rgb(100, 150, 200) ou rgb(250, 200, 100), etc.
    */
    function randomHexColor(x, y){
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
    
});