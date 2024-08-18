
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { dbConfig } from './config/db.js';

import router from './routes/administrateur.js';
import gestionnaire from './routes/gestionnaire.js';
import hopital from './routes/hopital.js';
import medecin from './routes/medecin.js';
import patient from './routes/patients.js';
import  rendezvous from './routes/Rendezvous.js';


// Charger les variables d'environnement
dotenv.config();

import express from 'express';
const app = express();

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});


// Création de la connexion à la base de données
const db = mysql.createPool(dbConfig);

// Vérification de la connexion à la base de données
async function testDbConnection() {
  try {
    await db.execute('SELECT 1');
    console.log('Connecté à la base de données !');
  } catch (err) {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); // Arrête le programme en cas d'erreur
  }
}

// Appel de la fonction de vérification de la connexion à la base de données
testDbConnection();

// Route pour tester la connexion à la base de données
app.get('/test-db', async (req, res) => {
  try {
    await db.execute('SELECT 1');
    res.send('Connecté à la base de données !');
  } catch (err) {
    console.error('Erreur de connexion à la base de données :', err);
    res.status(500).send('Erreur de connexion à la base de données');
  }
});

//appel des routes
app.get('/', (req, res) => {
  res.send('hello wolrd');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', rendezvous)
app.use('/api', patient)
app.use('/api', medecin)
app.use('/api', hopital)
app.use('api',gestionnaire)
app.use('router',router)

