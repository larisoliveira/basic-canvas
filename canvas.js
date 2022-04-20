const canvas = document.getElementById('canvas')

//Contexto da tela
const ctx = canvas.getContext('2d') //HTMLCanvasElement.getContext() é um método que retorna um contexto de desenho, onde renderizamos os gráficos. Ao fornecer '2d' como argumento, obtemos o contexto de renderização 2D da tela (existem outros contextos disponíveis, como webgl para um contexto de renderização tridimensional)

//Desenho

//Linha
// ctx.strokeStyle = 'black'  
// ctx.lineWidth = 5
// ctx.beginPath() //Inicia um novo caminho 
// ctx.moveTo(100, 50) //Move a linha para x=100, y=50
// ctx.lineTo(300, 150) //Desenha uma linha para x=300, y=150
// ctx.stroke() //Renderiza o caminho


//Quadrado
// ctx.fillStyle = 'blue'
// ctx.fillRect(100, 100, 30, 30) //(x, y, largura, altura)


//Animação
const size = 30 //Define o tamanho do quadrado
ctx.fillStyle = 'blue' //Adiciona cor ao quadrado

for (let x = 0; x < canvas.width; x += size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height) 
  ctx.fillRect(x, 50, size, size)
}

//Desacelerando a animação 
let x = 0
const id = setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(x, 50, size, size)
  x += size

  if (x >= canvas.width) {
    clearInterval(id)
  }
}, 200)