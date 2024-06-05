# Sistema de Pedido Online para Pizzaria
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router DOM](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

- Site da [PizzarIA](pizzar-ia.vercel.app)
- [Back-End da PizzarIA](https://github.com/VictorParizio/backend-pizzarIA)

## Visão Geral

Este é um sistema desenvolvido em React para permitir aos usuários realizar pedidos online em uma pizzaria. Os usuários podem se registrar, entrar, visualizar o cardápio, adicionar pizzas ao carrinho, editar a quantidade e remover itens do carrinho.

## Funcionalidades Principais

1. **Cadastro de Usuário**

   - Cadastro de usuário fornecendo nome, e-mail e senha.
   - Validação de entrada de dados fornecidos garantindo que sejam corretos e seguros.
   - Os dados do usuário são enviados para a API, onde são armazenados de forma segura.

2. **Login de Usuário**

   - Os usuários podem fazer login na plataforma utilizando seu e-mail e senha cadastrados anteriormente.
   - Após a autenticação bem-sucedida, a API retorna um token JWT que é armazenado no navegador do usuário para futuras requisições.
   - O token é armazenado na `sessionStorage`, uma opção segura para armazenar informações sensíveis, pois não persistem após o fechamento da aba ou janela, reduzindo a exposição a ataques de roubo de token.

3. **Autenticação com Redux**

   - Introduzir o Redux para gerenciar o estado global da aplicação, incluindo informações sobre o usuário autenticado.

4. **Proteção de Rotas**

   - Rotas sensíveis, como o cardápio, carrinho e perfil do usuário, são protegidas e requerem autenticação.
   - É feita a validação do JWT em cada requisição para validar a identidade do usuário e conceder acesso aos recursos protegidos.

5. **Gerenciamento de Sessão**

   - A sessão do usuário é mantida ativa enquanto o token JWT não expirar.
   - Caso o token expire, o usuário é automaticamente redirecionado para fazer login novamente.

6. **Listagem de Pizzas**

   - Exibição dinâmica das opções de pizzas disponíveis fornecidas pela API, utilizando componentes React para representar cada item do cardápio.

7. **Seleção de Pizzas**

   - Permite aos usuários selecionar a quantidade desejada de cada pizza.

8. **Carrinho de Compras**

   - Implementação de um carrinho de compras dinâmico que exibe as pizzas selecionadas, a quantidade e o total.
   - Permite ao usuário ajustar a quantidade ou remover itens do carrinho.

9. **Finalização do Pedido**

   - Permitir aos usuários revisar o pedido, ajustar as quantidades, remover itens e finalizar a compra.

10. **Animações**

    - Utilização de propriedades CSS para controle de transições, proporcionando uma experiência suave ao navegar pela aplicação e adicionar ou remover itens do carrinho.
    - Uso de funções de transformação CSS para animar a interação do usuário durante a seleção.

11. **Responsividade**

    - Implementação de breakpoints para garantir uma experiência de usuário consistente em diferentes dispositivos.

12. **Acessibilidade e Atributos ARIA**

    - Integração de atributos ARIA para melhorar a acessibilidade da aplicação, tornando-a mais amigável para usuários com deficiência.

13. **Controle de Versão com Git**
    - Configuração de um repositório Git para o projeto, garantindo um histórico de alterações e facilitando a colaboração entre os membros da equipe.

## Tecnologias Utilizadas

- React
- Redux Toolkit
- Axios
- React Router DOM
- Sass

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/).

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/VictorParizio/PizzarIA.git
   
   ```
2. Acesse a pasta do projeto no terminal:
   ```bash
   cd PizzarIA
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Execute a aplicação:
   ```bash
   npm run dev
   ```
2. Acesse no seu navegador:
   ```plaintext
   http://localhost:3000
   ```
