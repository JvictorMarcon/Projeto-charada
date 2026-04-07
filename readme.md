# 🎲 Gerador de Charadas Interativo

![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-em%20produ%C3%A7%C3%A3o-green)

Um jogo de adivinhação dinâmico e divertido que desafia o usuário com charadas aleatórias. O projeto utiliza uma API externa para buscar o conteúdo e apresenta uma interface moderna com efeitos 3D.

---

## 🔗 Links do Projeto

* **Deploy (Vercel):** [https://projetocharada-black.vercel.app/](https://projetocharada-black.vercel.app/)
* **Repositório:** [https://github.com/JvictorMarcon/Projeto-charada.git](https://github.com/JvictorMarcon/Projeto-charada.git)

---

## 🚀 Funcionalidades

- **Cartões 3D:** Sistema de "Flashcard" onde a pergunta está na frente e a resposta no verso, com animação de giro.
- **Validação de Resposta:** O sistema verifica se o usuário digitou a resposta correta antes de permitir a visualização ou validar o ponto.
- **Sistema de Pontuação:** Contador em tempo real que soma pontos a cada acerto do jogador.
- **Tratamento de Texto:** A lógica ignora espaços inúteis e não diferencia letras maiúsculas de minúsculas (Case Insensitive).
- **Consumo de API:** Integração com backend assíncrono para garantir que as charadas nunca se repitam em sequência.
- **Bloqueio de Tentativas:** Após acertar, o sistema trava o input para evitar múltiplos pontos na mesma pergunta, forçando o início de uma nova rodada.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **Tailwind CSS:** Estilização responsiva e animações 3D (Perspective/Rotate).
* **JavaScript (ES6+):** Manipulação de DOM, Fetch API e lógica do jogo.
* **Vercel:** Hospedagem e Deploy contínuo.

---

## 📦 Como Clonar e Rodar Localmente

Se desejar contribuir ou estudar o código, siga os passos:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/JvictorMarcon/Projeto-charada.git](https://github.com/JvictorMarcon/Projeto-charada.git)