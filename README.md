# Data Upload System

This is a frontend project for a data upload system that allows users to upload CSV files, validate the data, and display errors for correction and retry.

## Features

- CSV file upload
- Data validation
- Display of validation errors
- Retry failed records
- Error handling
- Intuitive user interface

## Technologies

- React
- Vite
- CSS Modules

## Prerequisites

Make sure you have the following components installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## Installation

1. Clone this repository to your local machine:

```sh
   git clone https://github.com/your-username/your-repository.git
```

```sh
   cd your-repository
```

2. Navigate to the project directory:

```sh
   cd your-repository
```

3. Install the project dependencies:

```sh
   npm install
```

or

```sh
   yarn install
```

## Running the Project

To run the project in development mode, use the following command:

```sh
   npm run dev
```

or

```sh
   yarn dev
```

The project will be available at:

```sh
 https://warm-custard-f50340.netlify.app/
```

## Project Structure

The project structure is as follows:

```sh
 src/
├── components/
│   ├── App.jsx
│   ├── App.module.css
│   ├── AppRoutes.jsx
│   ├── PrivateRoute.jsx
│   ├── Button.jsx
│   ├── Button.module.css
│   ├── ErrorModal.jsx
│   ├── SuccessModal.jsx
│   ├── Home.jsx
│   ├── Home.module.css
│   ├── LoginForm.jsx
│   ├── LoginForm.module.css
│   ├── NotFoundPage.jsx
│   ├── NotFoundPage.module.css
│   ├── ResultsDisplay.jsx
│   ├── ResultsDisplay.module.css
│   ├── SignupForm.jsx
│   ├── SignupForm.module.css
│   ├── UploadForm.jsx
│   ├── UploadForm.module.css
│   ├── ErrorBoundary.jsx
├── contexts/
│   ├── AuthContext.jsx
│   ├── SignupContext.jsx
│   ├── UploadDataContext.jsx
├── hooks/
│   ├── useAuth.js
│   ├── useResultsDisplay.js
│   ├── useRetry.js
│   ├── useSignup.js
│   ├── useUpload.js
│   ├── useUploadData.js
├── index.css
├── main.jsx
├── services/
│   ├── auth.js
│   └── dataService.js
└── vite.config.js

```

## Available Scripts

In the project directory, you can run the following commands:

- npm run dev or yarn dev: Runs the app in development mode.
- npm run build or yarn build: Compiles the app for production.
- npm run lint or yarn lint: Analyzes the code for problems and fixes them.
- npm run preview or yarn preview: Previews the compiled app for production.

## Contribution

1. Fork this repository.
2. Create a branch with the new feature (git checkout -b feature/new-feature).
3. Make the necessary changes and commit (git commit -m 'Add new feature').
4. Push the changes to your repository (git push origin feature/new-feature).
5. Create a pull request.

## Contact

If you have any questions, feel free to contact me at judithhuisa4@gmail.com or <a href="https://www.linkedin.com/in/full-stack-web-developer-judith-huisa">LinkedIn</a>
