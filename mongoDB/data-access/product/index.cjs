const  { Schema } = require('./schema/index.cjs');

const excludeProperty = ['-__v'];

const create = async (data) => {
    const item = new Schema(data);
    try {
        await item.save();
    } catch (error) {
        console.log(error);
    }

    return item._id;
};

const get = () => {
    return Schema.find().select(excludeProperty).lean()
}

const getForId = (id) => {
    return Schema.findOne({
        _id: id
    })
}

module.exports = {
    productsData: {
        get,
        create,
        getForId,
    }
}
