const express = require("express");
//const app_routes = require(".");
const hero_model = require("../models/superhero.model");
const hero_routes = express.Router();

// http://localhost:3000/api/v1/users/user

hero_routes.post("/hero", (req, res) => {
  const hero_new = hero_model(req.body);
  hero_new
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

hero_routes.get("/heros", (req, res) => {
  hero_model
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

hero_routes.get("/heros/:id", (req, res) => {
  const {id} = req.params;
  hero_model
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


hero_routes.put("/heros/:id", (req, res) => {
  const { id } = req.params;
  const {hero_name, real_name, age, superpowers} = req.body;
  hero_model
    .updateOne({ _id: id }, { $set: {hero_name, real_name, age, superpowers} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


hero_routes.delete("/heros/:id", (req, res) => {
    const { id } = req.params;
  hero_model
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = hero_routes;
