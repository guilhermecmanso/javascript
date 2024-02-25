function gtabuada() {
    var num = document.getElementById('numero').value
    var tab = document.getElementById('seltab')

    if (num.length == 0) {
        alert('Opa, impossível gerar a tabuada! \nDigite um número.')
        
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
console.log(`Tabuada de ${num} gerada!`)

}