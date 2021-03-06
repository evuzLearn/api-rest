'use strict'

const express = require('express');
const FieldCtrl = require('../controllers/field')
const UserCtrl = require('../controllers/user');
const { isAuth } = require('../middlewares/auth');
const api = express.Router();

api.get('/field', isAuth, FieldCtrl.getFields);
api.get('/field/:fieldId', FieldCtrl.getField);
api.post('/field', FieldCtrl.saveField);
api.put('/field/:fieldId', FieldCtrl.updateField);
api.delete('/field/:fieldId', FieldCtrl.deleteField);
api.post('/signup', UserCtrl.signUp);
api.post('/signin', UserCtrl.signIn);
api.get('/private', isAuth, function (req, res) {
    res.status(200).send({ message: 'Tienes acceso' });
});

module.exports = api;