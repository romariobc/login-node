const admin = require('firebase-admin');
const path = require('path');

// Inicializar Firebase Admin SDK
// IMPORTANTE: Coloque o arquivo serviceAccountKey.json na pasta config/
// Baixe em: Firebase Console > Project Settings > Service Accounts > Generate New Private Key

let firebaseAdmin;

try {
  let serviceAccount;

  // No Vercel, o arquivo .json não é enviado (gitignore). Usaremos uma Variável de Ambiente.
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } else {
    // Desenvolvimento local
    serviceAccount = require('./serviceAccountKey.json');
  }

  firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  console.log('Firebase Admin SDK inicializado com sucesso!');
} catch (error) {
  console.error('Erro ao inicializar Firebase Admin SDK:', error.message);
  console.log('Configure o arquivo local serviceAccountKey.json ou a variável FIREBASE_SERVICE_ACCOUNT no Vercel.');
}

module.exports = firebaseAdmin;
