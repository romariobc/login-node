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

## Estrutura do Projeto

```
login-node-express-bootstrap/
│
├── config/                          # Configurações do Firebase
│   ├── firebaseAdmin.js            # Firebase Admin SDK (backend)
│   ├── firebaseConfig.js           # Configuração Firebase (cliente)
│   └── serviceAccountKey.json      # Credenciais Firebase (não commitado)
│
├── public/                          # Arquivos estáticos (frontend)
│   ├── cadastro.html               # Página de cadastro
│   ├── login.html                  # Página de login (com login social)
│   ├── welcome.html                # Página de boas-vindas
│   └── scripts.js                  # Scripts JavaScript
│
├── .env.example                     # Template de variáveis de ambiente
├── .gitignore                      # Arquivos ignorados pelo Git
├── app.js                          # Servidor Express (backend principal)
├── FIREBASE_SETUP.md               # Documentação de configuração Firebase
├── package.json                    # Dependências e scripts npm
└── README.md                       # Documentação do projeto
```

## Arquitetura

### Padrão: MVC Simplificado (Model-View-Controller)

O projeto utiliza uma arquitetura **cliente-servidor tradicional** com separação de responsabilidades:

#### Backend (Node.js + Express)
- **Servidor**: `app.js`
- **Padrão**: RESTful API simplificado
- **Rotas principais**:
  - `GET /` → Página de login
  - `GET /cadastro` → Página de cadastro
  - `POST /login` → Autenticação tradicional
  - `POST /cadastro` → Registro de usuário
  - `POST /auth/firebase` → Validação de token Firebase

#### Frontend (HTML + Bootstrap + JavaScript)
- **View**: Páginas HTML com Bootstrap 5.3.1
- **JavaScript**:
  - Módulos ES6 para Firebase
  - Async/await para chamadas de API
  - Event-driven programming

#### Autenticação (Híbrida)

**Login Tradicional:**
```
Cliente → POST /login → Validação local → Resposta
```

**Login Social (Firebase):**
```
Cliente → Firebase Auth (Google/Facebook/GitHub)
       → Obtém ID Token
       → POST /auth/firebase
       → Backend valida com Firebase Admin SDK
       → Resposta
```

#### Fluxo de Autenticação Social

```
1. Usuário clica em "Login com Google/Facebook/GitHub"
2. Firebase SDK abre popup OAuth do provedor
3. Usuário autentica no provedor escolhido
4. Firebase retorna ID Token
5. Frontend envia token para /auth/firebase
6. Backend valida token com Firebase Admin SDK
7. Backend salva usuário (se novo) no array
8. Retorna sucesso → Redireciona para /welcome.html
```

### Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **Frontend**: HTML5 + Bootstrap 5 + Vanilla JavaScript
- **Autenticação**: Firebase Authentication
- **Armazenamento**: In-Memory (Array) - Ideal para estudos
- **Segurança**: Firebase Admin SDK para validação de tokens

### Observações

- O armazenamento atual é **em memória** (dados são perdidos ao reiniciar o servidor)
- Ideal para **aprendizado e prototipagem**
- Pode ser facilmente migrado para um banco de dados real (MongoDB, PostgreSQL, etc.)
- Para produção, recomenda-se adicionar: bcrypt para senhas, sessões, HTTPS, rate limiting

## Contribuição

Este projeto foi criado apenas para fins de aprendizado e estudo. 
Sinta-se à vontade para explorá-lo, fazer melhorias e contribuir com novas ideias. 
Lembre-se de que a jornada de aprendizado em programação é cheia de desafios, mas com dedicação e perseverança, 
você pode se tornar um programador incrível! Continue praticando e nunca desista. Você está no caminho certo! 😄💻

## Autor

RomarioBC ...............#vaidarcerto!

## Licença

Este projeto está sob a licença [ISC](LICENSE).
