const express = require('express');
const path = require('path');
const admin = require('firebase-admin');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Adicionar suporte para JSON

// Inicializar Firebase Admin
try {
  require('./config/firebaseAdmin');
} catch (error) {
  console.log('Firebase Admin não configurado ainda. Configure para usar login social.');
}

app.use(express.static(path.join(__dirname, 'public')));

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  //Criar lógica de autenticação do login 
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.post('/cadastro', (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Verificar se os campos de senha e confirmar senha são iguais
  if (password !== confirmPassword) {
    // Se não forem iguais, redirecione de volta para o formulário de cadastro com uma mensagem de erro na URL
    res.redirect('/cadastro?error=As senhas não coincidem');
    return;
  }


  // Verificar se o usuário já existe no array de usuários
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    // Se o usuário já existir, redirecione de volta para o formulário de cadastro com uma mensagem de erro
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
  } else {
    // Se o usuário não existir, adicione-o ao array de usuários e redirecione para a página de boas-vindas (welcome.html)
    users.push({ username, password });
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
  }
});

// Rota para autenticação com Firebase
app.post('/auth/firebase', async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: 'Token não fornecido' });
    }

    // Verificar o token do Firebase
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;
    const name = decodedToken.name;
    const picture = decodedToken.picture;

    // Aqui você pode salvar o usuário no banco de dados ou fazer outras operações
    console.log('Usuário autenticado:', { uid, email, name });

    // Verificar se o usuário já existe no array
    const userExists = users.some((user) => user.username === email);

    if (!userExists) {
      users.push({
        username: email,
        uid: uid,
        name: name,
        picture: picture,
        provider: 'firebase'
      });
    }

    res.json({
      success: true,
      user: { uid, email, name, picture }
    });

  } catch (error) {
    console.error('Erro na autenticação Firebase:', error);
    res.status(401).json({ error: 'Token inválido', details: error.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
