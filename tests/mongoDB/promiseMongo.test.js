const { promiseGetProductForId } = require('../../mongoDB/promiseMongoDB.cjs')

const id = '61e5d4321664f50ab528593a'

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000';

describe('Promise mongoDB', () => {
    test('Get element for id', () => {
        const product = promiseGetProductForId(mongoUri, id)

        return product.then(item => {
            expect(String(item._id)).toBe(id)
        })
    })

    test('catch', () => {
        const product = promiseGetProductForId('asdas', '')

        return product.catch(error => {
            expect(error).toBeInstanceOf(Error)
        })
    }, 5000)
})
