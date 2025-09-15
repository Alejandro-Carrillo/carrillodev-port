let btnMenu = document.getElementById('btn-menu').addEventListener('click', verMenu);
let items = document.querySelectorAll('.item-menu');
let menu = document.getElementById('menu');
let btnUp = document.getElementById('btnup');
<<<<<<< HEAD

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

=======
function verMenu() {
    menu.classList.toggle('menu-activo');
};
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', verMenu);
};
window.addEventListener('scroll', defineFunc);
function defineFunc() {
    verBarra();
};
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0
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
<<<<<<< HEAD


/* --------------------- */
=======
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0
window.onload = function () {
    let over = document.getElementById('over');
    over.style.display = 'none';
};
<<<<<<< HEAD

let comp = document.getElementById('share');
const shareData = {
    title: 'Alejandro Carrillo',
    text: 'Portafolio | Programador de Software',
=======
let comp = document.getElementById('share');
const shareData = {
    title: 'Alejandro Carrillo',
    text: 'Portafolio web | Programador Front-end',
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0
    url: 'https://carrillodev.com',
};
if (navigator.share) {
    comp.addEventListener('click', compart);
};
<<<<<<< HEAD


=======
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0
function compart() {
    navigator.share(shareData)
        .then(() => alert('Gracias por compartir mi portafolio'))
        .catch(() => console.log(""))
};
<<<<<<< HEAD

//------------------ copiar mail -------------------

=======
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0
const emailCopy = document.querySelectorAll('.btn-copy-email');
for (let e = 0; e < emailCopy.length; e++) {
    emailCopy[e].addEventListener('click', () => {
        const texto = "a.carrillodev@gmail.com";
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("E-mail Copiado!");
            })
            .catch((error) => {
                console.log("Error al copiar e-mail", error);
            });
    })

};

<<<<<<< HEAD
//------------------ envio de formulario con AppScript -------------------

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyqomZGHBmf3fLn1ivOJCFD8UC7dkeewYGovdNTP_Sj_B3CHMZdIw0MQjzBplZo19Wamw/exec';
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
        });
    alert('¡Mensaje enviado con éxito!');
    this.reset();
})
    .catch(error => {
        alert('Ocurrió un error al enviar el mensaje.');
        console.error('Error:', error);
    });

=======
>>>>>>> e120012e4f8394342acb73223be8decebc235ce0


