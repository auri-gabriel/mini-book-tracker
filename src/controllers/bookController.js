const db = require('../models/db');

exports.index = (req, res) => {
  db.all('SELECT * FROM books', [], (err, rows) => {
    if (err) throw err;
    res.render('index', { title: 'My Books', books: rows });
  });
};

exports.showAddForm = (req, res) => {
  res.render('add', { title: 'Add New Book' });
};

exports.addBook = (req, res) => {
  const { title, author, status } = req.body;
  db.run(
    'INSERT INTO books (title, author, status) VALUES (?, ?, ?)',
    [title, author, status],
    (err) => {
      if (err) throw err;
      res.redirect('/');
    }
  );
};

exports.bookDetails = (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM books WHERE id = ?', [id], (err, book) => {
    if (err) throw err;
    res.render('detail', { title: 'Book Details', book });
  });
};
