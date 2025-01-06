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
window.onload = function () {
    let over = document.getElementById('over');
    over.style.display = 'none';
};
let comp = document.getElementById('share');
const shareData = {
    title: 'Alejandro Carrillo',
    text: 'Portafolio web | Programador Front-end',
    url: 'https://carrillodev.com',
};
if (navigator.share) {
    comp.addEventListener('click', compart);
};
function compart() {
    navigator.share(shareData)
        .then(() => alert('Gracias por compartir mi portafolio'))
        .catch(() => console.log(""))
};
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



