function valores(direc=0){
        var num = direc
        atribnum(num)
}

function atribnum(num=0){
    if(num || num==0){
        var numt = Number(num)
        var mostrar = window.document.querySelector('div.display')
        if(numt<=9){
            var mostrar2 = window.document.querySelector('div.display').innerHTML
            if(mostrar2 == 'Syntax Error') mostrar2 = ''
            var teste = mostrar2 + num
            mostrar.innerHTML= teste
        }else{
            mostrar.innerHTML = 'Syntax Error'
        }
    }
    else{
        var mostrar = window.document.querySelector('div.display')
        mostrar.innerHTML= 'Syntax Error'
    }

}

function somar(n1=0, n2=0){
    var op = '+'
    var s = n1 + n2
    montarop(s, n1, n2, op)
}
function subtrair(n1=0, n2=0){
    var op = '-'
    var s = n1 - n2
    montarop(s, n1, n2, op)
}
function multip(n1=0, n2=0){
    var op = '*'
    var s = n1 * n2
    montarop(s, n1, n2, op)
}
function dividir(n1=0, n2=0){
    var op = '/'
    var s = n1 / n2
    montarop(s, n1, n2, op)
}
function montarop(s=0, n1=0, n2=0, op=0){
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<br>${n1} ${op}  ${n2} = ${s}</br>`
}