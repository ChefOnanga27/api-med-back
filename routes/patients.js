import express from 'express';
import { PatientController } from '../controllers/patient.js';

const patient = express.Router();
const patientController = new PatientController();

// Route pour obtenir tous les patients
patient.get('/patients', patientController.getAllPatients);

// Route pour obtenir un patient par ID
patient.get('/patients/:id', patientController.getPatientById);

// Route pour créer un patient
patient.post('/patients', patientController.createPatient);

// Route pour mettre à jour un patient
patient.put('/patients/:id', patientController.updatePatient);

// Route pour supprimer un patient
patient.delete('/patients/:id', patientController.deletePatient);

export default patient;
