const express= require('express')
const { getAllNews, postAllNews, getSingleNews, deleteSingleNews } = require('../controller/news')
const newsRouter = express.Router()

const multer = require('multer')
const path = require('path')

// For the Image Upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images/UploadImages')
    },
    filename: (req, file, cb) => {
        console.log(path.extname(file.originalname))
        req.body.popname = Date.now() + file.originalname 
        console.log('req.body.popname')
        console.log(req.body.popname)
        // cb(null, Date.now() + file.originalname + path.extname(file.originalname))
        cb(null, Date.now() + file.originalname )
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg') {
        console.log('This file is JPEG')
        cb(null, true)
    } else {
        console.log('This file is PNG')
        cb(null, false)
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter,
})





newsRouter.route('/').get(getAllNews).post(upload.single("image"), postAllNews)
newsRouter.route('/:newsId').get(getSingleNews).delete(deleteSingleNews)



module.exports = newsRouter


