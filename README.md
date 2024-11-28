# Employee-Management-System-MERN-Future-Intern-Task2
Here’s a detailed README file for the **Employee Management System** project built using the MERN stack:

---

# Employee Management System (MERN)

This project is a **CRUD application** that manages employee details. Built as a part of **Future Intern Task 2**, it utilizes the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) to handle backend and frontend operations seamlessly.  

## Features

- **Create**: Add new employees with details like name, email, position, and salary.  
- **Read**: View the list of all employees with their complete details.  
- **Update**: Edit existing employee details.  
- **Delete**: Remove an employee from the database.  

---

## Project Structure

```
Employee-Management-System-MERN
│
├── backend/            # Node.js + Express.js backend
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Backend server entry point
│
├── frontend/           # React.js frontend
│   ├── src/
│       ├── components/ # React components
│       ├── pages/      # Page views
│       └── App.js      # App entry point
│
└── README.md           # Documentation
```

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [MongoDB](https://www.mongodb.com/) (installed and running)

### Steps to Run the Application

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/username/Employee-Management-System-MERN.git
   cd Employee-Management-System-MERN
   ```

2. **Backend Setup**  
   Navigate to the `server/` folder and install dependencies:  
   ```bash
   cd backend
   npm install
   ```  
   Create a `.env` file in the `server/` directory:  
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/employeeManagement
   ```  
   Start the backend server:  
   ```bash
   npm run start
   ```

3. **Frontend Setup**  
   Navigate to the `client/` folder and install dependencies:  
   ```bash
   cd ../client/
   npm install
   ```  
   Start the React development server:  
   ```bash
   npm start
   ```

4. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000` to use the Employee Management System.

---

## Tech Stack

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: Database to store employee details.
- **Mongoose**: ODM for MongoDB.

### Frontend
- **React.js**: Library for building the user interface.
- **Axios**: To handle API requests.
- **React Router**: For navigation.

---

## API Endpoints

- **GET** `/employees/read`: Fetch all employees.  
- **POST** `/employees/create`: Add a new employee.  
- **PUT** `/api/employees/update/:id`: Update employee details.  
- **DELETE** `/api/employees/delete/:id`: Delete an employee.  

---

## Screenshots

1. **Home Page**  
   Displays the cards of employees with options to edit or delete.  
   ![Home Page](https://github.com/RahulM4/Employee-Management-System-MERN-Future-Intern-Task2/blob/main/img/homepage.png)

2. **Add Employee**  
   Forms for adding or editing employee details.
   ![Add Employee](https://github.com/RahulM4/Employee-Management-System-MERN-Future-Intern-Task2/blob/main/img/registrationpage.png)

2. **Dashboard Employee**  
   List of employees with options to view
   ![Dashboard Employee](https://github.com/RahulM4/Employee-Management-System-MERN-Future-Intern-Task2/blob/main/img/dashboard.png)

---

## Future Enhancements

- Add user authentication and role-based access.  
- Implement pagination for the employee list.  
- Enhance UI/UX for a better user experience.

---

## License

This project is licensed under the MIT License.  

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions or bug fixes.

---

Let me know if you'd like help tailoring this README further! 😊
