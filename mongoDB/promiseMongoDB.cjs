const { promiseConnect, promiseDisconnect } = require('../mongoDB/data-access/mongoose.cjs')
const { productsData } = require('./data-access/product/index.cjs')

function promiseGetProducts () {
    promiseConnect()
        .then(() => {
            return productsData.get()
        })
        .then((result) => {
            if (result) {
                console.log(result)
            }
        })
}

function promiseGetProductForId (mongoUri, id) {
    return promiseConnect(mongoUri)
        .then(() => {
            return productsData.getForId(id)
        })
        .then((result) => {
            return result
        })
        .catch(error => Promise.reject(error))
        .finally(() => {
            promiseDisconnect()
        })
}

module.exports = {
    promiseGetProducts,
    promiseGetProductForId,
}
