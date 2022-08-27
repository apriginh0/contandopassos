function calcular() {
    var txti = window.document.querySelector('input#txti')
    var txtf = window.document.querySelector('input#txtf')
    var txtp = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')
    
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        window.alert(`[ERRO] Faltam dados!`)
    } else {
        var inicio = Number(txti.value)
        var final = Number(txtf.value)
        var passos = Number(txtp.value)
        res.innerHTML = `Vamos, conte comigo:</br>`
        if(passos <= 0) {
            window.alert(`Passo inválido! Considerando 1passo.`)
            passos = 1
        }
        if(inicio < final) {
            for(var inicio; inicio <= final; inicio += passos) {
                res.innerHTML += String.fromCodePoint(0x1F449)+` ${inicio} `
            }
        } else {
            for(inicio; inicio >= final; inicio -= passos) {
                res.innerHTML += String.fromCodePoint(0x1F449)+` ${inicio} `
            }
        }
         // site de emoji: https://unicode.org/emoji/charts/full-emoji-list.html
        res.innerHTML += `\u{1F3F4}` // duas formas possíveis de colocar emoji
    }
}