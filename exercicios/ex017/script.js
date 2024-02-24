function gtabuada() {
    let num = document.getElementById('txtnum').value
    let tab = document.getElementById('seltab')
    
    if (num.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }

    } 
    
    



    // while (c <=10) {
    //     let item = document.createElement('option')
    //     item.text = `${num} x ${c} = ${num*c}`
    //     tab.appendChild(item)
    //     c++
    // }

}