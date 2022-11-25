const express = require('express')
const app = express()
const News = require('../models/news')

const getAdminData = async (req, res, next) => {

    const approve = 0
    const pending = 0
    const rejected = 0

    const allNews = await News.find()

    res.json({
        allNews: allNews.length,
        pending,
        approve,
        rejected,
    })

}


module.exports = {
    getAdminData,
}



