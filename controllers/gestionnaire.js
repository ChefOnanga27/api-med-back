import gestionnaireModel from '../models/gestionnaire.js';

export class GestionnaireController {
  async getAllGestionnaires(req, res) {
    try {
      const gestionnaires = await gestionnaireModel.getAll();
      res.json(gestionnaires);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching gestionnaires' });
    }
  }

  async getGestionnaireById(req, res) {
    try {
      const id = req.params.id;
      const gestionnaire = await gestionnaireModel.getById(id);
      if (!gestionnaire) {
        res.status(404).json({ message: 'Gestionnaire not found' });
      } else {
        res.json(gestionnaire);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching gestionnaire' });
    }
  }

  async createGestionnaire(req, res) {
    try {
      const { nom, prenom, email, motDePasse } = req.body;
      const gestionnaire = await gestionnaireModel.create(nom, prenom, email, motDePasse);
      res.json(gestionnaire);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating gestionnaire' });
    }
  }

  async updateGestionnaire(req, res) {
    try {
      const id = req.params.id;
      const { nom, prenom, email, motDePasse } = req.body;
      const gestionnaire = await gestionnaireModel.update(id, nom, prenom, email, motDePasse);
      res.json(gestionnaire);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating gestionnaire' });
    }
  }

  async deleteGestionnaire(req, res) {
    try {
      const id = req.params.id;
      await gestionnaireModel.delete(id);
      res.json({ message: 'Gestionnaire supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting gestionnaire' });
    }
  }
}
