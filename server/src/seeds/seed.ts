import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

db.once('open', async () => {
  // Remove the parameters since your new cleanDB function doesn't take any
  await cleanDB();

  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});