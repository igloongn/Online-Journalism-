const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');

const morgan = require('morgan')
var cors = require('cors')
const newsRouter = require('./api/routes/news')
const { searchController, Pagination } = require('./api/controller/news')
const userRouter = require('./api/routes/user')
const adminRouter = require('./api/routes/adminData')
const testRouter = require('./api/routes/test')

dotenv.config()




app.use('/', express.static('Images'))


// Step 1
const PORT = process.env.PORT || 1234
// Step 2
// const dbURI = process.env.MONGODB_URL || 'mongodb://0.0.0.0:27017/NewsAPI'
// const client = new MongoClient(dbURI);
const dbURI = process.env.MONGODB_URL || 'mongodb+srv://temitope:Temitope1234@cluster0.wfxgsv1.mongodb.net/NewsAPI'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(dbURI)
    .then(res => {
        console.log(res.models)
        start()
    })
    .catch(err => console.error(err))
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    return res.redirect('/news');
})
app.use('/news', newsRouter)
app.use('/search/:searchQuery', searchController)
app.use('/pagination', Pagination)
app.use('/user', userRouter)

app.use('/admindata', adminRouter)



app.use('/test', testRouter)




// // Step 3
// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static('client/build'))
// }


app.use((req, res, next) => {
    return res.status(404).json({
        msg: 'General Error: Sorry this page Cannot be found'
    })
})

const start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}.....`)
    })
}

