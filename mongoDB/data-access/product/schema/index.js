import pkg from 'mongoose';
const { Schema } = pkg;

const BaseProduct = () => {
    const schema = new Schema({
        name: {
            description: 'Название продукта',
            example: 'Кредитный продукт',
            type: String,
            required: true,
        },
    })

    return schema
}

export default pkg.model('Test', BaseProduct())
