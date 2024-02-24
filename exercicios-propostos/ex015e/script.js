function contar() {
    let ini = document.querySelector('input#txtini').value
    let fim = document.querySelector('input#txtfim').value
    let passo = document.getElementById('txtp').value
    let result = document.querySelector('div#result')

    result.innerHTML = 'Preparando a contagem...'
    if (ini.length == 0 || fim.length == 0) {
        result.innerHTML = 'Impossível calcular! Verifique os dados.'
        alert('Você esqueceu algum dado! \nVerifique e tente novamente')
    } else {
        if (passo <= 0) {
        alert('Não é possível calcular com Passo 0. \nConsiderando Passo 1')
        passo = 1
        }
        result.innerHTML = 'Contando: <br>'
        if (Number(ini) < Number(fim)){
            for (let c = Number(ini); c <= Number(fim); c += Number(passo)) {
                result.innerHTML += `${c} \u{1F449}`
            } result.innerHTML += '🏴'

        }
        if (Number(ini) > Number(fim)) {
            for (let c = Number(ini); c >= Number(fim); c -= Number(passo)){
                result.innerHTML += `${c} \u{1F449}`
            } result.innerHTML += '🏴'

        }
        
    }
    
} 