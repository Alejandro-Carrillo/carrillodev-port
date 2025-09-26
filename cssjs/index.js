let btnMenu = document.getElementById('btn-menu').addEventListener('click', verMenu);
let items = document.querySelectorAll('.item-menu');
let menu = document.getElementById('menu');
let btnUp = document.getElementById('btnup');

function verMenu() {
    menu.classList.toggle('menu-activo');
};

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', verMenu);
};


/* --------------------- */
window.addEventListener('scroll', defineFunc);

function defineFunc() {
    verBarra();
};

function verBarra() {
    let topScroll = document.documentElement.scrollTop;
    let title = document.getElementById('title-header');
    let barTop = document.getElementById('bar');
    let topTitle = title.offsetTop;
    if (topTitle - 30 < topScroll) {
        barTop.classList.add('bar-visible');
        btnUp.classList.add('btn-up-activo');
    } else {
        barTop.classList.remove('bar-visible');
        btnUp.classList.remove('btn-up-activo');
    }
};

/* --------------------- */
const opciones = {
    root: null, 
    threshold: 0.5
};


const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('cards-visible');
        } else {
            entrada.target.classList.remove('cards-visible');
        }
    });
}, opciones);


const cards = document.querySelectorAll('.cards');
cards.forEach(card => {
    observer.observe(card);
});


/* --------------------- */
window.onload = function () {
    let over = document.getElementById('over');
    over.style.display = 'none';
};

let comp = document.getElementById('share');
const shareData = {
    title: 'Alejandro Carrillo',
    text: 'Portafolio | Programador de software',
    url: 'https://carrillodev.com',
};
if (navigator.share) {
    comp.addEventListener('click', compart);
};


function compart() {
    navigator.share(shareData)
        .then(() => alert('Gracias por compartir mi portafolio.'))
        .catch(() => console.log(""))
};

//------------------ copiar mail -------------------

const emailCopy = document.querySelectorAll('.btn-copy-email');
for (let e = 0; e < emailCopy.length; e++) {
    emailCopy[e].addEventListener('click', () => {
        const texto = "alejandro@carrillodev.com";
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("E-mail Copiado!");
            })
            .catch((error) => {
                console.log("Error al copiar e-mail", error);
            });
    })

};

//------------------ envio de formulario con AppScript -------------------

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxeDwxflMV9q7p9ObPoFJL1G9AmGtkFXFRu-jvzvghI9liYDGpbDD_016iRWDAhpps9OA/exec';
    let nameForm = document.getElementById('name-form').value;
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
        });
    alert('¡Apreciado cliente ' + nameForm + ' en menos de 12 horas estaré comunicándome con usted. \nGracias por preferirme.');
    this.reset();
})
    /* .catch(error => {
        alert('Ocurrió un error al enviar el mensaje.');
        console.error('Error:', error);
    }); */



