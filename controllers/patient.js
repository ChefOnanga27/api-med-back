import patientModel from '../models/patient.js';

export class PatientController {
  async getAllPatients(req, res) {
    try {
      const patients = await patientModel.getAll();
      res.json(patients);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching patients' });
    }
  }

  async getPatientById(req, res) {
    try {
      const id = req.params.id;
      const patient = await patientModel.getById(id);
      if (!patient) {
        res.status(404).json({ message: 'Patient not found' });
      } else {
        res.json(patient);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching patient' });
    }
  }

  async createPatient(req, res) {
    try {
      const { nom, prenom, dateNaissance, telephone, email, adresse } = req.body;
      const patient = await patientModel.create(nom, prenom, dateNaissance, telephone, email, adresse);
      res.json(patient);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating patient' });
    }
  }

  async updatePatient(req, res) {
    try {
      const id = req.params.id;
      const { nom, prenom, dateNaissance, telephone, email, adresse } = req.body;
      const patient = await patientModel.update(id, nom, prenom, dateNaissance, telephone, email, adresse);
      res.json(patient);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating patient' });
    }
  }

  async deletePatient(req, res) {
    try {
      const id = req.params.id;
      await patientModel.delete(id);
      res.json({ message: 'Patient supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting patient' });
    }
  }
}
