const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON body

let books = [];
let id = 1;

// Load mock data from MOCK_DATA.json
try {
  const data = fs.readFileSync('MOCK_DATA.json', 'utf8'); // read file
  books = JSON.parse(data); // convert JSON string to array
  id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1; // set next ID
  console.log(`Loaded ${books.length} books from MOCK_DATA.json`);
} catch (err) {
  console.error("Error loading MOCK_DATA.json:", err.message);
}

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});
// GET book by ID (generalized route)
app.get('/api/books/:id', (req, res) => {
    console.log("Request for book ID:", req.params.id);

  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: `Book with ID ${bookId} not found.` });
  }
  res.json(book);
});

// POST new book 
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author required." });
  }

  const newBook = { id: id++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// put update book
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// DELETE book
app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
