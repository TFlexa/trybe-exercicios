// Exercicio 01

// // function testingScope(escopo) {
// //     if (escopo === true) {
// //       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// //       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
// //       console.log(ifScope);
// //     } else {
// //       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// //       console.log(elseScope);
// //     }
// //     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// //   }

// //   testingScope(true);

// const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// const testingScope = (escopo) => escopo === true ? `${ifScope} otimo, fui utilizada no escopo!` : `${elseScope} Não devo ser utilizada fora meu escopo(else)`;
// console.log(testingScope(true));
// console.log(testingScope(false));

// Exercicio 02

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// let numerosCrescente = oddsAndEvens.sort(function (a, b) {
//     return a - b;
// })
// console.log(`Os números ${numerosCrescente} se encontram ordenados de forma crescente`);

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, 3));

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

//   const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));