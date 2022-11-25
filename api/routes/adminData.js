const express= require('express')
const { getAdminData, } = require('../controller/adminData')
const adminRouter = express.Router()



adminRouter.route('/').get(getAdminData)



module.exports = adminRouter


