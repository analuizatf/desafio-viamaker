const express = require('express')
const router = express.Router()
const db = require('../controllers/database/databaseController')
const connection = require('../controllers/database/databaseController')

const videosController = require('../controllers/api/videosController.js')
const productsController = require('../controllers/api/productsController.js')
const usersController = require('../controllers/api/usersController.js')

// API Routes
router.get('/', (req, res) => () => {
        db.initDatabase();
        connection.changeUser({database : 'desafio_viamaker'}, function(err) {
            if (err) throw err;
        })
        res.send('Server running')
    })
router.get('/videos', (req, res) => {
    result = videosController.list()
    res.send('videos')
}) //List
router.get('/produtos', (req, res) => {
    productsController.list()
    res.send('produtos')
}) //List

router.route('/usuarios')
    .get((req, res) => usersController.list()) //List
    .post((req, res) => {
        console.log(req)
        usersController.create()
    }) //Create
    .put((req, res) => usersController.update()) //Update
    .delete((req, res) => usersController.delete()) //Delete

    
module.exports = router