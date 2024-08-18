import hopitalModel from '../models/hopital.js';

export class HopitalController {
  async getAllHopitaux(req, res) {
    try {
      const hopitaux = await hopitalModel.getAll();
      res.json(hopitaux);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching hopitaux' });
    }
  }

  async getHopitalById(req, res) {
    try {
      const id = req.params.id;
      const hopital = await hopitalModel.getById(id);
      if (!hopital) {
        res.status(404).json({ message: 'Hopital not found' });
      } else {
        res.json(hopital);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching hopital' });
    }
  }

  async createHopital(req, res) {
    try {
      const { nom, adresse, telephone, email } = req.body;
      const hopital = await hopitalModel.create(nom, adresse, telephone, email);
      res.json(hopital);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating hopital' });
    }
  }

  async updateHopital(req, res) {
    try {
      const id = req.params.id;
      const { nom, adresse, telephone, email } = req.body;
      const hopital = await hopitalModel.update(id, nom, adresse, telephone, email);
      res.json(hopital);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating hopital' });
    }
  }

  async deleteHopital(req, res) {
    try {
      const id = req.params.id;
      await hopitalModel.delete(id);
      res.json({ message: 'Hopital supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting hopital' });
    }
  }
}
