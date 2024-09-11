const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/', carController.car_list_get);
router.get('/search', carController.search_get);
router.post('/search', carController.search_post);
router.get('/create', carController.create_get);
router.post('/create', carController.create_post);

router.get('/:vin', carController.car_get);


module.exports = router;