const express= require('express')
const { getAllNews, postAllNews, getSingleNews, deleteSingleNews } = require('../controller/news')
const newsRouter = express.Router()



newsRouter.route('/').get(getAllNews).post(postAllNews)
newsRouter.route('/:newsId').get(getSingleNews).delete(deleteSingleNews)



module.exports = newsRouter


