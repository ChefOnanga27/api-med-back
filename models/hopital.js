

import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);

const hopitalModel = {
  create: async (nom, adresse, telephone, email) => {
    const query = 'INSERT INTO hopitaux (nom, adresse, telephone, email) VALUES (?, ?, ?, ?)';
    const values = [nom, adresse, telephone, email];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating hopital:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM hopitaux';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching hopitaux:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM hopitaux WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching hopital by ID:', error.message);
      throw error;
    }
  },

  update: async (id, nom, adresse, telephone, email) => {
    const query = 'UPDATE hopitaux SET nom = ?, adresse = ?, telephone = ?, email = ? WHERE id = ?';
    const values = [nom, adresse, telephone, email, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating hopital:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM hopitaux WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting hopital:', error.message);
      throw error;
    }
  }
};

export default hopitalModel;
