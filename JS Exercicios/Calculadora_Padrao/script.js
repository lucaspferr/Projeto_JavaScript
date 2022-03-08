var pr_numero

function valores(direc=0){
        var num = direc
        atribnum(num)
}

function atribnum(num=0){
    if(num || num==0){
        var numt = Number(num)
        var mostrar = window.document.querySelector('div.display')
        if(numt<=10){
            var mostrar2 = window.document.querySelector('div.display').innerHTML
            if(mostrar2 == 'Syntax Error') mostrar2 = ''
            if(mostrar2.length!=11 && mostrar2.length!=45){
                if(numt==10){
                    var teste = mostrar2 + '.'
                    mostrar.innerHTML = teste
                }else{
                    var teste = mostrar2 + num
                    mostrar.innerHTML= teste
                }  
            }else{
                alert('Tamanho máximo alcançado.')
            }
        }else{
            verif_num(numt)
        }
    }
    else{
        var mostrar = window.document.querySelector('div.display')
        mostrar.innerHTML= 'Syntax Error'
    }

}

function verif_num(numt=0){
    //testar se é um numero
    testenumero = window.document.querySelector('div.display').innerHTML
    display = window.document.querySelector('div.display')
    if(!isNaN(testenumero)){
        display.innerHTML='Foi'
    }else{
        display.innerHTML='Syntax Error'
    }
}