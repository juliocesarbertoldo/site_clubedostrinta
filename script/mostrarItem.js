let botaoItensGarrafa = window.document.querySelector('.btRestanteItensGarrafa')
let botaoItensLata = window.document.querySelector('.btRestanteItensLata')
let botaoItensLong = window.document.querySelector('.btRestanteItensLong')
let botaoItensRefri = window.document.querySelector('.btRestanteItensRefri')
let botaoItensEspeto = window.document.querySelector('.btRestanteItensEspeto')
let botaoItensBebida = window.document.querySelector('.btRestanteItensbebida')
let botaoItensSalgado = window.document.querySelector('.btRestanteItensSalgado')
let botaoItensDoce = window.document.querySelector('.btRestanteItensDoce')
botaoItensGarrafa.addEventListener('click', mostrarItensGarrafa)
botaoItensLata.addEventListener('click', mostrarItensLata)
botaoItensLong.addEventListener('click', mostrarItensLong)
botaoItensRefri.addEventListener('click', mostrarItensRefri)
botaoItensEspeto.addEventListener('click', mostrarItensEspeto)
botaoItensBebida.addEventListener('click', mostrarItensBebida)
botaoItensSalgado.addEventListener('click', mostrarItensSalgado)
botaoItensDoce.addEventListener('click', mostrarItensDoce)

function mostrarItensGarrafa() {
    if (restante_item_cardapio_garrafa.style.display == 'block') {
        restante_item_cardapio_garrafa.style.display = 'none'
        botaoItensGarrafa.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensGarrafa.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_garrafa.style.display = 'block'
        botaoItensGarrafa.innerHTML = 'Esconder &#9757'
        botaoItensGarrafa.style.background = '#ffdb8c'
    }
}

function mostrarItensLata() {
    if (restante_item_cardapio_lata.style.display == 'block') {
        restante_item_cardapio_lata.style.display = 'none'
        botaoItensLata.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensLata.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_lata.style.display = 'block'
        botaoItensLata.innerHTML = 'Esconder &#9757'
        botaoItensLata.style.background = '#ffdb8c'
    }
}

function mostrarItensLong() {
    if (restante_item_cardapio_long.style.display == 'block') {
        restante_item_cardapio_long.style.display = 'none'
        botaoItensLong.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensLong.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_long.style.display = 'block'
        botaoItensLong.innerHTML = 'Esconder &#9757'
        botaoItensLong.style.background = '#ffdb8c'
    }
}

function mostrarItensRefri() {
    if (restante_item_cardapio_refri.style.display == 'block') {
        restante_item_cardapio_refri.style.display = 'none'
        botaoItensRefri.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensRefri.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_refri.style.display = 'block'
        botaoItensRefri.innerHTML = 'Esconder &#9757'
        botaoItensRefri.style.background = '#ffdb8c'
    }
}

function mostrarItensEspeto() {
    if (restante_item_cardapio_espeto.style.display == 'block') {
        restante_item_cardapio_espeto.style.display = 'none'
        botaoItensEspeto.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensEspeto.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_espeto.style.display = 'block'
        botaoItensEspeto.innerHTML = 'Esconder &#9757'
        botaoItensEspeto.style.background = '#ffdb8c'
    }
}

function mostrarItensBebida() {
    if (restante_item_cardapio_bebida.style.display == 'block') {
        restante_item_cardapio_bebida.style.display = 'none'
        botaoItensBebida.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensBebida.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_bebida.style.display = 'block'
        botaoItensBebida.innerHTML = 'Esconder &#9757'
        botaoItensBebida.style.background = '#ffdb8c'
    }
}

function mostrarItensSalgado() {
    if (restante_item_cardapio_salgado.style.display == 'block') {
        restante_item_cardapio_salgado.style.display = 'none'
        botaoItensSalgado.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensSalgado.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_salgado.style.display = 'block'
        botaoItensSalgado.innerHTML = 'Esconder &#9757'
        botaoItensSalgado.style.background = '#ffdb8c'
    }
}

function mostrarItensDoce() {
    if (restante_item_cardapio_doce.style.display == 'block') {
        restante_item_cardapio_doce.style.display = 'none'
        botaoItensDoce.innerHTML = 'Mostrar Tudo &#128070'
        botaoItensDoce.style.background = '#c4ff8c'
    } else {
        restante_item_cardapio_doce.style.display = 'block'
        botaoItensDoce.innerHTML = 'Esconder &#9757'
        botaoItensDoce.style.background = '#ffdb8c'
    }
}