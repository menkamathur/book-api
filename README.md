# 📚 Book API – Task 3 (Web Dev Internship)

This is a simple REST API built using **Node.js** and **Express.js** to manage a list of books.  
It supports full **CRUD operations** (Create, Read, Update, Delete), and uses a local JSON file (`MOCK_DATA.json`) to store data persistently.

---

## 🚀 Features

- GET all books  
- GET a single book by ID  
- POST a new book  
- PUT (update) a book by ID  
- DELETE a book by ID  
- Data saved to `MOCK_DATA.json` on every change  
- Tested using Postman  

---

## 📁 Folder Structure

book-api/
├── index.js # Main server file
├── package.json # Node.js config file
├── MOCK_DATA.json # Stores the books data
└── README.md # This file

## 📬 API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | /api/books          | Get all books           |
| GET    | /api/books/:id      | Get a single book by ID |
| POST   | /api/books          | Add a new book          |
| PUT    | /api/books/:id      | Update book by ID       |
| DELETE | /api/books/:id      | Delete book by ID       |

---

## 🛠 Tools Used

- Node.js  
- Express.js  
- Postman (for testing)  
- VS Code  

## 👤 Author

**Name:** Menka Mathur   
**GitHub:** [github.com/menkamathur](https://github.com/menkamathur)

