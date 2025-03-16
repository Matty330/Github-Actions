import express from 'express';
const router = express.Router();
import { getRandomQuestions, getAllQuestions } from '../../controllers/questionController.js';

// Keep your existing random route
router.route('/random').get(getRandomQuestions);

// Add a new route for getting all questions
router.route('/').get(getAllQuestions);

export default router;