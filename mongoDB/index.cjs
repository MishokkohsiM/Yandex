const { connect, disconnect } =  require('./data-access/mongoose.cjs')
const { productsData } = require('./data-access/product/index.cjs')

async function createProduct() {
  try {
    await connect();

    const id = await productsData.create({
      name: String((Math.random() + 1).toString(36).substring(7)),
      amount: (Math.random() + 1),
    });

      await disconnect()
      return id
  } catch (error) {
   console.log(error)
  }
}

const getProduct = async () => {
  try {
    await connect()
    const products = await productsData.get()

    console.log(products)
  } catch (error) {
    console.error(error)
  }

  await disconnect()
}

async function promiseCreate() {
    connect()
        .then((result) => {
          if(result) {
            return productsData.create({
              name: String((Math.random() + 1).toString(36).substring(7)),
              amount: (Math.random() + 1),
            }).then(product => {
                if(product) {
                    console.log('product - ', product)
                }
            }).catch(productError => console.log(productError))
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
            disconnect()
        })
}

module.exports = {
  createProduct,
  getProduct,
}
