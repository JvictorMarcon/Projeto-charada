// capturando os elementos HTML
const cardInner = document.getElementById("card-inner")
const campoPergunta = document.getElementById("pergunta")
const campoResposta = document.getElementById("resposta")
const btnNova = document.getElementById("btn-nova")
const resposta_usuario = document.getElementById("resposta_usuario")
const btnConfirmar = document.getElementById("btn-confirmar")
const contador = document.getElementById("contador")
let charadaAtual = null
let pontos_usuario = 0


// Evento que faz o card girar
cardInner.addEventListener("click", () => {
    if (resposta_usuario.value.trim() === "") {
        alert("Coloque uma resposta antes de virar o card")
    }
    else if (resposta_usuario.value.trim().toLowerCase() === charadaAtual.resposta.trim().toLowerCase()) {
        cardInner.classList.toggle("[transform:rotateY(180deg)]")
    }
    else {

    }

})
// Evento que faz buscar outra charada
btnNova.addEventListener("click", buscarCharada)
// Evento que faz verificar a charada
btnConfirmar.addEventListener("click", verificarCharada)



// Função que irá buscar as charadas no backend
async function buscarCharada() {
    try {
        campoPergunta.textContent = "Buscando charada, espere um momento..."
        campoResposta.textContent = ""
        
        const url = "https://apicharadasbackend.vercel.app/charadas/random"
        const answerAPI = await fetch(url)
        const data = await answerAPI.json()
        charadaAtual = data
        campoPergunta.textContent = charadaAtual.pergunta
        campoResposta.textContent = charadaAtual.resposta



    } catch (erro) {
        campoPergunta.textContent = "Erro ao conectar com o servidor"
        console.error("Erro na busca", erro)
    }
}

// Função que pega a resposta do usuário e verifica se está correta ou não
function verificarCharada() {
    // Pegamos o que o usuário digitou
    const chute = resposta_usuario.value.trim()

    // Comparamos o chute com a resposta que guardamos lá no passo 2
    if (chute.toLowerCase() === charadaAtual.resposta.toLowerCase()) {
        alert("Acertou! 🎉")
        pontos_usuario += 1 
        contador.innerText = pontos_usuario
        buscarCharada()
    } else {
        alert("Errou!❌")
        buscarCharada()
    }
}



buscarCharada()