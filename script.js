let cartafrente1=null;
let cartacosta1=null;
let cartafrente2=null;
let cartacosta2=null;
let carta;
let contador;
let limite;
let clicks=0



//Criando uma variável para determinar o número de cartas no jogo
let QtdCartas = 0
while(QtdCartas%2!==0 || QtdCartas>14 || QtdCartas<4){
    alert("Você deve escolher um número par entre 4 e 14, inclusive.")
    QtdCartas = prompt('Com quantas cartas deseja Jogar?')
    }
QtdCartas =  parseInt(QtdCartas)

let board = window.document.querySelector('.board')





//Criando uma variavel que contém 7 divs com as imagens frente e verso
const baralhoTodo = ["<div class='memory-card'><img class='frente' id='a'  src='imagens/drogon.webp'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='b' src='imagens/got.jpg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='c' src='imagens/Koala.jpg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='d' src='imagens/porco.jpg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='e' src='imagens/rick.jpeg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='f' src='imagens/walter.jpeg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>", "<div class='memory-card'><img class='frente' id='g' src='imagens/driven.jpg'><img class='costas aparecido' onclick = 'escolher(this)' src='imagens/verso.png'></div>"]




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

CartaCosta = window.document.querySelectorAll('.costas');
CartaFrente = window.document.querySelectorAll('.frente');
contador = document.querySelector('.timer')

let primeiracartaclicada;


cartasclicadas=[]

function escolher(carta){
    cartasclicadas.push(carta)
    carta.classList.add('escondido')
    if (cartasclicadas.length==2){
        clicks = clicks +2
        console.log(clicks)
        setTimeout(CompararCartas, 700);
    }
    
}


//Preciso identificar agora qual a posição no Nodelist CartasCosta se encontram as cartas cartasclicadas[0] e cartasclicadas[1], pra poder pegar o índice delas e pode descobrir quais cartas de frente são.


function CompararCartas(){
    for (i=0;i<CartaCosta.length;i++){
        if (CartaCosta[i] === cartasclicadas[0]){
            cartafrente1 = CartaFrente[i].id
            
    
        }
        else if (CartaCosta[i] === cartasclicadas[1]){
            cartafrente2 = CartaFrente[i].id
            
        }
    }
    
    
        if (cartafrente1 !== cartafrente2) {
            cartasclicadas[0].classList.remove('escondido')
            cartasclicadas[1].classList.remove('escondido')
        }

        else if (cartafrente1 == cartafrente2){
            console.log(cartasclicadas[0])
            cartasclicadas[0].classList.remove('aparecido')
            cartasclicadas[1].classList.remove('aparecido')
        }

        cartasclicadas=[]
        // AQUI EU QUERO VER QUE SE EU VIREI TODAS AS CARTAS, ENTÃO NENHUMA MAIS TEM A CLASSE 'APARECIDO'. QUERO SUAR ESSA INFORMAÇÃO PARA FINALIZAR O JOGO
        if (document.querySelectorAll('.aparecido').length==0){
            alert(`Você ganhou em ${clicks} jogadas!`)
        }
}
   
    tempo = 0
    function contar(){
        tempo++
        // console.log(tempo)
        contador.innerHTML = (`Tempo: ${tempo}`)
        
    }

    setInterval(contar, 1000);
























//após clicar na primeira carta, clicar na segunda e verificar se elas são iguais. Se forem, elas devem permanecer viradas até o fim do jogo, se não forem, elas devem voltar a ficar viradas para baixo.
//´só que quando eu clico na segunda carta, eu acabo chamando a função escolher() dnv.. isso faz a segunda carta virar a primeira



// function pegarprimeiracarta(){
        
    

    
        // console.log(cartafrente1)
        // console.log(cartafrente2)
        // for (i=0;i<CartaCosta.length;i++){
        //     if (CartaCosta[i].classList.contains('escondido') && !CartaFrente[i].classList.contains('acertou')){
        //         // Agr vou pegar a carta que eu cliquei pelo id dela. Cada carta eu coloquei um id diferente, variando de 1 ate 7
        //         cartafrente1 = CartaFrente[i].id;
        //         console.log(cartafrente1)
        //         // console.log(cartafrente1)
        //         // console.log(i)
        //         cartacosta1 = CartaCosta[i];
        //         // console.log(cartacosta1)
        //         // console.log(cartafrente1);
        //         // console.log(cartacosta1);
        //         break
                
        
        //     }
        // }
    
    
// }




// function verificarcartas(){
   
//     console.log(cartafrente1)
//     for (i=0;i<CartaCosta.length;i++){
//         if (cartacosta1 !== CartaCosta[i] ){
//             cartafrente2 = CartaFrente[i];
//             break
    //         if(cartafrente1 !== cartafrente2){
    //             cartacosta1.classList.remove('escondido')
    //             cartacosta2.classList.remove('escondido')
    //         }
    //         else{
    //             cartafrente1.classList.add('acertou')
    //             cartafrente2.classList.add('acertou')

    //         }
    //     }
    //     // console.log(CartaCosta[i])
//     }

//     }
