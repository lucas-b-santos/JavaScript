function verificar() {
    let palavra = document.getElementById('palavra')
    let out = document.getElementById('out')
    let numVogal = 0
    let numCons = 0
    let to_upper = palavra.value.toUpperCase()
    for (i in to_upper) {
        switch (to_upper[i]) {
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
        }
    }    
    out.textContent = "A palavra possui " + palavra.value.length + " caracteres e tem " + numVogal + " vogais e " + numCons + " consoantes."
}

let btnOut = document.getElementById('btn')
btnOut.addEventListener('click', verificar)