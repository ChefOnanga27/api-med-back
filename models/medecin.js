import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);


const medecinModel = {
  create: async (nom, prenom, specialite, telephone, email, hopitalId) => {
    const query = 'INSERT INTO medecins (nom, prenom, specialite, telephone, email, hopitalId) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nom, prenom, specialite, telephone, email, hopitalId];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating medecin:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM medecins';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching medecins:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM medecins WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching medecin by ID:', error.message);
      throw error;
    }
  },

  update: async (id, nom, prenom, specialite, telephone, email, hopitalId) => {
    const query = 'UPDATE medecins SET nom = ?, prenom = ?, specialite = ?, telephone = ?, email = ?, hopitalId = ? WHERE id = ?';
    const values = [nom, prenom, specialite, telephone, email, hopitalId, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating medecin:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM medecins WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting medecin:', error.message);
      throw error;
    }
  }
};

export default medecinModel;
