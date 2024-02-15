function verificar () {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (idade < 50 ) {
                img.setAttribute('src', 'imagens/h-adult.png')
            } else if (idade > 65 ) {
                img.setAttribute('src', 'imagens/h-idoso.png')
            } else {
                img.setAttribute('src', 'imagens/h-adult.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/m-adolesc.png')
            } else if (idade > 18 && idade < 35) {
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade < 50 ) {
                img.setAttribute('src', 'imagens/m-adult.png')
            } else if (idade >= 65 ) {
                img.setAttribute('src', 'imagens/m-idosa.png')
            } else {
                img.setAttribute('src', 'imagens/m-adult.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}