import { Question } from '../models/index.js';

// Get all questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error('Error in getAllQuestions:', err);
    res.status(500).json({ message: 'Server error fetching questions' });
  }
};

// Get random questions (assuming this function already exists in some form)
export const getRandomQuestions = async (req, res) => {
  try {
    // Get a random set of questions (e.g., 10 questions)
    const count = await Question.countDocuments();
    const random = Math.floor(Math.random() * count);
    
    // Fetch 10 random questions, or fewer if there aren't enough
    const limit = Math.min(10, count);
    const questions = await Question.find().skip(random).limit(limit);
    
    // If we didn't get enough questions from the skip/limit approach, 
    // fetch the remaining from the beginning
    if (questions.length < limit && random + questions.length > count) {
      const remaining = limit - questions.length;
      const additionalQuestions = await Question.find().limit(remaining);
      questions.push(...additionalQuestions);
    }
    
    res.json(questions);
  } catch (err) {
    console.error('Error in getRandomQuestions:', err);
    res.status(500).json({ message: 'Server error fetching random questions' });
  }
};

// Export any other question-related controller functions