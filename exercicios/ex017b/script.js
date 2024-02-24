function gtabuada() {
    let num = document.getElementById('txtnum').value
    let tab = document.getElementById('seltab')

    if (num.length == 0) {
        alert('Opa, não foi possível gerar a tabuada.\nPor favor, informe um número')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}