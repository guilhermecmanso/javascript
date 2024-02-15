
function carregar() {
    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    

    if (hora >=0 && hora < 12) {
        img.src = 'imagens/manha-png.png'
        document.body.style.backgroundColor = '#C89138'
        msg.innerHTML = `Agora são <strong>${hora}h</strong> e <strong>${min}min</strong>.`

    } else if (hora > 12 && hora < 18 ){
        img.src = 'imagens/tarde-png.png'
        document.body.style.backgroundColor = '#DF8B3A'
        msg.innerHTML = `Agora são <strong>${hora}h</strong> e <strong>${min}min</strong>.`

    } else {
        img.src = 'imagens/noite-png.png'
        document.body.style.backgroundColor = '#071C1F'
        msg.innerHTML = `Agora são <strong>${hora}h</strong> e <strong>${min}min</strong>.`
    }
}
