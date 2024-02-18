function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var result = document.querySelector('div#result')

    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Não é possível calcular! \nFaltam dados!')
    } else { 
        result.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
            result.innerHTML += `${c} \u{1F449}`
        }
        
        } else {
            for (let c = i; c >= f; c -= p) {
            result.innerHTML += `${c} \u{1F449}`
        } 
        
        } 
    } result.innerHTML += '🏴'
        

}
