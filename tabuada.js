function tabuada() {
    let numStr = document.getElementById('num')
    let num = Number(numStr.value)
    let res = document.getElementById('res')
    let resposta = ""
    for (let i=0; i<=10; i++) {
        resposta += numStr.value + ' x ' + i + ' = ' + i * num + "\n"
    }
    res.textContent = resposta
}

let btn = document.getElementById('btnTabu')
btn.addEventListener('click', tabuada)