const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const img = document.querySelector('#imagem')

corpo.style.backgroundColor = '#f484ba'
corpo.style.color = '#fff'

titulo.textContent = 'Adicionando elementos via JS'

container.style.width = '94%'
container.style.margin = '0 auto'
container.style.backgroundColor = '#090000'

if (img) {
    img.style.width = '50%'
}

let UC = '<h2>Curso dev com ia - novidade!!!<h2>'
container.innerHTML += UC

divImg.innerHTML +=img;
