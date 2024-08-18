import mysql from 'mysql2/promise';
import { dbConfig } from '../config/db.js';

const db = mysql.createPool(dbConfig);


const patientModel = {
  create: async (nom, prenom, dateNaissance, telephone, email, adresse) => {
    const query = 'INSERT INTO patients (nom, prenom, dateNaissance, telephone, email, adresse) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [nom, prenom, dateNaissance, telephone, email, adresse];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error creating patient:', error.message);
      throw error;
    }
  },

  getAll: async () => {
    const query = 'SELECT * FROM patients';
    try {
      const [results] = await db.promise().query(query);
      return results;
    } catch (error) {
      console.error('Error fetching patients:', error.message);
      throw error;
    }
  },

  getById: async (id) => {
    const query = 'SELECT * FROM patients WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results[0];
    } catch (error) {
      console.error('Error fetching patient by ID:', error.message);
      throw error;
    }
  },

  update: async (id, nom, prenom, dateNaissance, telephone, email, adresse) => {
    const query = 'UPDATE patients SET nom = ?, prenom = ?, dateNaissance = ?, telephone = ?, email = ?, adresse = ? WHERE id = ?';
    const values = [nom, prenom, dateNaissance, telephone, email, adresse, id];
    try {
      const [results] = await db.promise().query(query, values);
      return results;
    } catch (error) {
      console.error('Error updating patient:', error.message);
      throw error;
    }
  },

  delete: async (id) => {
    const query = 'DELETE FROM patients WHERE id = ?';
    try {
      const [results] = await db.promise().query(query, [id]);
      return results;
    } catch (error) {
      console.error('Error deleting patient:', error.message);
      throw error;
    }
  }
};

export default patientModel;
