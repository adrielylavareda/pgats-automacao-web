# PGATS - Automação Web com Cypress

Projeto de automação de testes end-to-end (E2E) desenvolvido com Cypress para validação de funcionalidades web. Este projeto implementa testes automatizados para diversos casos de uso, garantindo a qualidade e confiabilidade da aplicação.

## 🎯 Funcionalidades Testadas

Este projeto contém testes automatizados para as seguintes funcionalidades:
- Registro de usuário (novo e com email existente)
- Login (cenários positivos e negativos)
- Logout
- Formulário de contato
- Listagem e detalhes de produtos
- Busca de produtos
- Carrinho de compras
- Processo de checkout

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [GitHub Actions](https://github.com/features/actions) para CI/CD

## 📋 Pré-requisitos

- Node.js instalado
- npm (Node Package Manager)
- Git

## 🚀 Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/adrielylavareda/pgats-automacao-web.git
cd pgats-automacao-web
```

2. Instale as dependências:
```bash
npm install
```

3. Execute os testes:
```bash
# Abre o Cypress em modo interativo
npx cypress open

# Executa os testes em modo headless
npx cypress run
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                     # Arquivos de teste
│   └── test-cases/          # Casos de teste organizados
├── fixtures/                # Dados de teste
├── support/                # Comandos personalizados
├── reports/               # Relatórios de execução
├── screenshots/           # Capturas de tela (em caso de falhas)
└── videos/               # Gravações das execuções
```

## ⚙️ Configuração do CI/CD

O projeto utiliza GitHub Actions para execução automática dos testes. O workflow está configurado para:
- Executar via trigger manual (workflow_dispatch)
- Rodar em ambiente Ubuntu
- Instalar dependências
- Executar a suite de testes
- Gerar e armazenar artefatos (relatórios, screenshots e vídeos)

## 📊 Relatórios

Os relatórios de execução são gerados automaticamente e podem ser encontrados:
- Localmente em `cypress/reports`
- No GitHub Actions como artefatos da execução

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Notas Adicionais

- Os testes são executados em um ambiente Linux através do GitHub Actions
- Screenshots e vídeos são gerados automaticamente para análise de falhas
- Relatórios detalhados são disponibilizados após cada execução

## 👥 Autores

- Adriely Lavareda