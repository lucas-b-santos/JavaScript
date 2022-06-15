const frm = document.querySelector('form') // .querySelector seleciona o elemento html
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault() //formularis não enviar dados
    let nome = frm.paciente.value 
    pacientes.push(nome)
    let lista = ''
    for (let i = 0; i < pacientes.length; i++) {
       lista += `${i+1}. ${pacientes[i]}\n`
    }
    respLista.textContent = lista //exibe a lista de pacientes
    frm.paciente.value = '' // limpa o conteúdo do campo
    frm.paciente.focus() // retorna o cursor piscante no campo 
}) 

frm.btnUrgencia.addEventListener('click', () => {
    if (!frm.checkValidity()) {
        alert('Informe o nome do paciente!')
        frm.paciente.focus()
        return //retorna ao form
    }
    let nome = frm.paciente.value
    pacientes.unshift(nome)
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${pacientes[i]}\n`))

    respLista.textContent = lista 
    frm.paciente.value = '' 
    frm.paciente.focus() 
})


function atender() {}