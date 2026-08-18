 const botoes =document.querySelectorAll("button");

    botoes.forEach(function(botao)) {
        let curtiu = false;
        botao.addEventListenner("click", botaoClicado);

        function botaoClicado(){
console.log("fui clicado");
let texto = botao.querySelectorAll("span");

if(curtiu===false){
    texto.textContent++;
    curtiu=true;
}else{
    texto.textContent--;
    curtiu=false;
}
        }
    };