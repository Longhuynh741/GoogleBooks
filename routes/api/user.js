const router = require("express").Router();
const bodyParser = require("body-parser");
const db = require("../../models/");
const jsonParser = bodyParser.json();

router.get("/api/MyBooks", (req, res) => {
  console.log("Clicked to retrieve users");
  db.Books.find({})
    .then((foundBook) => {
      res.json(foundBook);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.post("/api/MyBooks/savedBooks", jsonParser, (req, res) => {
  var { title, authors, description, image, link } = req.body;
  db.Books.create({ title, authors, description, image, link })
    .then((newBook) => {
      (title = newBook.title),
        (authors = newBook.authors),
        (decsription = newBook.description),
        (image = newBook.image),
        (link = newBook.link);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "unable to Add Book",
      });
    });
});

module.exports = router;