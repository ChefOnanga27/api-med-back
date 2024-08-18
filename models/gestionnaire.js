

import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);

const gestionnaireModel = {
  create: async (nom, prenom, email, motDePasse) => {
    const query = 'INSERT INTO gestionnaires (nom, prenom, email, motDePasse) VALUES (?, ?, ?, ?)';
    const values = [nom, prenom, email, motDePasse];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating gestionnaire:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM gestionnaires';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching gestionnaires:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM gestionnaires WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching gestionnaire by ID:', error.message);
      throw error;
    }
  },

  update: async (id, nom, prenom, email, motDePasse) => {
    const query = 'UPDATE gestionnaires SET nom = ?, prenom = ?, email = ?, motDePasse = ? WHERE id = ?';
    const values = [nom, prenom, email, motDePasse, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating gestionnaire:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM gestionnaires WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting gestionnaire:', error.message);
      throw error;
    }
  }
};

export default gestionnaireModel;
