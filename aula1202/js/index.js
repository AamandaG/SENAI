const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')
const subtitulo = document.querySelector('.subtitulo')
const divImg = document.querySelector('#divImg')

subtitulo.textContent = 'Curso dev com IA - novidade!!!'
corpo.style.backgroundColor = '#f484ba'
corpo.style.color = '#fff'
titulo.textContent = 'Adicionando elementos via JS'
container.style.width = '94%'
container.style.margin = '0 auto'
container.style.backgroundColor = '#be56c6'

let anuncio = "<h2>Curso dev com ia - novidade!!!</h2>"
container.innerHTML += anuncio
