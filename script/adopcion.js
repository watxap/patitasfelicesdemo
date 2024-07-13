const mascotas = [
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
    {
        nombre: 'Rex',
        edad: '2 años',
        raza: 'Labrador',
        sexo: 'Macho',
        tipo: 'Perro',
        edadCategoria: 'Adulto',
        ubicacion: 'Gral. San Martín',
        imagen: '../multimedia/img/foto-labrador.jpg'
    },
    {
        nombre: 'Luna',
        edad: '1 año',
        raza: 'Siamés',
        sexo: 'Hembra',
        tipo: 'Gato',
        edadCategoria: 'Cachorro',
        ubicacion: 'Vicente López',
        imagen: '../multimedia/img/foto-siames.jpg'
    },
];

const galeria = document.getElementById('galeria');
const paginationTop = document.getElementById('pagination');
const itemsPerPage = 12;
let currentPage = 1;

function mostrarMascotas(filtradas) {
    galeria.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const mascotasPagina = filtradas.slice(startIndex, endIndex);

    mascotasPagina.forEach(mascota => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.innerHTML = `
            <div class="card col">
                <img src='${mascota.imagen}' alt='${mascota.nombre}' class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${mascota.nombre}</h5>
                    <div class="div-card-txt">
                        <p class="card-text">Tipo: ${mascota.tipo}</p>
                        <p class="card-text">Edad: ${mascota.edad}</p>
                        <p class="card-text">Raza: ${mascota.raza}</p>
                        <p class="card-text">Sexo: ${mascota.sexo}</p>
                        <p class="card-text">
                            <div style="display: flex; align-items: center; justify-content: center; min-width: 200px; max-width: 200px; min-height: 50px; max-height: 50px;">
                                <div style="width: fit-content; text-align: center; margin: 0.2rem;">
                                    <img src="../multimedia/img/mapa.png" style="width: 2rem !important;" alt="map">
                                </div>
                                <div style="width: 80%; text-align: center; text-transform: uppercase;">
                                    ${mascota.ubicacion}
                                </div>
                            </div>
                        </p>
                    </div>
                    <a href="#" class="btn btn-primary">+ INFORMACIÓN</a>
                </div>
            </div>
        `;
        galeria.appendChild(tarjeta);
    });
}

function filtrarMascotas() {
    const tipo = document.getElementById('tipo').value;
    const edad = document.getElementById('edad').value;

    const filtradas = mascotas.filter(mascota => {
        return (tipo === 'todos' || mascota.tipo === tipo) &&
            (edad === 'todas' || mascota.edadCategoria === edad);
    });

    if (filtradas.length === 0) {
        const noResultsModal = new bootstrap.Modal(document.getElementById('noResultsModal'), {});
        noResultsModal.show();
        document.getElementById('tipo').value = 'todos';
        document.getElementById('edad').value = 'todas';
        currentPage = 1;
        mostrarMascotas(mascotas);
        setupPagination(mascotas.length);
    } else {
        mostrarMascotas(filtradas);
        setupPagination(filtradas.length);
    }
}

function setupPagination(totalItems) {
    paginationTop.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            filtrarMascotas();
        });
        paginationTop.appendChild(pageItem);
    }
}

document.getElementById('tipo').addEventListener('change', () => {
    currentPage = 1;
    filtrarMascotas();
});
document.getElementById('edad').addEventListener('change', () => {
    currentPage = 1;
    filtrarMascotas();
});

document.addEventListener('DOMContentLoaded', () => {
    filtrarMascotas();
});

/*
    FireBase
*/
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHLjLA9787HaA6HKFxkkKekZhK0GbUvyg",
    authDomain: "pleduvl.firebaseapp.com",
    projectId: "pleduvl",
    storageBucket: "pleduvl.appspot.com",
    messagingSenderId: "3027016492",
    appId: "1:3027016492:web:ebd5fca3fc9e49bf216a89",
    measurementId: "G-E1Y0PE98LH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Función para agregar mascotas a la base de datos
function agregarMascota(mascota) {
    firebase.database().ref('mascotas').push(mascota, (error) => {
      if (error) {
        console.error('Error al agregar la mascota:', error);
      } else {
        console.log('Mascota agregada exitosamente:', mascota.nombre);
      }
    });
  }
  
  // Manejo del formulario pop-up
  document.getElementById('addPetButton').addEventListener('click', () => {
    document.getElementById('popupForm').style.display = 'flex';
  });
  
  document.getElementById('closePopupForm').addEventListener('click', () => {
    document.getElementById('popupForm').style.display = 'none';
  });
  
  document.getElementById('confirmButton').addEventListener('click', () => {
    const mascota = {
      nombre: document.getElementById('nombre').value,
      edad: document.getElementById('edad').value,
      raza: document.getElementById('raza').value,
      sexo: document.getElementById('sexo').value,
      tipo: document.getElementById('tipo').value,
      edadCategoria: document.getElementById('edadCategoria').value,
      ubicacion: document.getElementById('ubicacion').value,
      imagen: document.getElementById('imagen').value
    };
  
    agregarMascota(mascota);
  
    // Cerrar el formulario pop-up
    document.getElementById('popupForm').style.display = 'none';
    // Limpiar el formulario
    document.getElementById('addPetForm').reset();
  });