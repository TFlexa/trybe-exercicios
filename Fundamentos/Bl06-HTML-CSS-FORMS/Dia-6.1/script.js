// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


HREF_LINK.addEventListener("click", recebeClick);

function recebeClick(evento) {
    evento.preventDefault();
    console.log(evento.target);
}

INPUT_CHECKBOX.addEventListener("click", recebeClick2);

function recebeClick2(evento) {
    evento.preventDefault();
    console.log(evento.target);    
}

INPUT_TEXT.addEventListener("keypress", recebeKey);

function recebeKey(evento) {
    evento.preventDefault();
    const key = evento.key;
    key = 'a';

}