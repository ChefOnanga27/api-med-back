import serviceModel from '../models/service.js';

export class ServiceController {
  async getAllServices(req, res) {
    try {
      const services = await serviceModel.getAll();
      res.json(services);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching services' });
    }
  }

  async getServiceById(req, res) {
    try {
      const id = req.params.id;
      const service = await serviceModel.getById(id);
      if (!service) {
        res.status(404).json({ message: 'Service not found' });
      } else {
        res.json(service);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching service' });
    }
  }

  async createService(req, res) {
    try {
      const { nom, description, hopitalId } = req.body;
      const service = await serviceModel.create(nom, description, hopitalId);
      res.json(service);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating service' });
    }
  }

  async updateService(req, res) {
    try {
      const id = req.params.id;
      const { nom, description, hopitalId } = req.body;
      const service = await serviceModel.update(id, nom, description, hopitalId);
      res.json(service);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating service' });
    }
  }

  async deleteService(req, res) {
    try {
      const id = req.params.id;
      await serviceModel.delete(id);
      res.json({ message: 'Service supprimé avec succès' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting service' });
    }
  }
}
