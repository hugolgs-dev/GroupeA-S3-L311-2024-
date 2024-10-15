window.addEventListener("DOMContentLoaded", (event) => {
    let is_run    = "true";

    init();

    function init(){
       document.querySelector('.button').addEventListener('clic', (event) => 
            is_run = !is_run
            ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ? dcument.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class')+' pause');
        })

        setTimeInterval(function(){
            if(is_run){
                let oDate = new Date();
                document.querySelector('#hours').innerHTML   =  adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML =  adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML =  adjustTimer( oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);
                
            }
        }, 1000;
    }

    function adjustTimer(timer){
        (timer < 10 ? '0'+timer : timer);
    }

    function randomHexColor(x, y){
        return "rgb(" + Math.floor(x/100 * 256) + "," + Math.floor(y/100 * 256) + "," + Math.floor(z/100 * 256) + ")";
    }
});