
function verify() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    }else if (fano.value < 1920) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
        document.location.reload()

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'romem-criança.png')
                document.body.style.background = '#426cf5'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'homem-jovem.png')
                document.body.style.background = '#426cf5'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'homem-adulto.png')
                document.body.style.background = '#426cf5'
            } else {
                // Idoso
                img.setAttribute('src' , 'homem-idoso.png')
                document.body.style.background = '#426cf5'

            }
            

        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'mulher-criança.png')
                document.body.style.background = '#f542e0'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src' , 'mulher-jovem.png')
                document.body.style.background = '#f542e0'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src' , 'mulher-adulto.png')
                document.body.style.background = '#f542e0'
            } else {
                // Idoso
                img.setAttribute('src' , 'mulher-idoso.png')
                document.body.style.background = '#f542e0'

            }

        }
    }   res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        res.style.aspectRatio(2)

}   