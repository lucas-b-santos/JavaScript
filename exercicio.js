function verificar() {
    console.log('teste')
    let palavra = document.getElementById('palavra')
    let out = document.getElementById('out')
    Str = String(palavra.value.length)
    let numVogal = 0
    let numCons = 0
    out.textContent = "A palavra possui " + Str + " caracteres."
    for (let i = 0; i <= palavra.value.length; i++) {
        switch (i) {
            case "A":
                numVogal++
                break
            case "E":
                numVogal++
                break
            case "I":
                numVogal++
                break
            case "O":
                numVogal++
                break
            case "U":
                numVogal++
                break
            default:
                numCons++
                break
        }
    }
    out.textContent += "E " + numVogal + " vogais e " + numCons + " consoantes."
    


}

let btnOut = document.getElementById('btn')
btnOut.addEventListener('click', verificar)