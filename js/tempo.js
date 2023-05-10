const key = "4c49dd9cd5dacf45e44f03b5490070e8"
const botao = document.querySelector('.botao-busca')
const titulo = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const image = document.querySelector('.img-previsao')
const descricao = document.querySelector('.texto-previsao')
const umidade = document.querySelector('.umidade')

 botao.addEventListener('click',cliqueBotao)

function cliqueBotao(){


    const cidade = document.querySelector('.input-cidade').value

 buscarCidade(cidade)

}
// segunda
async function buscarCidade(cidade){
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

   console.log(dados)
   mostraNaTela(dados)
}

// Terceira parte e ultima|

 function mostraNaTela(dados){
  titulo.innerHTML = "Tempo em: " +dados.name
  temperatura.innerHTML = Math.ceil(dados.main.temp) + "ºC"
  image.src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

  descricao.innerHTML = dados.weather[0].description
  umidade.innerHTML = "Umidade: " + dados.main.humidity + "%"

 }