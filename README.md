## KImóveis
Projeto realizado no quarto módulo do curso de **Formação em Desenvolvimento Full Stack da Kenzie Academy Brasil**

O objetivo desse projeto é desenvolver um serviço de back-end responsável por gerenciar uma imobiliária utilizando **TypeORM** e **relacionamentos**


Rotas e suas funcionalidades:


- **POST /users**

Rota para criação de usuário com os seguintes dados:
1. name: string;
2. email: string;
3. password: string (armazenada como hash);
4. isAdm: boolean;
5. isActive: boolean (default = true), gerado no momento da validação dos dados;
6. createdAt: Date, gerado no momento da validação dos dados;
7. updatedAt: Date, iniciado com o valor de criação e atualizado sempre que esse usuário for editado;
8. id: string (uuid), gerado no momento da validação dos dados.

A rota de criação retorna todos os dados, com exceção da hash de senha.
Não é possível cadastrar dois usuário com o mesmo e-mail.


- **GET /users**

A rota retorna todos os dados dos usuários, com exceção da hash de senha. 
Pode ser acessada apenas por administradores.


- **PATCH /users/<id>**

A rota serve para atualizar os dados do usuário,.
Não é possível atualizar os campos id, isAdm e isActive.
Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.


- **DELETE /users/<id>**

A rota realiza um soft delete do usuário, alterando isActive para false.
Pode ser acessada apenas por administradores.
Não é possível realizar um soft delete em um usuário já inativo.


- **POST /login**

Recebendo email e password.
O login valida se o usuário existe e se a senha está correta.


- **POST /categories**

Rota para criação de categorias com os seguintes dados:
1. name: string;
2. id: string (uuid), gerado no momento da validação dos dados.

A rota pode ser acessada apenas por administradores.


- **GET /categories**

A rota retorna todos os dados das categorias.
Não precisa de autenticação para ser acessada.


- **GET /categories/<id>/properties**

A rota retorna todos os imóveis que pertencem a uma determinada categoria.
Não precisa de autenticação para ser acessada.


- **POST /properties**

Rota para criação de um imóvel com os seguintes dados:
1. value: number;
2. size: number;
3. address: um objeto com os seguintes dados:
  
  - district: string;
  
  - zipCode: string;
  
  - number: string;
  
  - city: string;
  
  - state: string.
  
4. categoryId: string;
5. id: string (uuid), gerado no momento da validação dos dados;
6. sold: boolean (default = false), gerado no momento da validação dos dados;
7.createdAt: Date, gerado no momento da validação dos dados;
8.updatedAt: Date, gerado no momento da validação dos dados com o valor de criação e deve ser atualizado sempre que esse imóvel for editado.

Não pode cadastrar dois imóveis com o mesmo endereço.
Não pode cadastrar imóveis com o campo state maior que 2 dígitos.
Não pode cadastrar imóveis com o campo zipCode maior que 8 dígitos.
A rota pode ser acessada apenas por administradores.


- **GET /properties**

A rota retorna todos os imóveis.
Não precisa de autenticação para ser acessada.


- **POST /schedules**

Rota responsável pelo agendamento de uma visita a um imóvel com os seguintes dados:
1. date: string salvo como date no banco de dados;
2. hour: string salvo como time no banco de dados;
4. propertieId: string;
5. userId: string (uuid) pego através do token do usuário;
6. id: string (uuid), gerado no momento da validação dos dados.

Não é possível agendar uma visita a um imóvel com a mesma data e hora.
Só é possível agendar uma visita durante horário comercial (08:00 as 18:00).
Só é possível agendar uma visita em dias úteis (segunda à sexta).


- **GET /schedules/properties/<id>**

A rota retorna todos os agendamentos de um imóvel.
Pode ser acessada apenas por administradores.
