// const $tablero = document.querySelector('#tablero');
// const $slots = $tablero.querySelectorAll('.cuadro');
// const $botonReplay = document.querySelector('#replay');
// const $botonAyuda = document.querySelector('#ayuda');
// const $cartelGanaste = document.querySelector('#cartel-ganaste');
// const cartasDeJuego = ['azul', 'azul', 'naranja', 'naranja',
//  'dorado', 'dorado', 'violeta', 'violeta'];
// let score = document.querySelector('.score').querySelector('strong');
// let round = 0;
// score.textContent = '0'
// let seleccion = [];
// let cartasMezcladas = mezclarCartas(cartasDeJuego);
// let cuadrosRestantes;

// armarTablero($slots, cartasMezcladas);
// manejarEventos($tablero);

// function armarTablero(espaciosTablero, array) {

//     array.forEach(function(carta, i){    

//         espaciosTablero[i].className = ''; // esto lo reinicia en caso que ya esté armado
//         espaciosTablero[i].classList.add('cuadro', 'cell'); 
//         espaciosTablero[i].textContent = ''

//         espaciosTablero[i].classList.add(carta);  
//         espaciosTablero[i].style.backgroundColor = 'black';
//     })  
// }

// function manejarEventos($tablero) {
    
//     $tablero.onclick = function(e) {
//         const $cuadro = e.target;     
//         if ($cuadro.classList.contains('cuadro')) {      
//             manejarClickUsuario($cuadro);    
//         };
//     }
// }

// function manejarClickUsuario(cuadroElegido) {
//     seleccion.push(cuadroElegido); 
//     evaluarInputUsuario(seleccion);      
// }

// function evaluarInputUsuario(array) {
//     darColor(array, '');
//     if (array.length === 2) {   

//         if (array[0].id === array[1].id) {
//           quitarColor(array, 'black');
//             seleccion = [];   
//             return
//         }
        
//         if (array[0].className != array[1].className) {
//             quitarColor(array, 'black');
//             seleccion = [];
//             round++;
//             score.textContent = round.toString();
//             evaluarFinDeJuego()
//             return
//         }
        
//         if (array[0].className === array[1].className) {
//             round++;
//             score.textContent = round.toString();
//             array.forEach(function(carta, i){
//                 array[i].className = '';
//                 array[i].classList.add('cell', 'completo');  
//                // array[i].classList.add('cuadro', 'cell', 'completo');  
//                 array[i].textContent = 'OK'  
//                 evaluarFinDeJuego();
//             })  

//             seleccion = [];
//         }      
//     }
// }

// function darColor(array, color) {
    
//     array.forEach(function(carta, i) {
//         array[i].style.backgroundColor = color;
//     })
// }

// function quitarColor (array, color) {

//     setTimeout(function() {
//              array.forEach(function(carta, i) {
//                  array[i].style.backgroundColor = color;
//              }) 
//          }, 350)  
//  }

// $botonReplay.onclick = function() {
//     seleccion = [];
//     round = 0;;
//     score.textContent = round.toString();
//     $cartelGanaste.style.display = 'none';
//     cartasMezcladas = mezclarCartas(cartasDeJuego);
//     armarTablero($slots, cartasMezcladas);
    
// } 



// $botonAyuda.onclick = function() {
//     cuadrosRestantes = document.querySelectorAll('.cuadro');
//     for (let i = 0; i < cuadrosRestantes.length; i++) {
//           cuadrosRestantes[i].style.backgroundColor = '';
//     }

//     setTimeout(function() {
//         for (let i = 0; i < cuadrosRestantes.length; i++) {
//             cuadrosRestantes[i].style.backgroundColor = 'black';
//         }
//     }, 200);
// }

// function evaluarFinDeJuego() {
//     if (document.querySelectorAll('.cuadro').length === 0) {
//         $cartelGanaste.style.display = 'inline';
//     }
// }



// function mezclarCartas(array) {

//     for (let i = array.length - 1 ; i > 0; i--) {
//         const j = Math.floor(Math.random() * i)
//         const temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }

//     return array;
// }


