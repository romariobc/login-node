# login-node-express-bootstrap

# Projeto de Login com Node.js, Express e Bootstrap

Este é um projeto de exemplo que implementa um sistema simples de login usando Node.js, Express e Bootstrap. 
O objetivo deste projeto é fornecer um ponto de partida para estudos e aprendizado sobre autenticação básica 
em aplicativos web utilizando essas tecnologias.

## Funcionalidades

- Página de login com campos de nome de usuário e senha.
- **Login Social com Firebase:**
  - Login com Google
  - Login com Facebook
  - Login com GitHub
- Página de cadastro com campos para nome completo, e-mail, senha e confirmação de senha.
- Verificação de senha e confirmação de senha no cadastro.
- Simulação de armazenamento de usuários em um array (não há acesso a banco de dados).
- Página de boas-vindas após o cadastro bem-sucedido.
- Autenticação segura com Firebase Admin SDK no backend.

## Como usar

1. Clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/login-node-express-bootstrap.git
```

2. Instale as dependências do projeto:

```bash
cd login-node-express-bootstrap
npm install
```

3. Configure o Firebase (para habilitar login social):

**IMPORTANTE:** Para usar o login social, você precisa configurar o Firebase primeiro.

Siga as instruções detalhadas no arquivo [FIREBASE_SETUP.md](FIREBASE_SETUP.md) para:
- Criar um projeto no Firebase
- Habilitar os provedores de login (Google, Facebook, GitHub)
- Obter as credenciais do Firebase
- Configurar o arquivo `serviceAccountKey.json`

**Nota:** A aplicação funcionará mesmo sem o Firebase configurado, mas apenas o login tradicional estará disponível.

4. Inicie o servidor:

```bash
node app.js
```

5. Abra o navegador e acesse `http://localhost:3000` para acessar a página de login.

## Contribuição

Este projeto foi criado apenas para fins de aprendizado e estudo. 
Sinta-se à vontade para explorá-lo, fazer melhorias e contribuir com novas ideias. 
Lembre-se de que a jornada de aprendizado em programação é cheia de desafios, mas com dedicação e perseverança, 
você pode se tornar um programador incrível! Continue praticando e nunca desista. Você está no caminho certo! 😄💻

## Autor

RomarioBC ...............#vaidarcerto!

## Licença

Este projeto está sob a licença [ISC](LICENSE).
