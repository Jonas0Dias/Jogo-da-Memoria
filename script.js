//Criando uma variável para determinar o número de cartas no jogo
let QtdCartas = 0
while(QtdCartas%2!==0 || QtdCartas>14 || QtdCartas<4){
    alert("Você deve escolher um número par entre 4 e 14, inclusive.")
    QtdCartas = prompt('Com quantas cartas deseja Jogar?')
    }
QtdCartas =  parseInt(QtdCartas)

let board = window.document.querySelector('.board')

// let banana;
// banana = 'teste'
// let maca
// maca  = `teste2 ${banana}`

// let baralho = ['imagens/drogon.webp', 'imagens/got.jpg', 'imagens/Koala.jpg', 'imagens/porco.jpg', 'imagens/rick.avif', 'imagens/walter.jpeg', 'imagens/driven.jpg']

//Criando uma função para embaralhar o Array
function comparador() { 
	return Math.random() - 0.5; 
}


//Criando uma variavel que contém 7 divs com as imagens frente e verso
const baralhoTodo = ["<div class='memory-card'><img class='frente' src='imagens/drogon.webp'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/got.jpg'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/Koala.jpg'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/porco.jpg'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/rick.jpeg'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/walter.jpeg'><img class='costas' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' src='imagens/driven.jpg'><img class='costas' src='imagens/verso.png'></div>"]




// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}







let cartas=[]


function DistribCartas(){
    
    shuffleArray(baralhoTodo);
    for (i=0;i<QtdCartas/2;i++){
        board.innerHTML = board.innerHTML + baralhoTodo[i]
    }
    baralho = document.querySelectorAll('.memory-card')

    DistribCartas2();
}
function DistribCartas2(){
    for (i=0;i<QtdCartas/2;i++){
        cartas.push(baralho[i])
    }
    for (i=0;i<QtdCartas/2;i++){
        cartas.push(cartas[i])
    }
    shuffleArray(cartas)
    board.innerHTML=''
    for (i=0;i<QtdCartas;i++){
        board.innerHTML = board.innerHTML + '<div class = "memory-card">'+cartas[i].innerHTML+'</div>'     }

    
}
       

DistribCartas();







