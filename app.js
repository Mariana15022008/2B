function criarCartao(categoria, pergunta, resposta){
console.log(categoria, pergunta, resposta);
}

function criarCartao(categoria, pergunta, resposta){
    let container= document.getElementById('container');
    let Cartao= document.createElement('article')
    Cartao.className = 'cartao'
    Cartao.innerHTML =` '<div class="cartao_conteudo>
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
    <p>${pergunta}</p>
  </div>
  <div class=" cartao_conteudo_resposta">
    <p>${resposta}
    </p>
 </div>
 </div>`
 container.appendChild(Cartao)
}