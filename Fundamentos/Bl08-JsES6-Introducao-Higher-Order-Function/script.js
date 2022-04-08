// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando';

const dirnkCofee = () => 'Bora tomar cafe!';

const goSleep = () => 'Partiu dormir';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!