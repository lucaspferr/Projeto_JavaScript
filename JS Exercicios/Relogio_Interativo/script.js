function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minuto} minuto(s).`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src= 'imagens/manha.png'
        document.body.style.background = '#FEEDD3'
    }else if(hora < 18){
        //Boa tarde
        img.src= 'imagens/tarde.png'
        document.body.style.background = '#C3996E'
    }else{
        //Boa noite
        img.src= 'imagens/noite.png'
        document.body.style.background = '#605F73'
    }
}


