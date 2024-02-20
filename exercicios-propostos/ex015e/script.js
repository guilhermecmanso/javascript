function contar() {
    var ini = document.querySelector('input#txtini').value
    var fim = document.querySelector('input#txtfim').value
    var passo = document.getElementById('txtp').value
    var result = document.querySelector('div#result')

    if (ini.length == 0 || fim.length == 0) {
        result.innerHTML = 'Impossível calcular! Verifique os dados.'
        alert('Você esqueceu algum dado! \nVerifique e tente novamente')
    } else {
        if (passo <= 0) {
        alert('Não é possível calcular com Passo 0. \nConsiderando Passo 1')
        passo = 1
        }   else {
            
        
        }
    }
}