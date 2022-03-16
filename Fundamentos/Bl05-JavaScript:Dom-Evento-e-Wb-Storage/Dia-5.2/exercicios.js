let firstH2 = document.querySelector('body');
console.log(firstH2);

let novaTag = document.createElement('h2');
console.log(novaTag);
firstH2.appendChild(novaTag);

let tagMain = document.createElement('main');
console.log(tagMain);
tagMain.classList = 'main-content';
firstH2.appendChild(tagMain);

let tagSection = document.createElement('section');
console.log(tagSection);
tagSection.classList = 'center-content';
tagMain.appendChild(tagSection);

let paragraph = document.createElement('p');
paragraph.innerText = 'Trybe é uma escola';
tagSection.appendChild(paragraph);

let tagSection2 = document.createElement('section');
tagSection2.classList = 'left-content';
tagMain.appendChild(tagSection2);

let tagSection3 = document.createElement('section');
tagSection3.classList = 'right-content';
tagMain.appendChild(tagSection3);

let tagImg = document.createElement('img');
tagImg.src = "https://picsum.photos/200";
tagImg.classList = 'small-image';
tagSection2.appendChild(tagImg);

  function numeros(um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez) {
    let tagUl = document.createElement('ul');
    for(let i = 0; i < .length; i += 1){
        let tagLi = document.createElement('li');
        tagLi.appendChild(document.createTextNode(array[i]));
        tagUl.appendChild(tagLi);
    }
    return tagUl;
  }
tagSection3.appendChild(tagUl);
