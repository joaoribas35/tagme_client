# Guia de Receitas - Restaurante Coco Bambu

Esta aplicação tem o objetivo de listar as receitas disponíveis no cardápio do Restaurante Coco Bambu e detalhar cada uma delas fornecendo os ingredientes e instruções para a confecção do prato, funcionando como um guia para a cozinha de cada filial. A aplicação é responsiva para funcionar em tablets (a partir de 768px de largura) e desktops.

![Login](https://drive.google.com/file/d/1H1T2Y_2KCGge-ssFr1ymudQXq0fsAcv4/view?usp=sharing)

# Tabela de Conteúdos

- [Instalação](#instalação)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Como Usar](#como-usar)
  - [Tela de Login](#tela-de-login)
  - [Tela de Receitas](#tela-de-receitas)
  - [Tela de Cada Receita](#tela-de-cada-receita)
- [Tecnologias](#tecnologias)

# Instalação

Este projeto utiliza uma API desenvolvida em Node.js, Express, Mongoose e MongoDB. Para rodar a aplicação, é necessário seguir os passos abaixo para inicializar o backend.

- [Voltar](#tabela-de-conteúdos)

## Backend

Faça o download da aplicação, acesse a pasta com os arquivos, instale as dependencias e inicialize o projeto:

```
git clone https://github.com/joaoribas35/tagme_server
cd tagme_server
yarn install
yarn start
```

- [Voltar](#tabela-de-conteúdos)

## Frontend

Faça o download da aplicação, acesse a pasta com os arquivos, instale as dependencias e inicialize o projeto:

```
git clone https://github.com/joaoribas35/tagme_client
cd tagme_client
yarn install
yarn start
```

- [Voltar](#tabela-de-conteúdos)

# Como usar

A aplicação possui três telas: uma de login, uma listando todas as receitas e uma detalhando cada receita. As telas de receitas e detalhes de cada receitas são protegidas e necessitam de validação do usuário para ter acesso.

- [Voltar](#tabela-de-conteúdos)

## Tela de Login

A aplicação irá iniciar na página de login. o usuário irá informar suas credenciais, que serão validadas no backend. Caso as credenciais sejam válidas, o usuário receberá uma mensagem de boas vindas, será redirecionado para página de receitas e terá um token de acesso salvo no _Local Storage_. Para acessar, utilize as seguintes credenciais:

```
Nome do usuário: visitante
Senha: 123456
```

- [Voltar](#tabela-de-conteúdos)

## Tela de Receitas

Nesta página serão listada todas as receitas que estão salvas no banco de dados da API. Cada receita possui um link que direcionará para as instruções de preparo. O usuário poderá filtrar as receitas por nome no campo de busca localizado no menu superior, lado direito. Ainda no menu superior, o usuário poderá Sair da aplicação. Esta ação irá excluir o token de acesso _Local Storage_ e redirecionar o usuário para a Página de Login.

- [Voltar](#tabela-de-conteúdos)

## Tela da Cada Receita

Esta página trará a descrição do prato, tempo de preparo, ingredientes e modo de preparo. A página inicia com os botões referentes ao modo de preparo desabilitados.

- Usuário verifica se possui todos os ingredientes necessários.

  > Caso não possua todos os ingredientes, o usuário não poderá iniciar a preparação. Uma janela modal irá informar que o usuário deve ter todos os ingredientes para iniciar a preparação.

- Usuário inicia a preparação. Esta ação irá habilitar a marcação dos passos no modo de preparo e também irá disparar um cronometro que indicará o tempo de preparo. O menu inferior irá indicar o status de conclusão do prato e o tempo decorrido.
  > Caso não possua todos os passos concluídos, o usuário não poderá finalizar o prato.
- Usuário finaliza a preparação. Uma janela modal irá informar o tempo total de preparação do prato e, assim que fechada, redirecionará para a página de receitas.
- [Voltar](#tabela-de-conteúdos)

# Tecnologias

Principais ferramentas utilizadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Context API](https://pt-br.reactjs.org/docs/context.html)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)

[Voltar](#tabela-de-conteúdos)
