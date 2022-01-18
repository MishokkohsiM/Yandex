const { createProduct } = require('../../mongoDB/index.cjs')

describe('MongoDB', () => {
    test('create', async () => {
        const id = await createProduct()

        expect(id).not.toBeUndefined()
    }, 5000)
})
