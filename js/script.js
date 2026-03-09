// Seleciona todos os botões interativos do site
const botoes = document.querySelectorAll(
    ".faq-question, .hardware-question, .lang-question"
);

// Adiciona o evento de clique a cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // O conteúdo está sempre no elemento seguinte
        const conteudo = botao.nextElementSibling;

        // Mostra ou esconde o conteúdo
        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
        } else {
            conteudo.style.display = "block";
        }
    });
});
