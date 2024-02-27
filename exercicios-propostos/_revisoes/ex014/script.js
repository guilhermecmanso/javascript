function fhora() {
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    var img = document.getElementById('imagem')
    var box = document.getElementById('text')

    box.innerHTML = `Agora são <strong>${hora}h:${min}m</strong>`
    
    if (hora > 0 && hora < 6) {
        img.src = 'imagens/noite-png.png'
        document.body.style.backgroundColor = '#0C1719' 

    } else if (hora < 12) {
        img.src = 'imagens/manha-png.png'
        document.body.style.backgroundColor = '#C89138' 

    } else if (hora < 18) {
        img.src = 'imagens/tarde-png.png'
        document.body.style.backgroundColor = '#DF8B3A'
    } else {
        img.src = 'imagens/noite-png.png'
        document.body.style.backgroundColor = '#0C1719' 
    }
}