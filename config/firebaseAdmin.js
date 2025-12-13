const admin = require('firebase-admin');
const path = require('path');

// Inicializar Firebase Admin SDK
// IMPORTANTE: Coloque o arquivo serviceAccountKey.json na pasta config/
// Baixe em: Firebase Console > Project Settings > Service Accounts > Generate New Private Key

let firebaseAdmin;

try {
  const serviceAccount = require('./serviceAccountKey.json');

  firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  console.log('Firebase Admin SDK inicializado com sucesso!');
} catch (error) {
  console.error('Erro ao inicializar Firebase Admin SDK:', error.message);
  console.log('Por favor, adicione o arquivo serviceAccountKey.json na pasta config/');
}

module.exports = firebaseAdmin;
