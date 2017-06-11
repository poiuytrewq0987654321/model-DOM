'use strict';


/* przypisz nagłówek strony do zmiennej */
var mainHeader = document.getElementById('main-header');

console.log(mainHeader);


/* dodajemy treść do nagłówka */
mainHeader.innerHTML = "treść nagłówka";


/* przypisujemy pierwszy link do zmiennej */
var link = document.getElementsByClassName('link')[0];

console.log(link);

/* nadpisujemy atrybut href w linki */
link.href = "http://akademia108.pl";

/* nadpisujemy nazwę klasy w linku */
link.className = "nowa-klasa";

/* dodajemy style do nagłówka */
mainHeader.style.color = "#11aa22";