# Minha API Rest

## Decrição
Esta é uma API RESTful desenvolvida para gerenciar Usuarios. Ela Permite Criar, visualizar, atualizar e deletar Usuarios. Além De Ter Rotas Para Login e Registro com Autenticação e Token De Acesso.

## Tecnologias Usadas
● Nodejs

● Express

● MYSQL

● sequelize

● bcrypt para hash de senhas

● JWT - para gerar tokes de acesso.

## Endpoints

| Método | Endpoint       | Descrição                    |
|--------|----------------|---------------------------------|
| GET    | `/users`    | Retorna todos os usuarios       |
| GET    | `/users/:id`| Retorna um usuario específico   |
| POST   | `/auth/register` | Registra  novo usuario     |
| POST   | `/auth/login` | Faz o login do Usuario e gera um Token de acesso.
| PUT    | `/users/updateUser/:id`| Atualiza um usuario  |
| GET | `/profile` | rota protegida. apenas usuarios logados podem ter acesso.
| DELETE | `/users/deleteUser/:id`| Deleta um usuario    |

## Como Iniciar o Projeto Localmente
Passo 1 - clonar o repositório

git clone https://github.com/Emanoellima-dev/API-REST.git

Passo 2 - cd API-REST

Passo 3 - npm install

Passo 4 - crie um arquivo .env na raiz do peojeto baseado no arquivo [.env.example](https://github.com/Emanoellima-dev/API-REST/blob/main/.env.example) e configurar as viriaveis de ambiente.

Passo 5 - Iniciar o servidor: "npm start".
Após isso a API estará disponivel localmente.

## Observaçoes
a API publica não vai ser divulgada aqui. para iniciar o projeto localmente siga as inrruçoes acima.
