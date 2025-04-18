# 💰 Finance Tracker - MERN Stack Application

A personal finance tracking web application that allows users to manage their **income** and **expenses**, with interactive data visualizations and secure login.

## 🚀 Tech Stack

- **Frontend**: HTML, CSS, React, React-Bootstrap, Custom Hooks, useContext  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **API Testing**: Postman  
- **Build Tool**: Vite

---

## ✨ Features

- ✅ **User Registration & Login**  
  - Strong password validation (min 8 characters, special characters & numbers).  
  - Confirm password matching.  
  - Session persists for 24 hours using JWT authentication.

- 📈 **Transaction Management**  
  - Add income and expense records.
  - View transactions through **Line**, **Bar**, and **Pie** charts.
  - Edit/delete individual or multiple transactions.
  - Only the owner can edit/delete their transactions.

- 🎨 **User Experience**  
  - Beautiful landing page with animated finance quotes.
  - Responsive design using React-Bootstrap.

- 🔒 **Security**  
  - JWT-based token authentication.
  - Authorization token must be passed in headers for protected routes.

---

## 🧠 How I Built It

- Bootstrapped using **Vite** for fast development.
- Used **React Context API** for global state management.
- Created **custom hooks** to follow the DRY principle.
- Built secure backend APIs with Express and MongoDB.
- APIs accept and return data in JSON format.
- Extensively tested using **Postman** with a full collection setup.

---

## 📁 Project Setup

### 🔧 Backend Setup

```bash
cd fs_serverAPI
yarn install
yarn dev
```

### 🌐 Frontend Setup

```bash
cd fs_client
yarn install
yarn dev
```

---

## 📦 Postman Collection

Import the Postman collection provided in the `/postman` folder or use the sample snippet below to test:

### Sample Endpoints

| Action             | Method | Endpoint                          |
|--------------------|--------|-----------------------------------|
| Register User      | POST   | `/api/v1/users/signup`            |
| Login User         | POST   | `/api/v1/users/login`             |
| Add Transaction    | POST   | `/api/v1/users/transcation`       |
| Get Transactions   | GET    | `/api/v1/users/transcation`       |
| Update Transaction | PATCH  | `/api/v1/tasks`                   |
| Delete Transaction | DELETE | `/info?id=1`                      |
| Summary for Charts | GET    | `/api/v1/users/transcation/summary`

> 🔐 **Note**: For protected routes, pass the `Authorization` token in the request headers.

---

## 📊 Charts Preview

- Line Chart – Monthly Income vs Expense  
- Pie Chart – Expense Category Distribution  
- Bar Chart – Comparative Monthly Summary

---

## 📷 Screenshots

![alt text](<Screenshot from 2025-04-19 09-29-12.png>) ![alt text](<Screenshot from 2025-04-19 09-29-47.png>) ![alt text](<Screenshot from 2025-04-19 09-30-03.png>) ![alt text](<Screenshot from 2025-04-19 09-30-25.png>)

---

## 📚 Learnings

- Learned how to manage global state using `useContext`
- Built custom hooks to reduce code repetition
- Gained deep understanding of JWT, REST API, and Express Middleware
- Improved handling of MongoDB operations using Mongoose
- Used recharts for data visualization

---

## 📌 To-Do (Future Enhancements)

- Add recurring transaction feature
- Add dark mode support
- Add transaction filtering (e.g., by date, category)
- Export to CSV

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).