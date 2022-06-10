function calcularMedia() {
    //criar referencia aos elementos da página
    let inNome = document.getElementById('inNome')
    let inN1 = document.getElementById('inN1')
    let inN2 = document.getElementById('inN2')
    let outNome = document.getElementById('outNome')
    let outMedia = document.getElementById('outMedia')
    let outSituacao = document.getElementById('outSituacao')

    //obtem os valores dos campos de edição da página
    let nome = inNome.value
    let nota1 = Number(inN1.value)
    let nota2 = Number(inN2.value)

    let media = (nota1 + nota2)/2
    outNome.textContent = 'Nome: ' + nome
    outMedia.textContent = 'A média é: ' + media.toFixed(1)
    
    if (media >= 7) {
        outSituacao.textContent = 'Parabéns!'
        outSituacao.style.color = 'green'
    } else if (media >= 4) {
        outSituacao.textContent = 'Vai pra recuperação jovem!'
        outSituacao.style.color = 'orange'
    } else {
        outSituacao.textContent = 'Reprovou jovem :('
        outSituacao.style.color = 'red'
    }

    
}

//criar referencia ao elemento btnCalcular
let btResultado = document.getElementById('btnCalcular')

//registrar um evento de click à função calcularMedia
btResultado.addEventListener('click', calcularMedia)
