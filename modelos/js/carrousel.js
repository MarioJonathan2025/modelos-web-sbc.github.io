const slider = document.querySelector('.slider'); /* esta imagen va a almacenar el contenedor de la simagenes */
const slide = document.querySelectorAll('.slide'); /* aqui seleccionamos los div de cada imagen y lo guardamos en la variable slide */
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0; /* variable con el indice actual cero, osea la primera imagen */
let interval; /* aqui guardaremos el intervalo de tiempo */

slide.forEach((_, index) => { /* segun el tutorial usaremos el indice de cada imagen */
    const dot = document.createElement('div'); /* aqui creamos un elemento div y guardado en la variable dot */
    dot.classList.add('dot'); /* creando clase dot */
    dotsContainer.appendChild(dot); /* agregando los puntitos al contenedor de los puntos??? */

    /* las lineas 9,10 y 11,  aqui los puntos lso creamos dinamiccamente desde javascript */
    /* 6- luego creamos la clase .dot en css */

    /* 9- ahora le daremos color a un circulo en la imagen que se proyecta */
    if (index === 0) {
        dot.classList.add('active'); /* 10- aqui agregamos una nueva clase active para luego crearla en css */
    }

    dot.setAttribute('data-index', index); /* a cada punto le creamos el atributo data index para relacionarlo con cada imagen */
    dot.addEventListener('click', () => {
        goToSlide(index); /* cada ves que se haga click en el punto, ira a esa imagen a traves de su indice */
    })
})

/* vamos a darle funciojn al boton derecho del slider */
function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`; /*  */
    updateDots();
}

function nextSlide() { /* funcion para que me adelante o lleve a la sgte imagen */ 
    currentIndex = (currentIndex + 1) % slide.length; /* sumar el indice actual a+1 y lo dividimos entre el numero de imagenes */
    updateSlider();
} 

function prevSlide() { /* funcion para que me adelante o lleve a la sgte imagen */ 
    currentIndex = (currentIndex - 1 + slide.length) % slide.length; /* sumar el indice actual a+1 y lo dividimos entre el numero de imagenes */
    updateSlider();
    /* 11- luego agremos la clase .nextSlider al boton derecho en html */
} 

/* 13- agregaremos animacion en el movimiento de imagen */

/* 14- creamos la funcion para usar los circulos pqeueños para ir a cualquier imagen */
function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    /* 15- luego vamos al condicional if de mas arriba */

    resetInteval();
}


/* 16- para actualizar el color de los punto en la iamgen correspondiente */
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => { /* seleccionando todo los puntos clase dots, para cada punto con su respectivo indice */
        dot.classList.toggle('active', index === currentIndex); /* podemos agregar la clase active que le da color a los puntos en lak imagen actual */
    })
}

/* 17- agregando animacion a los puntitos en clase .dot en css */


/* 18- para que el slider sea automaticamente */
function autoSlide() {
    nextSlide();
}

/* 19- para resetear el intervalo cuando se cambia de imagen manualmente antes de los X segundos (solo con los puntos*/
interval = setInterval(autoSlide, 3000);

function resetInteval() {
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000);
}

/* 20- para resetear el intervalo cuando se cambia de imagen manualmente antes de los X segundos (solo con los botones laterales*/
document.querySelector('.slider-container').addEventListener('click', resetInteval);