const nombre = document.querySelector('.nombre');
const entrada = document.querySelector('.entrada');
const salida = document.querySelector('.salida');
const habitacion = document.querySelector('.habitacion');
const dni = document.querySelector('.dni');
const cantidadPersonas = document.querySelector('.cantidad-personas');
const botonAgregarReserva = document.querySelectorAll('.btn-agregar');

const listadoReservas = document.querySelector('.listado-reservas');

const local = window.localStorage;

botonAgregarReserva.forEach( boton =>
    boton.addEventListener('click', () => {
        swal({
            title: "Estamos procesando su reserva.",
            text: "Si ingresó todos los datos solicitados presione ok.",
            icon: "success",
            buttons: true,
            dangerMode: true,
            })
            .then((isConfirm) => {
            if (isConfirm) {
            
        swal("La reserva fue agregada exitosamente.", {
            icon: "success", 
            buttons: true,
            timer: 3000,
            timerProgressBar: true,
            }
            );
            
            let contacto = {
                id: Math.random(1,100),
                nombre: nombre.value,
                entrada: entrada.value,
                salida: salida.value,
                habitacion: habitacion.value,
                dni: dni.value,
                cantidadPersonas: cantidadPersonas.value,
            }

            if(nombre.value==''||entrada.value==''||salida.value==''||dni.value==''||habitacion.value==''||cantidadPersonas.value==''){
                swal('Por favor complete los datos que faltan.');

            }else{

                guardarReserva (local, contacto); 

            }
        
        
        } else {
          swal("La reserva no fue agregada!");
        }
    });
    }))


const guardarReserva = (local, contacto) => {
    local.setItem(contacto.id, JSON.stringify(contacto));
    window.location.reload();
}

const cargarReservas = (local, parentNode) => {
    let claves = Object.keys(local);
    for (clave of claves) {
        let contacto = JSON.parse(local.getItem(clave));
            crearReserva (parentNode, contacto, local);
    }
}


const crearReserva =  (parentNode, contacto, local) => {
    let divReserva = document.createElement('div');
    let nombreReserva = document.createElement('p');
    let entradaReserva = document.createElement('p');
    let salidaReserva = document.createElement('p');
    let habitacionReserva = document.createElement('p');
    let dniReserva = document.createElement('p');
    let cantidadPersonasReserva = document.createElement('p');
    let iconoReserva = document.createElement('i');

    
    nombreReserva.innerHTML = 'Nombre: ' + '<br>' + contacto.nombre;
    entradaReserva.innerHTML = 'Entrada: ' + '<br>' + contacto.entrada;
    salidaReserva.innerHTML = 'Salida: ' + '<br>' +  contacto.salida;
    habitacionReserva.innerHTML = 'Habitación: ' + '<br>' + contacto.habitacion;
    dniReserva.innerHTML = 'Dni: ' + '<br>' + contacto.dni;
    cantidadPersonasReserva.innerHTML = 'Personas: ' + '<br>' + contacto.cantidadPersonas;
    iconoReserva.innerHTML = '  X'
    
    iconoReserva.onclick = () => {
        swal({
            title: "Está seguro de eliminar la reserva.?",
            text: "Si la elimina no podrá recuperar los datos.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                
                swal("La reserva fue eliminada.", {
                    icon: "success", 
                    buttons: true,
                    timer: 3000,
                    timerProgressBar: true,
                }
                );
                
                local.removeItem(contacto.id);
                window.location.reload();
            } else {
              swal("La reserva no fue eliminada!");
            }
          });
        
    }
    
    divReserva.classList.add('reserva');
    
    divReserva.appendChild(nombreReserva);
    divReserva.appendChild(entradaReserva);
    divReserva.appendChild(salidaReserva);
    divReserva.appendChild(habitacionReserva);
    divReserva.appendChild(dniReserva);
    divReserva.appendChild(cantidadPersonasReserva);
    divReserva.appendChild(iconoReserva);
    
    parentNode.appendChild(divReserva);
}


const buscarReserva = () => {
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".reserva").forEach(reserva =>{
  
            reserva.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?reserva.classList.remove("filtro") :reserva.classList.add("filtro");
        })
    }
  })
}

cargarReservas(local, listadoReservas);

