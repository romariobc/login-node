# Configuração do Firebase para Login Social

Este guia explica como configurar o Firebase para habilitar o login social com Google, Facebook e GitHub.

## 1. Criar um Projeto no Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto" ou "Create a project"
3. Dê um nome ao seu projeto
4. Siga os passos de criação

## 2. Configurar Authentication

1. No menu lateral, clique em **Authentication**
2. Clique em **Get Started**
3. Na aba **Sign-in method**, habilite os provedores que deseja usar:

### Google
- Clique em **Google**
- Ative o toggle
- Configure um email de suporte
- Clique em **Salvar**

### Facebook
- Clique em **Facebook**
- Ative o toggle
- Você precisará:
  - Criar um app no [Facebook Developers](https://developers.facebook.com/)
  - Copiar o App ID e App Secret do Facebook
  - Adicionar a URL de callback do Firebase no app do Facebook
- Clique em **Salvar**

### GitHub
- Clique em **GitHub**
- Ative o toggle
- Você precisará:
  - Criar um OAuth App no [GitHub Settings](https://github.com/settings/developers)
  - Copiar o Client ID e Client Secret
  - Adicionar a URL de callback do Firebase
- Clique em **Salvar**

## 3. Obter Credenciais do Firebase (Frontend)

1. No Firebase Console, clique no ícone de engrenagem ⚙️ > **Configurações do projeto**
2. Na seção **Seus apps**, clique no ícone Web `</>`
3. Registre seu app
4. Copie o objeto `firebaseConfig`
5. Cole essas credenciais no arquivo `/public/login.html` (linhas 92-98)

Exemplo:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxx"
};
```

## 4. Obter Credenciais do Firebase Admin SDK (Backend)

1. No Firebase Console, vá para **Configurações do projeto** (ícone ⚙️)
2. Clique na aba **Contas de serviço**
3. Clique em **Gerar nova chave privada**
4. Um arquivo JSON será baixado
5. Renomeie o arquivo para `serviceAccountKey.json`
6. Coloque o arquivo na pasta `/config/`

**IMPORTANTE:** O arquivo `serviceAccountKey.json` contém credenciais sensíveis e NÃO deve ser commitado no Git. Ele já está no `.gitignore`.

## 5. Configurar URLs Autorizadas

Para que o login funcione em diferentes ambientes:

1. No Firebase Console > **Authentication** > **Settings**
2. Adicione seus domínios autorizados em **Authorized domains**:
   - `localhost` (para desenvolvimento)
   - Seu domínio de produção

## 6. Testar a Aplicação

1. Inicie o servidor:
```bash
npm start
```

2. Acesse http://localhost:3000

3. Clique em um dos botões de login social

4. Complete o fluxo de autenticação

## Solução de Problemas

### Erro: "Firebase Admin não configurado"
- Verifique se o arquivo `serviceAccountKey.json` está na pasta `/config/`

### Erro: "auth/operation-not-allowed"
- Verifique se habilitou o provedor de login no Firebase Console

### Erro: "auth/unauthorized-domain"
- Adicione o domínio aos domínios autorizados nas configurações do Firebase

### Erro no login com Facebook/GitHub
- Verifique se configurou corretamente o App ID e Secret
- Verifique se a URL de callback está correta

## Recursos Adicionais

- [Documentação do Firebase Authentication](https://firebase.google.com/docs/auth)
- [Configurar login com Google](https://firebase.google.com/docs/auth/web/google-signin)
- [Configurar login com Facebook](https://firebase.google.com/docs/auth/web/facebook-login)
- [Configurar login com GitHub](https://firebase.google.com/docs/auth/web/github-auth)
