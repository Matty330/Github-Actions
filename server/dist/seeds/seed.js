import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import db from '../config/connection.js';
import { Question } from '../models/index.js';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON with fs
const pythonQuestionsPath = path.join(__dirname, './pythonQuestions.json');
const pythonQuestions = JSON.parse(fs.readFileSync(pythonQuestionsPath, 'utf8'));

// Clear the database
db.once('open', async () => {
  try {
    console.log('Connected to database');
    // Clear the questions collection
    await Question.deleteMany({});

    // Insert questions
    await Question.insertMany(pythonQuestions);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
});