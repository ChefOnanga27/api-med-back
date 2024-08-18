import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);

const rendezvousModel = {
  create: async (date, heure, patientId, medecinId) => {
    const query = 'INSERT INTO rendezvous (date, heure, patientId, medecinId) VALUES (?, ?, ?, ?)';
    const values = [date, heure, patientId, medecinId];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating rendezvous:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM rendezvous';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching rendezvous:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM rendezvous WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching rendezvous by ID:', error.message);
      throw error;
    }
  },

  update: async (id, date, heure, patientId, medecinId) => {
    const query = 'UPDATE rendezvous SET date = ?, heure = ?, patientId = ?, medecinId = ? WHERE id = ?';
    const values = [date, heure, patientId, medecinId, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating rendezvous:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM rendezvous WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting rendezvous:', error.message);
      throw error;
    }
  }
};

export default rendezvousModel;
