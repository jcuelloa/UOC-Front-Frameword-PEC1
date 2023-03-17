const container = document.querySelector('.container');
const asientos = document.querySelectorAll('.row .asiento:not(.ocupado)');
const totalAsientos = document.getElementById('totalAsientos');
const total = document.getElementById('total');
const peliculaSeleccionada = document.getElementById('movie');

let ticketPrecio = +peliculaSeleccionada.value;

populateUI();


//Guardar en disco el indice de la peli seleccionada y su precio
function setMovieData(peliIndex, peliPrecio){
    localStorage.setItem('indicePeliSeleccionada',peliIndex);
    localStorage.setItem('peliPrecio',peliPrecio);

}


//Actualizamos el total asientos seleccionados y el precio
function actualizarTotalAsientosPrecio(){
    const asientosSeleccionados = document.querySelectorAll('.row .asiento.seleccionado');

    //Creamos un array son los indices de los asientos seleccionados y lo guardamos en disco
    const asientosIndex = [...asientosSeleccionados].map(asiento => 
        [...asientos].indexOf(asiento));
    //console.log(asientosIndex);    
    localStorage.setItem('asientosSeleccionados',JSON.stringify(asientosIndex));    

    
    const numAsientosSeleccionados = asientosSeleccionados.length;
    
    totalAsientos.innerText = numAsientosSeleccionados;
    total.innerText = numAsientosSeleccionados*ticketPrecio;

}

// Obtener datos de localStore
function populateUI (){
    const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));

    //Marcamos los asientos guardados en disco
    if (asientosSeleccionados !==null && asientosSeleccionados.length > 0){
        asientos.forEach((asiento, index) => {
            if(asientosSeleccionados.indexOf(index) > -1){
                asiento.classList.add('seleccionado');
            }

        });

    } 

    //Seleccionamos la pelicula guardada en disco
    const indicePeliculaSeleccionada = localStorage.getItem('indicePeliSeleccionada');
    if (indicePeliculaSeleccionada !== null){
        peliculaSeleccionada.selectedIndex = indicePeliculaSeleccionada;
    }



}


// Evento - Cambiamos la selección de pelicula
peliculaSeleccionada.addEventListener('change', e => {
    ticketPrecio = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    actualizarTotalAsientosPrecio();
});


// Evento - Click en asiento
container.addEventListener('click', (e)=>{
    if (e.target.classList.contains('asiento') &&
        !e.target.classList.contains('ocupado')
    ){
        e.target.classList.toggle('seleccionado');
    }

    actualizarTotalAsientosPrecio();
    
});


// Cuando cargamos la pagina por primera vez, sin hacer click en nada, llamamos
// a la funcion para actualizat el "carrito"
actualizarTotalAsientosPrecio();