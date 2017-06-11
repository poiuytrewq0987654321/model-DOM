'use strict';

/* przypisz do zmiennej istniejacy węzeł */
var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);


/* stworz nowy element p */
var newElement = document.createElement('p');


/* tworzenie nowego tekstu dla elementu p */
var newElementContent = document.createTextNode('To jest nowy paragraf');


/* dodaj tekst do elementu p */
newElement.appendChild(newElementContent);

console.log(newElement);

/* dodaj nowy element p do div (pojawi sie na stronie) */
istniejacyWezel.appendChild(newElement);


/* usuń newElement ze strony */
istniejacyWezel.removeChild(newElement);







