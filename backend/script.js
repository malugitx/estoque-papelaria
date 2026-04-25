document.addEventListener("DOMContentLoaded", () => {
    // --- FUNÇÕES DE VALIDAÇÃO (AUXILIARES) ---
    const validarCPF = (cpf) => /^[0-9]{11}$/.test(cpf);
    const validarCNPJ = (cnpj) => /^[0-9]{14}$/.test(cnpj);
    const validarTelefone = (tel) => /^[0-9]{11}$/.test(tel);
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Função padrão para enviar dados ao servidor Node.js
    const enviarParaServidor = (endpoint, dados) => {
        fetch(`http://localhost:3000/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(res => res.text())
        .then(msg => alert(msg))
        .catch(err => console.error("Erro ao conectar com o servidor:", err));
    };

    // --- 1. FORMULÁRIO DE CLIENTES ---
    const formCliente = document.getElementById("formCliente");
    if (formCliente) {
        formCliente.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nomeCliente: document.getElementById("nomeCliente").value,
                cpf: document.getElementById("cpf").value,
                telefone: document.getElementById("telefoneCliente").value,
                emailCliente: document.getElementById("emailCliente").value
            };

            if (!validarCPF(dados.cpf)) return alert("CPF deve ter 11 números.");
            if (!validarTelefone(dados.telefone)) return alert("Telefone deve ter 11 números (DDD+Número).");
            
            enviarParaServidor('cadastrar-cliente', dados);
        });
    }

    // --- 2. FORMULÁRIO DE FORNECEDORES ---
    const formFornecedor = document.getElementById("formFornecedor");
    if (formFornecedor) {
        formFornecedor.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nomeFornecedor: document.getElementById("nomeFornecedor").value,
                cnpj: document.getElementById("cnpj").value,
                email: document.getElementById("email").value
            };

            if (!validarCNPJ(dados.cnpj)) return alert("CNPJ deve ter 14 números.");
            
            enviarParaServidor('cadastrar-fornecedor', dados);
        });
    }

    // --- 3. FORMULÁRIO DE PRODUTOS ---
    const formProduto = document.getElementById("formProduto");
    if (formProduto) {
        formProduto.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nome: document.getElementById("nome").value,
                quantidade: document.getElementById("quantidade").value
            };
            enviarParaServidor('cadastrar-produto', dados);
        });
    }

    // --- 4. FORMULÁRIO DE VENDAS ---
    const formVenda = document.getElementById("formVenda");
    if (formVenda) {
        formVenda.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                quantidadeVenda: document.getElementById("quantidadeVenda").value,
                precoUnitario: document.getElementById("precoUnitario").value
            };
            enviarParaServidor('registrar-venda', dados);
        });
    }

    // --- 5. FORMULÁRIO DE CATEGORIAS ---
    const formCategoria = document.getElementById("formCategoria");
    if (formCategoria) {
        formCategoria.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nomeCategoria: document.getElementById("nomeCategoria").value,
                status: document.getElementById("status").value
            };
            enviarParaServidor('cadastrar-categoria', dados);
        });
    }

    // --- 6. FORMULÁRIO DE FUNCIONÁRIOS ---
    const formFuncionario = document.getElementById("formFuncionario");
    if (formFuncionario) {
        formFuncionario.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                nomeFuncionario: document.getElementById("nomeFuncionario").value,
                cpf: document.getElementById("cpfFuncionario").value,
                email: document.getElementById("emailFuncionario").value
            };

            if (!validarCPF(dados.cpf)) return alert("CPF do funcionário inválido.");
            if (!validarEmail(dados.email)) return alert("E-mail inválido.");

            enviarParaServidor('cadastrar-funcionario', dados);
        });
    }

    // --- 7. FORMULÁRIO DE PEDIDOS DE COMPRA ---
    const formPedido = document.getElementById("formPedido");
    if (formPedido) {
        formPedido.addEventListener("submit", (e) => {
            e.preventDefault();
            const dados = {
                itemPedido: document.getElementById("itemPedido").value,
                quantidade: document.getElementById("quantidadePedido").value
            };
            enviarParaServidor('registrar-pedido', dados);
        });
    }
});