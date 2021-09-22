function incorporar(n) {
    var res = document.querySelector('p#res')
    var num = res.innerHTML
    res.innerHTML = num + n
}

function apagar () {
    var res = document.querySelector('p#res').innerHTML
    document.querySelector('p#res').innerHTML = res.substring(0, res.length -1) 
}

function calcular() {
    var res = document.querySelector('p#res').innerHTML
    if(res) {
        document.querySelector('p#res').innerHTML = eval(res)
    }
}