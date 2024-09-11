const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

router.get('/', modelController.models_list_get);
router.get('/search', modelController.search_get);
router.post('/search', modelController.search_post);
router.get('/create', modelController.create_get);
router.post('/create', modelController.create_post);

router.get('/:name', modelController.model_get);

module.exports = router;