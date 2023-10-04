const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    botao.classList.add("selecionado");

    desselecionarPersonagem();
    const personagem = personagens[indice];
    personagem.classList.add("selecionado");
  })
})

