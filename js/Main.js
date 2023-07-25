let detalles = document.getElementsByClassName('mas');
let contenedor = document.getElementById('detalleLogro')

for (detalle of detalles){
    detalle.addEventListener('click' , llamar)
}

    
function llamar(){
    contenedor.classList.toggle('active');
}







