function verificar() {
    var date = new Date()
    var anoatual = date.getFullYear()
    var fano = document.querySelector('input#txtano')
    

    if (fano.value.length == 0 || anoatual <= Number(fano.value)) {
        alert('Não foi possível calcular com o ano informado!')
    } else {
        var idade = anoatual - Number(fano.value)

    }
    

}