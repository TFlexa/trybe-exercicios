// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList);
 
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => number % 2 === 0 && number % 5 ===0;

// const numeroDivisivel = numbers.find(findDivisibleBy3And5);

// console.log(numeroDivisivel);


// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (names) => names[ ].length === 5;

// const primeiroNumero = names.find(findNameWithFiveLetters);

// console.log(findNameWithFiveLetters());

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardox', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui
  people.sort();
  
  console.log(people);