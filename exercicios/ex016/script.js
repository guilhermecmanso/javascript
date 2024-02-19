function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var result = document.querySelector('div#result')
    
    if (ini.value.length == 0 || fim.value.length == 0) {
        result.innerHTML = 'Não foi possível calcular!'
        alert('Dados incompletos!')
    } else { 
        result.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
            result.innerHTML += `${c} \u{1F449}`
        } result.innerHTML += '🏴'
        
        } else {
            for (let c = i; c >= f; c -= p) {
            result.innerHTML += `${c} \u{1F449}`
        } result.innerHTML += '🏴'
        
        } 
    } 
        

}
