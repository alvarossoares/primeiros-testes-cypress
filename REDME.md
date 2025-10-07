# My Cypress Automation

# Primeiros Testes com Cypress

Este repositório contém meus primeiros projetos práticos de automação de testes utilizando o framework **Cypress**. 

O objetivo é aprender e aplicar conceitos de testes end-to-end (E2E) para validar funcionalidades web, com foco em qualidade, automação e boas práticas.

---

## Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) (versão XX)  
- JavaScript (ES6+)  
- Node.js (versão XX)  
- Git para versionamento  

---

## Descrição do Projeto

Neste projeto, desenvolvi testes automatizados para simular o fluxo de usuários em aplicações web, incluindo:  
- Validação de formulários  
- Testes de login e autenticação  
- Verificação de mensagens de erro e sucesso  
- Automação de interações básicas (clicar, preencher campos, navegar)

---

## Como executar os testes

### Pré-requisitos

- Node.js instalado (versão XX ou superior)  
- npm (Node Package Manager)

### Passos

1. Clone este repositório  

git clone https://github.com/alvarossoares/primeiros-testes-cypress.git

2. Entre na pasta do projeto

cd primeiros-testes-cypress

3. Instale as dependências

npm install

4. Abra o Cypress

npx cypress open

5. Para rodar os testes no modo headless (sem interface gráfica), use:

npx cypress run


Estrutura do Projeto

/cypress/integration – scripts de teste automatizados
/cypress/fixtures – dados estáticos para os testes
/cypress/support – comandos customizados e configurações adicionais
cypress.config.js – configuração principal do Cypress
package.json – gerenciador de dependências e scripts

Resultados e Evidências

Durante a execução dos testes, o Cypress gera relatórios visuais e pode capturar screenshots ou vídeos, facilitando a análise dos resultados e debug.



   
