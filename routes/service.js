import express from 'express';
import { ServiceController } from '../controllers/service.js';

const service = express.Router();
const serviceController = new ServiceController();

// Route pour obtenir tous les services
service.get('/services', serviceController.getAllServices);

// Route pour obtenir un service par ID
service.get('/services/:id', serviceController.getServiceById);

// Route pour créer un service
service.post('/services', serviceController.createService);

// Route pour mettre à jour un service
service.put('/services/:id', serviceController.updateService);

// Route pour supprimer un service
service.delete('/services/:id', serviceController.deleteService);

export default service;
