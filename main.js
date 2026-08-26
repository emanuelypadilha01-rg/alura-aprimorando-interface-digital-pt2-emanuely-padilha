const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    let curtiu = false; 

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        
        // Seleciona apenas o <span> dentro do botão clicado
        let contador = botao.querySelector("span");
        
        // Converte o texto atual para número
        let valorAtual = Number(contador.textContent);

        if (curtiu === false) {
            contador.textContent = valorAtual + 1;
            curtiu = true; 
            botao.classList.add("ativo"); // Opcional: para estilizar quando curtir
        } else {
            contador.textContent = valorAtual - 1;
            curtiu = false;
            botao.classList.remove("ativo"); // Opcional
        }        
    } 
});
