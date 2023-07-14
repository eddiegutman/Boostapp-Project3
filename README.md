<h3 align="center">Boostapp Project 3</h3>

  <p align="center">
    Web application for managing movies and subscriptions
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Web application for managing movies and subscriptions, icluding user registration and account managment.
The frontend is built with ReactJS and Redux.
The backend is built with NodeJS, ExpressJS, Mongoose.
Using MongoDB as database.

### Built With

* [![React][React.js]][React-url]

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

In order to run the project, the following installations are needed:
* NodeJS
  ```
  https://nodejs.org/en
  ```
* MongoDB
  ```
  https://www.mongodb.com/try/download/community
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eddiegutman/Boostapp-Project3.git
   ```
2. Change directory into the server folder
   ```sh
   cd .\Boostapp-Project3\server
   ```
3. Install server dependencies
   ```sh
   npm i
   ```
4. Edit mongoose settings with MongoDB port and database
   ```sh
   notepad.exe .\config\database.js
   ```
   example of `database.js`:
   ```sh
   .connect("mongodb://127.0.0.1:27017/boostappProject3DB")
   ```
5. Run the server
   ```sh
   node ../index.js
   ```
6. Change directory into the client folder
   ```sh
   cd ..\client
   ```
7. Install client dependencies
   ```sh
   npm i
   ```
8. Run the client
   ```sh
   node start
   ```
   
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
