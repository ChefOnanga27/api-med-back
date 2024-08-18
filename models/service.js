import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);

const serviceModel = {
  create: async (nom, description, hopitalId) => {
    const query = 'INSERT INTO services (nom, description, hopitalId) VALUES (?, ?, ?)';
    const values = [nom, description, hopitalId];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating service:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM services';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching services:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM services WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching service by ID:', error.message);
      throw error;
    }
  },

  update: async (id, nom, description, hopitalId) => {
    const query = 'UPDATE services SET nom = ?, description = ?, hopitalId = ? WHERE id = ?';
    const values = [nom, description, hopitalId, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating service:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM services WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting service:', error.message);
      throw error;
    }
  }
};

export default serviceModel;
