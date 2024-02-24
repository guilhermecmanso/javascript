function calcular() {
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let result = document.querySelector('div#result')

    if (ini.length == 0 || fim == 0) {
        alert('Opa, faltou algum dado! \nImpossível calcular!')
    } else {
        result.innerHTML = 'Contando: <br><br>'
        if (passo == 0) {
            alert('Não é possível calcular com Passo 0 \nConsiderando Passo 1')
            passo = 1
        }

        if (Number(ini) < Number(fim)) {
            for (let c = Number(ini); c <= Number(fim); c += Number(passo)) {
                result.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            for (let c = Number(ini); c >= Number(fim); c -= Number(passo)) {
                result.innerHTML += `${c} \u{1F449}`
            } 
        }
    } result.innerHTML += '🏴'
} 