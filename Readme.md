# Minha API Rest

## Decrição
Esta é uma API RESTful desenvolvida para gerenciar Usuarios. Ela Permite Criar, visualizar, atualizar e deletar Usuarios. Além De Ter Rotas Para Login e Registro com Autenticação e Token De Acesso.

## Tecnologias Usadas
● Nodejs
● Express
● MYSQL
● sequelize
● bcrypt para hash de senhas

## Endpoints

| Método | Endpoint       | Descrição                    |
|--------|----------------|---------------------------------|
| GET    | `/users`    | Retorna todos os usuarios       |
| GET    | `/users/:id`| Retorna um usuario específico   |
| POST   | `/auth/register` | Registra  novo usuario     |
| POST   | `/auth/login` | Faz o login do Usuario e gera um Token de acesso.
| PUT    | `/users/updateUser/:id`| Atualiza um produto existente  |
| GET | `/profile` | rota protegida. apenas usuarios logados podem ter acesso.
| DELETE | `/users/deleteUser/:id`| Deleta um produto    |

## Como Iniciar o Projeto Localmente

