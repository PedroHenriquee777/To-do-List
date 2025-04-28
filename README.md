# Lista de Tarefas - Projeto To-Do List

Este projeto implementa um aplicativo simples de lista de tarefas utilizando HTML, CSS, Node.js e o framework Fastify.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página web.  
- **CSS**: Estilização da interface.  
- **JavaScript / Node.js**: Ambiente de execução para o backend e lógica da API.  
- **Fastify**: Framework para criação do servidor backend.

## Funcionalidades

- Adicionar novas tarefas.  
- Marcar tarefas como pendentes ou concluídas.  
- Remover tarefas da lista.  
- Visualizar a lista de tarefas.

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- Node.js (versão recomendada: 16 ou superior)  
- Framework Fastify  
- Módulos Node: `@fastify/mysql`, `path`, `@fastify/static`, `@fastify/formbody`

## Como Executar o Código

1. Abra o terminal do VSCode (ou outro terminal de sua preferência).  
2. Navegue até o diretório do projeto.  
3. Execute o seguinte comando para iniciar o servidor:  
   ```bash
   node index.js
   ```
4. Abra seu navegador e acesse a seguinte URL:  
   ```
   localhost:3000/
   ```

## Como Usar

- **Adicionar Tarefas**: Preencha o campo de texto e clique no botão "Adicionar" para inserir uma nova tarefa na lista.  
- **Selecionar o Status da Tarefa**: Escolha o status apropriado para sua tarefa (pendente ou concluída).  
- **Remover Tarefas**: Clique no ícone de "Excluir" ao lado da tarefa para removê-la.
