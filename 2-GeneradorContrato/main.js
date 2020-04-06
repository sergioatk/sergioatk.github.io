const $botonGenerar  = document.querySelector('#boton-generar');
const $resultado = document.querySelector('#resultado');
const $divCargando = document.querySelector('#cargando');


$botonGenerar.onclick = () => {
    event.preventDefault();



    const $locador = document.querySelector('#locador').value;
    const $dniLocador = document.querySelector('#dni-locador').value;

    const $locatario = document.querySelector('#locatario').value;
    const $dniLocatario = document.querySelector('#dni-locatario').value;

    const $destino = document.querySelector('#destino').value;
    const $duracion = document.querySelector('#duracion').value;
    const $ubicacion = document.querySelector('#ubicacion').value;
    
    
    const locadorResultado = document.querySelector('#locador-body');
    locadorResultado.textContent = $locador;
    const dniLocadorBody = document.querySelector('#dni-locador-body');
    dniLocadorBody.textContent = $dniLocador;

    const locatarioResultado = document.querySelector('#locatario-body');
    locatarioResultado.textContent = $locatario;
    const dniLocatarioBody = document.querySelector('#dni-locatario-body');
    dniLocatarioBody.textContent = $dniLocatario

    const destinoResultado = document.querySelector('#destino-body');
    destinoResultado.textContent = $destino;

    const ubicacionResultado = document.querySelector('#ubicacion-body');
    ubicacionResultado.textContent = $ubicacion;

    const duracionResultado = document.querySelector('#duracion-body');
    duracionResultado.textContent = $duracion;

    $divCargando.classList.remove('oculto')

    setTimeout(() => {
        $resultado.classList.remove('oculto');
        $divCargando.classList.add('oculto')
    }, 2500)
}