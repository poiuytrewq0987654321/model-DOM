'use strict';


/*var secondLink = document.getElementsByTagName('a')[1];

console.log(secondLink);

function alarm(zdarzenie){
    zdarzenie.preventDefault();// zapobiegamy domyślnej akcji
    console.log('kliknieto kolejny link');// w konsoli po kliknieciu w link z funkcji zdarzenie - pojawia sie komunikat o tym
    
    // pojawienie się wszystkich informacji o tym zdarzeniu - dosłownie wszystko
    //console.log(zdarzenie);
}

// wywołujemy funkcję alarm() na drugim linku po kliknięciu
secondLink.onclick = alarm;


var thirdLink = document.getElementsByTagName('a')[2];

// wywołujemy funkcję alarm() na trzecim linku po kliknięciu za pomocą event listenera
thirdLink.addEventListener('click', alarm);

thirdLink.removeEventListener('click', alarm);*/



/* efekt powiększania napisu po najechaniu */

//przypisujemy nagłówek do zmiennej 
/*var mainHeader = document.getElementById('main-header');

//przekazujemy zdarzenia jako parametr funkcji
function resize(e){
    //console.log(e.type);
    if(e.type=='mouseover'){
        mainHeader.style.fontSize = "70px";
        //po najechaniu myszką powiększ wielkość czcionki
    } else {
        mainHeader.style.fontSize = "inherit";
        //przywróć domyślną wielkość po zjechaniu
    }
}

//wywołanie funkcji resize po najechaniu myszką na nagłówek
mainHeader.onmouseover = resize;

// wywołanie funkcji resize po zjechaniu myszką z nagłówka
mainHeader.onmouseout = resize;*/



function klikHeader() {
    console.log("kliknąłeś w header");
}


//wywołaj funkcję na elemencie header
document.getElementsByTagName('header')[0].onclick = klikHeader;


function klikH1(e){
    //wstrzymanie propagacji po tym zdarzeniu
    e.stopPropagation();
    console.log('kliknąłeś w h1');
}


//wywołaj funkcję na elemencie h1
document.getElementsByTagName('h1')[0].onclick = klikH1;




