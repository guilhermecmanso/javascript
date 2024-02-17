function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/h-adolesc.png')
            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (idade >= 30 && idade < 55) {
                // Adulto
                img.setAttribute('src', 'imagens/h-adult.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/h-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/m-adolesc.png')
            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade >= 30 && idade < 55) {
                // Adulto
                img.setAttribute('src', 'imagens/m-adult.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/m-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade} anos</strong>`
        res.appendChild(img)
    }
}
