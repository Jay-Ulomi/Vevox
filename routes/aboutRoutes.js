const express = require('express');


const router = express.Router();

const services = require('../views/Service/service.json').services;

//Route handlers

router.get('/', (req, res) => {

    res.render('About/about', { services });
});

module.exports = router;