let pecaSelecionada = null;

function moverPeca(quadrado) {
    if (pecaSelecionada === null) {
        if (quadrado.innerHTML.trim() !== '') {
            pecaSelecionada = quadrado;
        }
    } else {
        if (pecaSelecionada === quadrado) {
            pecaSelecionada = null;
        } else {
            const isVazio = quadrado.innerHTML.trim() === '';
            if (isVazio || pecaSelecionada.innerHTML.trim() === '') {
                quadrado.innerHTML = pecaSelecionada.innerHTML;
                pecaSelecionada.innerHTML = '';
                pecaSelecionada = null;
            } else {
                const temp = pecaSelecionada.innerHTML;
                pecaSelecionada.innerHTML = quadrado.innerHTML;
                quadrado.innerHTML = temp;
                pecaSelecionada = null;
            }
        }
    }
}