
let pratoEscolhido;
let preco1;
function pratoSelecionado(prato){
    const jaExisteSelecionadoOuNao = document.querySelector('.menu .pratosselecionados')

    if(jaExisteSelecionadoOuNao !== null){
        const iconeCheck = document.querySelector('.menu .pratosselecionados .price-box .md')
        iconeCheck.classList.add('hide')
    }
    const selecionado = document.querySelector('.comida .pratosselecionados')
    
    if( selecionado !== null){
        selecionado.classList.remove('pratosselecionados')
    }
    prato.classList.add('pratosselecionados')

    const selecionado2 = document.querySelector('.pratos.pratosselecionados .price-box .hide' )
   
    if(selecionado2 !== null){
        selecionado2.classList.remove("hide")
    }
    
    pratoEscolhido = document.querySelector(".pratosselecionados .prato")
    preco1 = document.querySelector(".pratosselecionados .preço")
   

    
    

    habilitaFecharPedido()     
 }
 let drinkEscolhido;
 let preco2;
function drinkSelecionado(prato){
    const jaExisteSelecionadoOuNao = document.querySelector('.drink .pratosselecionados')
    if(jaExisteSelecionadoOuNao !== null){
        const iconeCheck = document.querySelector('.drink .pratosselecionados .price-box .md')
        iconeCheck.classList.add('hide')
    }
    //----
    const selecionado = document.querySelector('.drink .pratosselecionados')
    if( selecionado !== null){
        selecionado.classList.remove('pratosselecionados')
    }
    prato.classList.add('pratosselecionados')

    const selecionado2 = document.querySelector('.pratos.pratosselecionados .price-box .hide' )
   //----
    if(selecionado2 !== null){
        selecionado2.classList.remove("hide")
    }
    drinkEscolhido = document.querySelector(".pratosselecionados .prato2")
    preco2 = document.querySelector(".pratosselecionados .preço2")

    habilitaFecharPedido()
}
let sobremesaEscolhido;
let preco3;
function sobremesaSelecionada(prato){
    const jaExisteSelecionadoOuNao = document.querySelector('.sobremesa .pratosselecionados')
    if(jaExisteSelecionadoOuNao !== null){
        const iconeCheck = document.querySelector('.sobremesa .pratosselecionados .price-box .md')
        iconeCheck.classList.add('hide')
    }
    //
    const selecionado = document.querySelector('.sobremesa .pratosselecionados')
    if( selecionado !== null){
        selecionado.classList.remove('pratosselecionados')
    }
    prato.classList.add('pratosselecionados')
    //
    const selecionado2 = document.querySelector('.pratos.pratosselecionados .price-box .hide' )
    if(selecionado2 !== null){
        selecionado2.classList.remove("hide")
    }
    sobremesaEscolhido = document.querySelector(".pratosselecionados .prato3")
    preco3 = document.querySelector(".pratosselecionados .preço3")
    
    habilitaFecharPedido()
}

function habilitaFecharPedido(){
    const pratoSelecionado = document.querySelector('.comida .pratosselecionados')
    const drinkSelecionado = document.querySelector('.drink .pratosselecionados')
    const sobremesaSelecionada = document.querySelector('.sobremesa .pratosselecionados')
    if( pratoSelecionado !== null && drinkSelecionado !== null && sobremesaSelecionada !== null){
        const caixaMenu = document.querySelector('.caixa-pedido')
        const caixaMenu1 = document.querySelector('.pedido')
        caixaMenu1.innerHTML = 'Fechar pedido'
        caixaMenu.classList.add('verde')
          
    }
    
}
habilitaFecharPedido()

function enviarMensagem(){
   
   const botaoVerde = document.querySelector('.menu-inferior .caixa-pedido.verde')
   if(botaoVerde !== null){
    
  const nPreco1 = preco1.innerHTML.replace('R$ ','').replace(',','.')
  const nPreco2 = preco2.innerHTML.replace('R$ ','').replace(',','.')
  const nPreco3 = preco3.innerHTML.replace('R$ ','').replace(',','.')
  const nTotal = parseFloat( nPreco1) + parseFloat(nPreco2) + parseFloat(nPreco3)
  
  let mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${pratoEscolhido.innerHTML}
  - Bebida: ${drinkEscolhido.innerHTML}
  - Sobremesa: ${sobremesaEscolhido.innerHTML}
  - Total: ${nTotal.toFixed(2)}
  `
  
    const mensagemCodificada = encodeURIComponent(mensagem)
    
    const whatsUrl = `https://wa.me/5541996721134?text=${mensagemCodificada} `
    
    window.open(whatsUrl)

   }
   
   
}

