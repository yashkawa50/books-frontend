# 📘 Project Setup and Usage Guide

Follow the steps below to set up and run the project on your local system.

## 1. Clone the Project
First, clone this repository to your local machine using the command below:
```bash
git clone <repository-url>
cd <project-folder>
```

## 2. Create a `.env` File
Inside the root directory of your project, create a new file named `.env`.  
Add the following line inside it:
```
REACT_APP_API_URL=http://localhost:5000/
```
This line sets up the base URL for connecting the React frontend to your backend API (which runs on port 5000 by default).

## 3. Install Dependencies
Before running the project, install all required dependencies using:
```bash
npm install
```
This command will download and install all the necessary packages listed in the `package.json` file.

## 4. Start the React Development Server
Once the dependencies are installed, start the React app by running:
```bash
npm run dev
```
This will start the development server, and you can open the app in your browser (usually at `http://localhost:3000/`).

---

## 🧭 Application Routes and Features

Here’s how you can navigate and use the app:

- **`/register`** – Go to this page to create a new user account.  
  You’ll need to fill in your details to register successfully.

- **`/login`** – After registering, visit this page to log in with your credentials.  
  Once logged in, you can access other features of the app.

- **`/add-book`** – Use this page to add a new book to the system.  
  You’ll be able to enter book details like title, author, etc.

- **`/books`** – This page displays the list of all books that have been added.  
  You can view and manage your added books here.
