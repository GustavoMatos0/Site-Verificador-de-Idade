function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value > ano) || Number(fano.value<1920)){
        alert('Verifique os dados e tente novamente')
    }else{
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('sex')
        var genero = ''
        var img = document.getElementById('imagem')
        if(fsex[0].checked){
            if(idade >=0 && idade <10){
                img.src = 'bebe-m.png'
                genero = 'bebê'
            }else if(idade < 21){
                img.src = 'jovem-m.png'
                genero = 'jovem'
            }else if(idade < 50){
                img.src = 'adulto-m.png'
                genero = 'adulto'
            }else{
                img.src = 'idoso-m.png'
                genero = 'idoso'
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.src = 'bebe-f.png'
                genero = 'bebê'
            }else if(idade < 21){
                img.src = 'jovem-f.png'
                genero = 'jovem'
            }else if(idade < 50){
                img.src = 'adulto-f.png'
                genero = 'adulta'
            }else{
                img.src = 'idoso-f.png'
                genero = 'idosa'
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '8px'
        res.innerHTML = `   Detectamos um(a) ${genero} com ${idade} anos.`
      
        
    }
    
}