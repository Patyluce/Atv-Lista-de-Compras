// vetor de objetos para os campos : descrição , nome , item e preço
let listaCompras = []


function adicionarItens() {

  let nome = document.getElementById("nome").value
  let quantidade = document.getElementById("qtd").value
  let preco = document.getElementById("preco").value


  
  // criar objeto com os valores e adicionar na lista 
  let item = {
    nome: nome,
    qtd: quantidade,
    preco: preco

  }

  listaCompras.push(item)



  atualizarTabela()
  
  // limpar os inputs
  document.getElementById("nome").value = ""
  document.getElementById("qtd").value = ""
  document.getElementById("preco").value = ""
 
}

function atualizarTabela() {

  let tabela = document.getElementById("tabela")
  let Total = document.getElementById("total")


  tabela.innerHTML = ""

  // adicionar os cabeçalhos nas colunas
  let cabecalho = tabela.insertRow()
  let Item = cabecalho.insertCell()
  let Quantidade = cabecalho.insertCell()
  let Preco = cabecalho.insertCell()
  let total = cabecalho.insertCell()
   Item.innerHTML = "<b>Item</b>"
  Quantidade.innerHTML = "<b>Quantidade</b>"
  Preco.innerHTML = "<b>Preço</b>"
total.innerHTML = "<b>Total</b>"
  
  // calcular e adicionar os itens da lista 
  for (let i = 0; i < listaCompras.length; i++) {
    let item = listaCompras[i]
    let linha = tabela.insertRow()
    
    let Item = linha.insertCell()
    let Quantidade = linha.insertCell()
    let Preco = linha.insertCell()
    let Total = linha.insertCell()
  
    Item.innerHTML = item.nome
    Quantidade.innerHTML = item.qtd
    Preco.innerHTML = item.preco
    
    let t = calcularTotal(item.qtd, item.preco)
    Total.innerHTML = t.toFixed(2)
  }
}

function calcularTotal(qtd, preco) {
  return qtd * preco
}

function limpar() {
  
  listaCompras = []
  atualizarTabela()
}

