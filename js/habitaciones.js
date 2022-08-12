class Habitaciones {
    constructor(tipo, descripcion, precio, img) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
    }
}

const habitacion1 = new Habitaciones ('Standard Room.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos tenetur placeat eum quod rem quae fugiat perspiciatis qui maiores, architecto amet perferendis facilis ducimus porro! Voluptates impedit est minima ab odio, consequuntur id enim accusamus, fugiat, quasi labore! In.', 1200, './images/img1.jpg'); 
const habitacion2 = new Habitaciones ('Superior Room.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos tenetur placeat eum quod rem quae fugiat perspiciatis qui maiores, architecto amet perferendis facilis ducimus porro! Voluptates impedit est minima ab odio, consequuntur id enim accusamus, fugiat, quasi labore! In.', 1800, './images/img2.jpg'); 
const habitacion3 = new Habitaciones ('Premium Room.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos tenetur placeat eum quod rem quae fugiat perspiciatis qui maiores, architecto amet perferendis facilis ducimus porro! Voluptates impedit est minima ab odio, consequuntur id enim accusamus, fugiat, quasi labore! In.', 2500, './images/img3.jpg'); 
const habitacion4 = new Habitaciones ('Luxury Room.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos tenetur placeat eum quod rem quae fugiat perspiciatis qui maiores, architecto amet perferendis facilis ducimus porro! Voluptates impedit est minima ab odio, consequuntur id enim accusamus, fugiat, quasi labore! In.', 2800, './images/img4.jpg'); 

const habitaciones = [];

habitaciones.push(habitacion1);
habitaciones.push(habitacion2);
habitaciones.push(habitacion3);
habitaciones.push(habitacion4);

function mostrarHabitaciones (habitaciones) {
    const contenedorReservas = document.getElementById('rooms-container');
    contenedorReservas.innerHTML = '';

    habitaciones.forEach(habitacion => {
        const divHabitacion = document.createElement('article')
        const divHabitacionImg = document.createElement('div');
        const divHabitacionText = document.createElement('div');

        
        divHabitacion.classList.add('room');
        divHabitacionImg.classList.add('room-image');
        divHabitacionText.classList.add('room-text');
        divHabitacion.appendChild(divHabitacionImg);
        divHabitacion.appendChild(divHabitacionText);
        divHabitacionImg.innerHTML = `
        <img src='${habitacion.img}'>
        `;
        divHabitacionText.innerHTML = `
        <h3>${habitacion.tipo}</h3>
        <p>${habitacion.descripcion}</p>
        <span>$ ${habitacion.precio} /Night</span>
        `;
        const btnAgregarReserva = document.createElement('button');
        btnAgregarReserva.innerText =  ('Reservar');
        btnAgregarReserva.setAttribute('id','btn');
        btnAgregarReserva.addEventListener('click', () =>{
            
            const modal = document.getElementById ('modal');
            const closeModal = document.getElementById ('modal-close');
            modal.classList.add('modal--mostrar');
            closeModal.addEventListener('click', (e) =>{
                e.preventDefault();
                modal.classList.remove('modal--mostrar');
            });
        })
        divHabitacionText.appendChild(btnAgregarReserva);
        
        contenedorReservas.appendChild(divHabitacion);
    });
}
mostrarHabitaciones(habitaciones);




