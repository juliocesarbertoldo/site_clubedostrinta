let botaoMenu = window.document.getElementById('btBurguer')
let botaoPopUp = window.document.querySelector('.btPopUp')
botaoMenu.addEventListener('click', clickMenu)
botaoPopUp.addEventListener('click', fecharPopUp)

function fecharPopUp() {
    promocao_template.style.display = 'none'
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        lista_menu.style.display = 'grid'
        restante_item_cardapio_garrafa.style.display = 'block'
        restante_item_cardapio_lata.style.display = 'block'
        restante_item_cardapio_long.style.display = 'block'
        restante_item_cardapio_refri.style.display = 'block'
        restante_item_cardapio_espeto.style.display = 'block'
        restante_item_cardapio_bebida.style.display = 'block'
        restante_item_cardapio_salgado.style.display = 'block'
        restante_item_cardapio_doce.style.display = 'block'
    } else {
        lista_menu.style.display = 'none'
        restante_item_cardapio_garrafa.style.display = 'none'
        restante_item_cardapio_lata.style.display = 'none'
        restante_item_cardapio_long.style.display = 'none'
        restante_item_cardapio_refri.style.display = 'none'
        restante_item_cardapio_espeto.style.display = 'none'
        restante_item_cardapio_bebida.style.display = 'none'
        restante_item_cardapio_salgado.style.display = 'none'
        restante_item_cardapio_doce.style.display = 'none'
    }

    if (window.innerWidth < 768) {
        botaoItensGarrafa.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensGarrafa.style.background = '#c4ff8c'
        botaoItensLata.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensLata.style.background = '#c4ff8c'
        botaoItensLong.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensLong.style.background = '#c4ff8c'
        botaoItensRefri.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensRefri.style.background = '#c4ff8c'
        botaoItensEspeto.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensEspeto.style.background = '#c4ff8c'
        botaoItensBebida.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensBebida.style.background = '#c4ff8c'
        botaoItensSalgado.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensSalgado.style.background = '#c4ff8c'
        botaoItensDoce.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensDoce.style.background = '#c4ff8c'
    }
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