import administrateurModel from '../models/administrateur.js';

export class AdministrateurController {
  async getAllAdministrateurs(req, res) {
    try {
      const administrateurs = await administrateurModel.getAll();
      res.json(administrateurs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching administrateurs' });
    }
  }

  async getAdministrateurById(req, res) {
    try {
      const id = req.params.id;
      const administrateur = await administrateurModel.getById(id);
      if (!administrateur) {
        res.status(404).json({ message: 'Administrateur not found' });
      } else {
        res.json(administrateur);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching administrateur' });
    }
  }

  async createAdministrateur(req, res) {
    try {
      const { nom, prenom, email, motDePasse } = req.body;
      const administrateur = await administrateurModel.create(nom, prenom, email, motDePasse);
      res.json(administrateur);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating administrateur' });
    }
  }

  async updateAdministrateur(req, res) {
    try {
      const id = req.params.id;
      const { nom, prenom, email, motDePasse } = req.body;
      const administrateur = await administrateurModel.update(id, nom, prenom, email, motDePasse);
      res.json(administrateur);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating administrateur' });
    }
  }

  async deleteAdministrateur(req, res) {
    try {
      const id = req.params.id;
      await administrateurModel.delete(id);
      res.json({ message: 'Administrateur supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting administrateur' });
    }
  }
}
