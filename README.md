# Sistema de Gestão de Estoque - Papelaria

[cite_start]Este projeto consiste em um sistema administrativo para controle de estoque de uma papelaria, desenvolvido como parte da disciplina de **Tecnologias para Internet II**[cite: 4, 5]. [cite_start]O sistema realiza o cadastro de entidades fundamentais, com validações no frontend e processamento de lógica no backend utilizando **Node.js**.

## Requisitos do Sistema

Para rodar o projeto, é necessário ter instalado:
* **Node.js** (versão LTS recomendada)
* **NPM** (gerenciador de pacotes)

## Estrutura de Pastas

* **/frontend**: Arquivos HTML de interface.
* **/backend**: Servidor Express (`server.js`) e lógica de script (`script.js`).
* **style.css**: Arquivo de estilização global na raiz.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Abra o terminal na pasta `backend`.
3. Instale as dependências necessárias:
```bash
npm install express cors
```

## Inicie o servidor:

```Bash
node server.js
```

Acesse o arquivo frontend/index.html no navegador.

## Lógicas Implementadas (Requisito 7)
Cada formulário possui uma lógica adicional executada pelo servidor:

* **Produtos:** Alerta de estoque crítico para quantidades inferiores a 10 unidades.

* **Vendas:** Cálculo automático do valor total (Quantidade x Preço).

* **Categorias:** Verificação de status para categorias inativas.

* **Funcionários:** Validação de nome completo (mínimo 3 caracteres).

* **Pedidos de Compra:** Estimativa de prazo de entrega (5 dias úteis).

# Grupo de Desenvolvimento
**Felicia da Trindade Justino - RA: 5166921 (Branch: branch-aluno-2).**

**Maria Luisa Souza Silva - RA: 5169930 (Branch: branch-aluno-1).**


**Trabalho acadêmico para o Momento I - Data de Entrega: 24/04/2026.**
