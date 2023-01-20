let botaoMenu = window.document.getElementById('btBurguer')
let botaoPopUp = window.document.querySelector('.btPopUp')
botaoMenu.addEventListener('click', clickMenu)
botaoPopUp.addEventListener('click', fecharPopUp)

function fecharPopUp() {
        promocao_template.style.display = 'none'
}

function clickMenu() {
    if (lista_menu.style.display == 'block') {
        lista_menu.style.display = 'none'
    } else {
        lista_menu.style.display = 'block'
    }
}

function fotoCardapio() {
    let itemCardapio = []
    for (let codItem = 1; codItem <= 38; codItem++) {
        itemCardapio.push(codItem)

        itemCardapio[codItem] = window.document.getElementById(codItem)
        itemCardapio[codItem].style.background = `url(../imagens/img-${codItem}.png) no-repeat 80%`
        itemCardapio[codItem].style.backgroundSize = 'contain'
    }
}

document.onload = fotoCardapio()