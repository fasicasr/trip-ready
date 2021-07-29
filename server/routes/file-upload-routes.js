'use strict';

const express = require('express');
const { upload } = require('../utils/filehelper');
const { singleFileUpload, getAllSingleFiles } = require('../controllers/fileUploaderController');
const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getAllSingleFiles', getAllSingleFiles);

module.exports = { routes: router }