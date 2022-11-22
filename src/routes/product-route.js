'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Stores API",
        version: "0.0.2"
    })
});

router.post('/', controller.post);
router.put('/:id', controller.put)
router.delete('/', controller.delete);
