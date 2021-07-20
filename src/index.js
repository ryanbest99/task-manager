const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const Movie = require("./models/movie");
const Paper = require("./models/paper");
const Cellphone = require("./models/cellphone");
const Book = require("./models/book");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      console.log(task);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/movies", (req, res) => {
  const movie = new Movie(req.body);

  movie
    .save()
    .then(() => {
      console.log(movie);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/papers", (req, res) => {
  const paper = new Paper(req.body);

  paper
    .save()
    .then(() => {
      console.log(paper);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/cellphones", (req, res) => {
  const cellphone = new Cellphone(req.body);
  cellphone
    .save()
    .then(() => {
      console.log(cellphone);
      res.status(200).send(cellphone);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.post("/books", (req, res) => {
  const book = new Book(req.body);

  book
    .save()
    .then(() => {
      console.log(book);
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
