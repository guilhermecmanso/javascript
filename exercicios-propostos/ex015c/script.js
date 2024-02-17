function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var result = document.querySelector('div#result')
    
    if (fano.value.length == 0 || Number(fano.value) >= anoatual) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/h-adolesc.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (idade < 60) {
                img.setAttribute ('src', 'imagens/h-adult.png')
            } else {
                img.setAttribute ('src', 'imagens/h-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/m-adolesc.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade < 60) {
                img.setAttribute ('src', 'imagens/m-adult.png')
            } else {
                img.setAttribute ('src', 'imagens/m-idosa.png')
            }
        } else {
            gênero = 'Outro'
        }
    }
    result.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    result.appendChild(img)
}