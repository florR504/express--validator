const express = require('express');

const router = express.Router();
const indexController = require('../controllers/indexController');
const {check} = require('express-validator');
const validateRegister = [
    check('name')
    .notEmpty().withMessage('Debes escribir tu nombre'),
    check('email')
    .notEmpty().withMessage('Debes escribir un email')
    .bail()
    .isEmail().withMessage('El formato del email es incorrecto'),
    check('edad')
    .notEmpty().withMessage('Por favor completa este campo')
    .bail()
    .isInt().withMessage('Este campo debe ser numerico'),
    check('colores')
    .notEmpty().withMessage('Por favor selecciona un color')
]

/* GET home page. */
router.get('/', indexController.home);
router.post('/',validateRegister, indexController.processForm)

module.exports = router;
