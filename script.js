function simularCredito() {
    document.querySelector("#simular").scrollIntoView({ behavior: "smooth" });
}

function calcularSimulacao() {
    const valor = parseFloat(document.getElementById('valor').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);

    if (isNaN(valor) || isNaN(parcelas) || valor <= 0 || parcelas <= 0) {
        document.getElementById('resultado').innerText = "Preencha os campos corretamente!";
        return;
    }

    const taxa = 0.0185; // ✅ Taxa de 1,85% ao mês
    const parcela = (valor * taxa) / (1 - Math.pow(1 + taxa, -parcelas));

    document.getElementById('resultado').innerText = 
        `Valor da parcela: R$ ${parcela.toFixed(2)} em ${parcelas}x.`;
}

function enviarMensagem(e) {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
    document.getElementById('nomeContato').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}
