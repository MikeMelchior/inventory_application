const express = require('express');
const router = express.Router();
const manufacturerController = require('../controllers/manufacturerController');

router.get('/', manufacturerController.manufacturer_list_get);
router.get('/search', manufacturerController.search_get);
router.post('/search', manufacturerController.search_post);
router.get('/create', manufacturerController.create_get);
router.post('/create', manufacturerController.create_post);
router.get('/update/:name', manufacturerController.update_get);
router.post('/update', manufacturerController.update_post);

router.get('/:name', manufacturerController.manufacturer_get);

module.exports = router;