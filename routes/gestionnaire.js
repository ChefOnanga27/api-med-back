import express from 'express';
import { GestionnaireController } from '../controllers/gestionnaire.js';

const gestionnaire = express.Router();
const gestionnaireController = new GestionnaireController();

// Route pour obtenir tous les gestionnaires
gestionnaire.get('/gestionnaires', gestionnaireController.getAllGestionnaires);

// Route pour obtenir un gestionnaire par ID
gestionnaire.get('/gestionnaires/:id', gestionnaireController.getGestionnaireById);

// Route pour créer un gestionnaire
gestionnaire.post('/gestionnaires', gestionnaireController.createGestionnaire);

// Route pour mettre à jour un gestionnaire
gestionnaire.put('/gestionnaires/:id', gestionnaireController.updateGestionnaire);

// Route pour supprimer un gestionnaire
gestionnaire.delete('/gestionnaires/:id', gestionnaireController.deleteGestionnaire);

export default gestionnaire;
