let members = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < members.length; i += 1) {
    // console.log(members[i]);
    soma += members[i];
    media = soma/members.length;
}
console.log('A soma das notas é:', soma);
console.log('A media das notas é:', media);
