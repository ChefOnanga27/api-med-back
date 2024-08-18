import express from 'express';
import { AdministrateurController } from '../controllers/administrateur.js';

const router = express.Router();
const administrateurController = new AdministrateurController();

// Route pour obtenir tous les administrateurs
router.get('/administrateurs', administrateurController.getAllAdministrateurs);

// Route pour obtenir un administrateur par ID
router.get('/administrateurs/:id', administrateurController.getAdministrateurById);

// Route pour créer un administrateur
router.post('/administrateurs', administrateurController.createAdministrateur);

// Route pour mettre à jour un administrateur
router.put('/administrateurs/:id', administrateurController.updateAdministrateur);

// Route pour supprimer un administrateur
router.delete('/administrateurs/:id', administrateurController.deleteAdministrateur);

export default router;
