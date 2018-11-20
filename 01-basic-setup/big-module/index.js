
const internalModule = require('./internal')

exports.publicApi = internalModule.internal

exports.routes = (app) => {
    app.get('/', (req, res) => {
        res.json([1,2,3])
    })
}