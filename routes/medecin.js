import express from 'express';
import { MedecinController } from '../controllers/medecin.js';

const medecin = express.Router();
const medecinController = new MedecinController();

// Route pour obtenir tous les medecins
medecin.get('/medecins', medecinController.getAllMedecins);

// Route pour obtenir un medecin par ID
medecin.get('/medecins/:id', medecinController.getMedecinById);

// Route pour créer un medecin
medecin.post('/medecins', medecinController.createMedecin);

// Route pour mettre à jour un medecin
medecin.put('/medecins/:id', medecinController.updateMedecin);

// Route pour supprimer un medecin
medecin.delete('/medecins/:id', medecinController.deleteMedecin);

export default medecin;
