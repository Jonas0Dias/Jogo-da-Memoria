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



//Criando uma variavel que contém 7 divs com as imagens frente e verso
const baralhoTodo = ["<div class='memory-card'><img class='frente acertou' src='imagens/drogon.webp'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/got.jpg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/Koala.jpg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/porco.jpg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/rick.jpeg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/walter.jpeg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente acertou' src='imagens/driven.jpg'><img class='costas' onclick = 'escolher(this)' src='imagens/verso.png'></div>"]




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

function escolher(carta){
    carta.classList.add('escondido')
    pegarprimeiracarta();
    verificarcartas();
}

CartaCosta = window.document.querySelectorAll('.costas');
CartaFrente = window.document.querySelectorAll('.frente');

//após clicar na primeira carta, clicar na segunda e verificar se elas são iguais. Se forem, elas devem permanecer viradas até o fim do jogo, se não forem, elas devem voltar a ficar viradas para baixo.




function pegarprimeiracarta(){
    
    console.log(cartafrente1)


    let cartafrente1;
    let cartacosta1;
    for (i=0;i<CartaCosta.length;i++){
        if (CartaCosta[i].classList.contains('escondido')){
            // console.log('teste');
            cartafrente1 = CartaFrente[i];
            cartacosta1 = CartaCosta[i];
            // console.log(cartafrente1);
            // console.log(cartacosta1);
            break
       
        }
    }
    console.log(cartafrente1);
    ;
}
// console.log(cartafrente1);




function verificarcartas(){
    let cartafrente2;
    let cartacosta2;

    for (i=0;i<CartaCosta.length;i++){
        if (cartacostas1 !== CartaCosta[i]){
            cartafrente2 = CartaFrente[i];
            if(cartafrente1 !== cartafrente2){
                cartacosta1.classList.remove('escondido')
                cartacosta2.classList.remove('escondido')
            }
            else{
                cartafrente1.classList.add('acertou')
                cartafrente2.classList.add('acertou')

            }
        }
        
        pegarprimeiracarta();
    }

}







