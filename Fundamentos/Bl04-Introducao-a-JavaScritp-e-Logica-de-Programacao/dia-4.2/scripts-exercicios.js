let members = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0

// let maior = members[0];

for (let index = 0; index < members.length; index += 1){

    if (members[index] %2 !== 0){
    
        impar += 1}
    
    if (impar === 0){
    
        console.log("Não foram encontrados numeros impares");
    }
        else {
        console.log("Os seguintes numewros impares encontrados:", + impar);
    }
}      
        
    
    
    //if (maior < members[i]) {
        //maior = members[i]; }


// console.log('O maior array é:', maior);
    // console.log(members[i]);
    //soma += members[i];
    //media = soma/members.length;

//console.log('A soma das notas é:', soma);
//console.log('A media das notas é:', media);

//if (media > 20){
    //console.log('valor maior que 20');}
//else {
    //console.log('valor menor ou igual a 20');}