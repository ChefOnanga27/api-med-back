import medecinModel from '../models/medecin.js';

export class MedecinController {
  async getAllMedecins(req, res) {
    try {
      const medecins = await medecinModel.getAll();
      res.json(medecins);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching medecins' });
    }
  }

  async getMedecinById(req, res) {
    try {
      const id = req.params.id;
      const medecin = await medecinModel.getById(id);
      if (!medecin) {
        res.status(404).json({ message: 'Medecin not found' });
      } else {
        res.json(medecin);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching medecin' });
    }
  }

  async createMedecin(req, res) {
    try {
      const { nom, prenom, specialite, telephone, email, hopitalId } = req.body;
      const medecin = await medecinModel.create(nom, prenom, specialite, telephone, email, hopitalId);
      res.json(medecin);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating medecin' });
    }
  }

  async updateMedecin(req, res) {
    try {
      const id = req.params.id;
      const { nom, prenom, specialite, telephone, email, hopitalId } = req.body;
      const medecin = await medecinModel.update(id, nom, prenom, specialite, telephone, email, hopitalId);
      res.json(medecin);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating medecin' });
    }
  }

  async deleteMedecin(req, res) {
    try {
      const id = req.params.id;
      await medecinModel.delete(id);
      res.json({ message: 'Medecin supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting medecin' });
    }
  }
}
