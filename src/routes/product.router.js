const express = require('express');
const {readAllProduct, readProduct, readGambarProduct, readWarnaProductProduct, readDaftarSizeProduct, createAddToBag, createFavourite} = require('../controllers/product.controller');

const router = express.Router();

router.get('/readAllProduct', readAllProduct)
router.get('/Product/:id', readProduct)
router.get('/GambarProduct/:id', readGambarProduct)
router.get('/WarnaProduct/:id', readWarnaProductProduct)
router.get('/DaftarSizeProduct/:id', readDaftarSizeProduct)
router.post('/AddToBag', createAddToBag)
router.post('/Favourite', createFavourite)

module.exports = router;