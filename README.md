# Jogo da Velha React 🎮

[![Licença MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Um clássico jogo da velha com sistema de séries e placar, desenvolvido em React com Tailwind CSS.

![Captura de Tela do Jogo](screenshot.png) <!-- Adicione uma imagem real do seu jogo -->

## Funcionalidades Principais ✨

- **Modos de Série**: Melhor de 3 ou Melhor de 5
- **Placar Inteligente**: Acompanhamento de vitórias de X e O
- **Detecção Automática** de combinações vencedoras
- **Sistema de Empates** em rodadas e séries
- **Interface Responsiva** que funciona em qualquer dispositivo
- **Reinicialização Inteligente** preservando configurações
- **Feedback Visual** claro do status do jogo

## Pré-requisitos 📋

- Node.js v14+
- npm v6+

## Instalação ⚙️

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/jogo-da-velha-react.git

# Entrar no diretório
cd jogo-da-velha-react

# Instalar dependências
npm install

# Iniciar aplicação
npm start
```

## Como Jogar 🕹️

1. **Escolha o modo de jogo**:
   - `Melhor de 3`: Primeiro a vencer 2 rodadas
   - `Melhor de 5`: Primeiro a vencer 3 rodadas

2. **Jogue uma rodada**:
   - Clique nas células para marcar X ou O
   - Primeiro jogador é sempre o X
   - Rodada termina com vitória ou empate

3. **Controles**:
   - `Próxima Rodada`: Reinicia o tabuleiro mantendo o placar
   - `Reiniciar Jogo`: Zera completamente o placar
   - Troque o modo de série a qualquer momento (reinicia automaticamente)

## Desenvolvimento 🛠️

### Tecnologias Utilizadas
- **React**: Biblioteca principal para construção da UI
- **Tailwind CSS**: Estilização responsiva
- **Hooks**: useState para gerenciamento de estado
- **Vite**: Ambiente de desenvolvimento rápido

### Estrutura Principal
```plaintext
src/
├── components/
│   └── TicTacToe.jsx  # Componente principal do jogo
public/
├── index.html          # Template base