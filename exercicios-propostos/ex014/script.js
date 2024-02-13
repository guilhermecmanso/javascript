function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours
    msg.innerHTML = `Agora são <strong>${hora} horas</strong> .`

    if (hora >=0 && hora < 12) {
        img.src = 'imagens/manha-png.png'
        document.body.style.background = '#c99b50'
    } else if (hora >=12 && hora < 18) {

        img.src = 'imagens/tarde-png.png'
        document.body.style.background = '#b5614c'
    } else {
        
        img.src = 'imagens/noite-png.png'
        document.body.style.background = '#0C1719'
    }


}



