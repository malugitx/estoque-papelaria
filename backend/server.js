const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 1. Cadastro de clientes (Corrigido: nomes das variáveis)
app.post('/cadastrar-cliente', (req, res) => {
    const { nomeCliente, cpf, emailCliente } = req.body;
    if (!nomeCliente || !cpf || !emailCliente) {
        return res.status(400).send("Erro. Preencha todos os campos obrigatórios.");
    }
    res.send(`Cliente ${nomeCliente} cadastrado com sucesso no servidor!`);
});

// 2. Cadastro de fornecedores (Corrigido: rota /)
app.post('/cadastrar-fornecedor', (req, res) => {
    const { nomeFornecedor, cnpj } = req.body;
    if (!nomeFornecedor || !cnpj) {
        return res.status(400).send("Erro. Preencha todos os campos obrigatórios.");
    }
    res.send(`Fornecedor ${nomeFornecedor} cadastrado com sucesso no servidor!`);
});

// 3. Cadastro de produtos (Corrigido: rota e lógica de estoque)
app.post('/cadastrar-produto', (req, res) => {
    const { nome, quantidade } = req.body;
    let mensagem = `Produto ${nome} salvo. `;

    if (parseInt(quantidade) < 10) {
        mensagem += "ATENÇÃO: Este produto está com nível crítico de estoque (menos de 10 unidades).";
    }
    res.send(mensagem);
});

// 4. Cadastro de categorias (Corrigido: nome da variável nomeCategoria)
app.post('/cadastrar-categoria', (req, res) => {
    const { nomeCategoria, status } = req.body;
    if (status === "Inativa") {
        return res.send(`Categoria ${nomeCategoria} cadastrada, mas está oculta no site (Status: INATIVA).`);
    }
    res.send(`Categoria ${nomeCategoria} cadastrada com sucesso e ativa.`);
});

// 5. Registro de vendas (Corrigido: parseFloat para não perder os centavos)
app.post('/registrar-venda', (req, res) => {
    const { quantidadeVenda, precoUnitario } = req.body;
    const total = parseFloat(quantidadeVenda) * parseFloat(precoUnitario);

    res.send(`Venda registrada! O valor total da transação foi de R$ ${total.toFixed(2)}.`);
});

// 6. Cadastro de funcionário (Corrigido: Adicionado res.send de sucesso)
app.post('/cadastrar-funcionario', (req, res) => {
    const { nomeFuncionario } = req.body;
    if (nomeFuncionario.length < 3) {
        return res.status(400).send("Erro. O nome do funcionário deve ser completo.");
    }
    // Faltava esta linha para finalizar a requisição com sucesso
    res.send(`Funcionário ${nomeFuncionario} cadastrado com sucesso!`);
});

// 7. Pedidos de compras
app.post('/registrar-pedido', (req, res) => {
    const { itemPedido } = req.body;
    res.send(`Pedido de "${itemPedido}" enviado ao fornecedor. Prazo estimado: 5 dias úteis.`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});