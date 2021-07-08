window.onscroll = function () {
    if (document.documentElement.scrollTop > 420) {

        document.querySelector('.go-top-container').classList.add('show');

    } else if ((document.documentElement.scrollTop < 420)) {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


const maquina = document.getElementById('escribir');

const maquinaEscribir = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let cont = 0
    let escribir1 = setInterval(function () {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont === arrayCaracteres.length) {
            clearInterval(escribir1);

        }

    }, tiempo);

}

maquinaEscribir("Recetas y arte en la cocina", 150, maquina)
