function verificar() {
    var date = new Date()
    var anoatual = date.getFullYear()
    var fano = document.querySelector('input#txtano')
    var result = document.querySelector('div#result')
    var img = document.getElementById('imagem')
    
    if (fano.value.length == 0 || anoatual <= Number(fano.value)) {
        alert('Não foi possível calcular com o ano informado!')
    } else {
        var idade = anoatual - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        
    } if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade > 0 && idade < 10) {
            img.src = 'imagens/h-crianca.png'
        } else if (idade < 18) {
            img.src = 'imagens/h-adolesc.png'
        } else if (idade < 30) {
            img.src = 'imagens/h-jovem.png'
        } else if (idade < 60 ) {
            img.src = 'imagens/h-adult.png'
        } else {
            img.src = 'imagens/h-idoso.png'
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade > 0 && idade < 10) {
            img.src = 'imagens/m-crianca.png'
        } else if (idade < 18) {
            img.src = 'imagens/m-adolesc.png'
        } else if (idade < 30) {
            img.src = 'imagens/m-jovem.png'
        } else if (idade < 60) {
            img.src = 'imagens/m-adult.png'
        } else {
            img.src = 'imagens/m-idosa.png'
        }
    } else {
        gênero = 'Outro'
        img.src = 'imagens/outro.png'
    }
    
    result.innerHTML = `Identificamos <strong>${gênero}</strong> com <strong>${idade} anos</strong> de idade.`
    result.appendChild(img)
}