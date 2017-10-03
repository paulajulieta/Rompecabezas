// Representación de la grilla. Cada nro representa a una pieza.
// El 9 es la posición vacía
var grilla = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Ac&aacute; vamos a ir guardando la posición vacía
var posicionVacia = {
  fila:2,
  columna:2
};
var grillaOrdenada = [ // para comparar si ganamos o que
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Esta función va a chequear si el Rompecabezas est&aacute; en la posición ganadora
function chequearSiGano(){
  return grillaGanadora();
}
function grillaGanadora(){
var cantidadFilas = grilla.length;
var cantidadColumnas= grilla[0].length;

var contadorPosiciones=0;
var posicionActual= 0;
  
for(var fila = 0; fila <cantidadFilas.length; fila++){ //filas: i
     for(var columna = 0; columna <cantidadColumnas.length; columna++){//columnas:j
     posicionActual=grilla[fila][columna]
      // si la posicionActual es menor al contador de posiciones ()
      if (posicionActual< contadorPosiciones){
       return false;
       contadorPosiciones= posicionActual;  //?
      } // llave if
     } //for anidado
 } //primer for    
     //else 
     return true;
}// llave funcion
// la hacen los alumnos, pueden mostrar el cartel como prefieran. Pero es importante que usen
// esta función
function mostrarCartelGanador(){
  if (grillaGanadora()=="false" ){
  alert ("¡Lo siento, pero no has ganado. Vuelve a intentarlo!");
   }//llave for
  else
    alert("¡Ganaste, un pequeño baile de victoria es recomendado!" );
}


// Intercambia posiciones grilla y en el DOM
function intercambiarPosiciones(fila1, columna1, fila2, columna2){
pieza1= grilla[1][1]; 
pieza2= grilla[2][2]; // pieza vacia

grilla[1][1]=pieza2;
grilla[2][2]=pieza1; // las de arriba las cambio

//modificando el DOM

var elementoPieza1 = document.getElementById("i8"+pieza1);// no se cual es [1][1] por lo que no se a cual llamar
var elementoPieza2 = document.getElementById("i9"+pieza2);

//var padre = elementoPieza1.parentNode; // luke, soy tu padre. (es juego pero aparece como null)
//clonar los elementos de arriba
var clonElementoPieza1 = elementoPieza1.cloneNode(); //(sale como null)
var clonElementoPieza2= elementoPieza2.cloneNode();
//remplazo a los clones
padre.replaceChild(clonElementoPieza1, clonElementoPieza2);



}//llave funcion


// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila,nuevaColumna){
pieza1= grilla[2][2];
}


// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna){ //avisar si la pieza puede moverse dentro del tablero
// if ¿posicionvacia? esta dentro de la grilla{ devolver true } else false

}//llave funcion

// Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando
// su posición con otro elemento
function moverEnDireccion(direccion){

  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Intercambia pieza blanca con la pieza que está arriba suyo
  if(direccion == 40){
    nuevaFilaPiezaVacia = posicionVacia.fila-1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;
  }
  // Intercambia pieza blanca con la pieza que está abajo suyo
  else if (direccion == 38) {
    nuevaFilaPiezaVacia = posicionVacia.fila+1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;

  }
  // Intercambia pieza blanca con la pieza que está a su izq
  else if (direccion == 39) {
    // Completar .. ?
    nuevaFilaPiezaVacia = posicionVacia.fila;
    nuevaColumnaPiezaVacia = posicionVacia.columna-1;
  }
  // Intercambia pieza blanca con la pieza que está a su der
  else if (direccion == 37) {
    // Completar
    nuevaFilaPiezaVacia = posicionVacia.fila;
    nuevaColumnaPiezaVacia = posicionVacia.columna+1; 
  }

  // Se chequea si la nueva posición es válida, si lo es, se intercambia 
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    intercambiarPosiciones(posicionVacia.fila, posicionVacia.columna,
    nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }

}



// Extras, ya vienen dadas

function mezclarPiezas(veces){
  if(veces<=0){return;}
  var direcciones = [40, 38, 39, 37];
  var direccion = direcciones[Math.floor(Math.random()*direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function(){
    mezclarPiezas(veces-1);
  },100);
}

function capturarTeclas(){
  document.body.onkeydown = (function(evento) {
    if(evento.which == 40 || evento.which == 38 || evento.which == 39 || evento.which == 37){
      moverEnDireccion(evento.which);

      var gano = chequearSiGano();
      if(gano){
        setTimeout(function(){
          mostrarCartelGanador();  
        },500);
      } 
      evento.preventDefault();
    }
  })
}

function iniciar(){
  mezclarPiezas(60);
  capturarTeclas();
}


iniciar();