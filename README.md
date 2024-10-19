
# **GitHub Profile Search App**

### **Description**
GitHub Profile Search App is a web application built with Next.js and React that allows users to search for GitHub profiles by entering a GitHub username. The app fetches data from the GitHub API to display user profile details, including avatar, bio, and a list of public repositories with their respective stats.

---

## **Features**
- Search for GitHub profiles by username.
- View user information, including their avatar, bio, and repository details.
- Displays repository stats such as stars, forks, and descriptions.

---

## **Table of Contents**
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Additional Features](#additional-features)
- [Technologies Used](#technologies-used)

---

## **Installation** :

Follow these steps to install the application on your local machine:

1. **Clone the repository**::

   ```bash
   git clone https://github.com/Kaypat4212/Githubprofilesearch.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd github-profile-search
   ```

3. **Install dependencies**:

   Before running the application, make sure to install all the necessary dependencies:

   ```bash
   npm install
   ```

---

## **Running the App**

After completing the installation steps, follow the instructions below to run the app:

1. **Run the development server**:

   ```bash
   npm run dev
   ```

   This command starts the Next.js development server. Open your browser and go to:

   ```
   http://localhost:3000
   ```

   The app will be live on this port, where you can start searching for GitHub profiles.

2. **Build for production**:

   If you wish to build the app for production:

   ```bash
   npm run build
   ```

   This creates an optimized production build.

3. **Run the production build**:

   To serve the production build locally:

   ```bash
   npm start
   ```

---

## **Usage**

1. **Search for a GitHub User**:
   - On the homepage, you will find a search bar.
   - Enter a valid GitHub username and press "Search".
   - The app will display the user's profile information, including:
     - **Avatar**: The user's GitHub profile picture.
     - **Bio**: A short bio about the user.
     - **Repositories**: A list of public repositories with details such as stars and forks.

2. **Repository Information**:
   - Each repository in the list provides:
     - Repository name
     - Description
     - Number of stars
     - Number of forks

---

## **Additional Features**

If you’ve added any custom or extra features, describe them here. For example:
- **Improved Error Handling**: Displays an error message when a username is not found or if there’s an issue with the GitHub API.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.

---

## **Technologies Used**
- **Next.js**: For server-side rendering and static site generation.
- **React**: For building the UI components.
- **Tailwind CSS**: For styling the application.
- **GitHub API**: For fetching user data and repositories.

---

## **Contributing**

If you'd like to contribute to this project, please fork the repository and submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

Developer:

Https://www.kaypat.dev
