import express from 'express';
import { HopitalController } from '../controllers/hopital.js';

const hopital = express.Router();
const hopitalController = new HopitalController();

// Route pour obtenir tous les hopitaux
hopital.get('/hopitaux', hopitalController.getAllHopitaux);

// Route pour obtenir un hopital par ID
hopital.get('/hopitaux/:id', hopitalController.getHopitalById);

// Route pour créer un hopital
hopital.post('/hopitaux', hopitalController.createHopital);

// Route pour mettre à jour un hopital
hopital.put('/hopitaux/:id', hopitalController.updateHopital);

// Route pour supprimer un hopital
hopital.delete('/hopitaux/:id', hopitalController.deleteHopital);

export default hopital;
