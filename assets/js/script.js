var indNumPisca = '.n1';
var contNumber = 0;
var contCampoNum = '.n1';
var votoVereador = [];
var confirmaVoto = 'nulo';
var idVoto = 0;
var nomeVere = 'nulo';
var partidoVere = 'nulo';
var fotoVere = 'nulo';

function alteraCampo(){
    switch (contNumber){
        case 1: contCampoNum = '.n1';
                indNumPisca = '.n2';
        break;
        case 2: contCampoNum = '.n2';
                indNumPisca = '.n3';
        break;
        case 3: contCampoNum = '.n3';
                indNumPisca = '.n4';
        break;
        case 4: contCampoNum = '.n4';
                indNumPisca = '.n5';
        break;
        case 5: contCampoNum = '.n5';            
                mostrarVere();
        break;
    }
}

function piscando(){
    if(document.querySelector(indNumPisca).classList.contains('pisca') == true){
        document.querySelector(indNumPisca).classList.remove('pisca');
        document.querySelector('.model2 h1').classList.remove('piscaH1');
    }else{
        document.querySelector(indNumPisca).classList.add('pisca');
        document.querySelector('.model2 h1').classList.add('piscaH1');
    }
}
const indicator = setInterval(() => {
    piscando();
}, 500);

document.querySelector('.btn1').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(1);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '1';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn2').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(2);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '2';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn3').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(3);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '3';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn4').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(4);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '4';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn5').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(5);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '5';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn6').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(6);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '6';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn7').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(7);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '7';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn8').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(8);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '8';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn9').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(9);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '9';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
document.querySelector('.btn0').addEventListener('click',()=>{
    
    contNumber++;
    votoVereador.push(0);
    alteraCampo();
    document.querySelector(contCampoNum).innerHTML = '0';
    document.querySelector(contCampoNum).style.marginTop = '10px';
    document.querySelector(contCampoNum).classList.remove('pisca');
    
    
});
function zerarVere(){
    indNumPisca = '.n1'
    
    document.querySelector('.n1').innerHTML = '';
    document.querySelector('.n2').innerHTML = '';
    document.querySelector('.n3').innerHTML = '';
    document.querySelector('.n4').innerHTML = '';
    document.querySelector('.n5').innerHTML = '';
    document.querySelector('.n1').style.marginTop = '0px';
    document.querySelector('.n2').style.marginTop = '0px';
    document.querySelector('.n3').style.marginTop = '0px';
    document.querySelector('.n4').style.marginTop = '0px';
    document.querySelector('.n5').style.marginTop = '0px';
    document.querySelector('.n1').classList.remove('pisca');
    document.querySelector('.n2').classList.remove('pisca');
    document.querySelector('.n3').classList.remove('pisca');
    document.querySelector('.n4').classList.remove('pisca');
    document.querySelector('.n5').classList.remove('pisca');
    document.querySelector('.cadidato').classList.add('out');
    document.querySelector('.cadidato span').innerHTML = '';
    document.querySelector('.partido').classList.add('out');
    document.querySelector('.partido span').innerHTML = '';
    document.querySelector('.imgVereador').classList.add('out');
    document.querySelector('.imgVereador img').style = 'display: none';
    votoVereador = [];
    contNumber = 0;
    alteraCampo();
}

document.querySelector('.btnCorrige').addEventListener('click',()=>{
    zerarVere();
});
var candidatoJson = [
    {id:1, name:'Invalido', img:'assets/image/invalido.png', partido:'Escolha outro número.', numberCandi: '00000'},
    {id:1, name:'FELIPE FRANCO', img:'assets/image/1.jpg', partido:'Podemos', numberCandi: '67289'},
    {id:2, name:'FERNANDO HOLIDAY', img:'assets/image/2.jpg', partido:'Novo', numberCandi: '19546'},
    {id:3, name:'DELEGADO PALUMBO', img:'assets/image/3.jpg', partido:'MDB', numberCandi: '85432'},
    {id:4, name:'CRIS MONTEIRO', img:'assets/image/4.jpg', partido:'Novo', numberCandi: '94378'},
    {id:5, name:'ELY TERUEL', img:'assets/image/5.jpg', partido:'Podemos', numberCandi: '49576'}
];

function mostrarVere () {
    confirmaVoto = votoVereador.join('');
    switch (confirmaVoto){
        case '67289': idVoto = 1;
        break;
        case '19546': idVoto = 2;
        break;
        case '85432': idVoto = 3;
        break;
        case '94378': idVoto = 4;
        break;
        case '49576': idVoto = 5;
        break;
        default: idVoto = 0;
                 votoVereador = '00000';
    }    
    nomeVere = candidatoJson[idVoto].name;
    partidoVere = candidatoJson[idVoto].partido;
    fotoVere = candidatoJson[idVoto].img;
    
    document.querySelector(indNumPisca).classList.remove('pisca');
    document.querySelector('.imgVereador img').style = 'display: block';
    document.querySelector('.cadidato').classList.remove('out');
    document.querySelector('.cadidato span').innerHTML = nomeVere;
    document.querySelector('.partido').classList.remove('out');
    document.querySelector('.partido span').innerHTML = partidoVere;
    document.querySelector('.imgVereador').classList.remove('out');
    document.querySelector('.imgVereador img').src = fotoVere;
};

document.querySelector('.btnConfirma').addEventListener('click',()=>{
    if (votoVereador.length >= 5 && votoVereador != 00000){
        document.querySelector('.model1').classList.add('hidden');
        document.querySelector('.model1').classList.remove('show');                
        document.querySelector('.model2').classList.remove('hidden');
        document.querySelector('.model2').classList.add('show');
    }else{
        zerarVere();
    }    
});

document.querySelector('.btnBranco').addEventListener('click',()=>{
    if (document.querySelector('.model1').classList.contains('hidden')){        
        document.querySelector('.model1').classList.remove('hidden');
        document.querySelector('.model1').classList.add('show');                
        document.querySelector('.model2').classList.add('hidden');
        document.querySelector('.model2').classList.remove('show');
        zerarVere();
    }else{
        zerarVere();
    }    
});




candidatoJson.map((item, index)=>{
    let candidatoCola = document.querySelector('.models .colaModel').cloneNode(true);

    candidatoCola.setAttribute('data-key', index);
    candidatoCola.querySelector('#titleCola').innerHTML = `Nome: ${item.name}`;    
    candidatoCola.querySelector('#numeroVoto').innerHTML = `Número: ${item.numberCandi}`;
    candidatoCola.querySelector('.colaModel img').src = item.img;


    document.querySelector('.cola').append(candidatoCola);
});





