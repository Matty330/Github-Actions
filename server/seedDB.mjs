import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

// Set up directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load questions data
const pythonQuestionsPath = path.join(__dirname, 'dist/seeds/pythonQuestions.json');
const pythonQuestions = JSON.parse(fs.readFileSync(pythonQuestionsPath, 'utf8'));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/coding-quiz';
console.log(`Connecting to MongoDB at ${MONGODB_URI}`);
mongoose.connect(MONGODB_URI);

// Define the schema that matches your actual data structure
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      }
    }
  ]
});

const Question = mongoose.model('Question', QuestionSchema);

// Seed function
async function seedDatabase() {
  try {
    console.log('Connected to database');
    
    // Clear existing questions
    await Question.deleteMany({});
    console.log('Cleared existing questions');
    
    // Insert new questions
    await Question.insertMany(pythonQuestions);
    console.log(`Inserted ${pythonQuestions.length} questions successfully!`);
    
    mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();