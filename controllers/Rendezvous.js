import rendezvousModel from '../models/Rendezvous.js';

export class RendezvousController {
  async getAllRendezvous(req, res) {
    try {
      const rendezvous = await rendezvousModel.getAll();
      res.json(rendezvous);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching rendezvous' });
    }
  }

  async getRendezvousById(req, res) {
    try {
      const id = req.params.id;
      const rendezvous = await rendezvousModel.getById(id);
      if (!rendezvous) {
        res.status(404).json({ message: 'Rendezvous not found' });
      } else {
        res.json(rendezvous);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching rendezvous' });
    }
  }

  async createRendezvous(req, res) {
    try {
      const { date, heure, patientId, medecinId } = req.body;
      const rendezvous = await rendezvousModel.create(date, heure, patientId, medecinId);
      res.json(rendezvous);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating rendezvous' });
    }
  }

  async updateRendezvous(req, res) {
    try {
      const id = req.params.id;
      const { date, heure, patientId, medecinId } = req.body;
      const rendezvous = await rendezvousModel.update(id, date, heure, patientId, medecinId);
      res.json(rendezvous);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating rendezvous' });
    }
  }

  async deleteRendezvous(req, res) {
    try {
      const id = req.params.id;
      await rendezvousModel.delete(id);
      res.json({ message: 'Rendezvous supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting rendezvous' });
    }
  }
}
