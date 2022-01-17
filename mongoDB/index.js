import { connect, disconnect } from './data-access/mongoose.js';
import * as productsData from './data-access/product/index.js'

async function createProduct() {
  try {
    await connect();

    for (let i = 0; i <= 5; i++) {
      const id = await productsData.create({
        name: String((Math.random() + i).toString(36).substring(7)),
      });

      console.log(id)
    }

  } catch (error) {
   console.log(error)
  }

  disconnect()
}

createProduct();
