const abas = document.querySelectorAll(".aba");
abas.forEach(aba => {
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        else {
            selecionarAba(aba);
            selecionarinformacao(aba);
        }
    })
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");
}

function selecionarinformacao(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    const idElementoInfoAba = `info-${aba.id}`;
    const infoMostrar = document.getElementById(idElementoInfoAba);
    infoMostrar.classList.add("selecionado");
}