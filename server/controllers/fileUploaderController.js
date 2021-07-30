'use strict';
const SingleFile = require('../models/singleFile');
const { fileSizeFormatter}  = require('../utils/fileUtils');

const singleFileUpload = async (req, res, next) => {
    try{
        const file =  new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2)
        });
        await file.save();

        res.status(201).send('File Uploaded Successfully');
    }catch(err) {
        res.status(400).send(err.message);
    }
};

const getAllSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }catch(err) {
        res.status(400).send(err.message);
    }
};


module.exports = { singleFileUpload, getAllSingleFiles };