function valores(direc=0){
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    if(direc==1){
        somar(n1, n2)
    }else if(direc==2){
        subtrair(n1, n2)
    }else if(direc==3){
        multip(n1, n2)
    }else{
        dividir(n1, n2)
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