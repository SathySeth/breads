const express = require("express")
const breads = express.Router()

const Bread = require("../models/bread.js");

breads.get("/", (req, res) => {
    res.send(Bread);
});

breads.get("/:arrayIndex", (req, res) => {
    const arrayIndex = req.params.arrayIndex;
    res.send(Bread[arrayIndex]);
});

module.exports = breads
