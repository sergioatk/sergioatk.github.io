console.log('hola');

const span = document.querySelector('span');
const h4 = document.querySelector('h4');

span.onclick = function() {
    console.log('hiciste click');
    h4.innerText = 'Opa';


}