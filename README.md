GitHub Actions CI/CD Quiz App

A React-based tech quiz application with GitHub Actions CI/CD pipeline integration.

Description

This application is a tech quiz that tests users' knowledge of programming concepts. The main focus of this project was implementing a CI/CD pipeline using GitHub Actions to:

1. Run Cypress component tests automatically when Pull Requests are made to the develop branch
2. Automatically deploy the application to Render when code is merged to the main branch

Technologies Used

- React with TypeScript for the frontend
- Node.js/Express for the backend
- MongoDB for database storage
- GitHub Actions for CI/CD pipeline
- Cypress for component testing
- Render for deployment

Installation

1. Clone the repository
   git clone git@github.com:Matty330/Github-Actions.git
   
2. Install dependencies:
   npm install
   
3. Create a `.env` file in the server directory with your MongoDB connection string:
   MONGODB_URI='your-mongodb-connection-string'
   
4. Seed the database:
   npm run seed
   
5. Start the development server:
   npm run develop

CI/CD Workflow

This project implements a GitFlow-inspired branch strategy:
- Feature branches for new features/fixes
- All features are merged to the `develop` branch
- The `main` branch is used for production deployment

GitHub Actions workflows automatically:
- Run Cypress tests when PRs are made to the develop branch
- Deploy to Render when code is merged to the main branch

Deployed Application

The application is deployed at: https://github-actions-7x12.onrender.com

Repository

GitHub repository: git@github.com:Matty330/Github-Actions.git