import Schema from './schema/index.js';

const excludeProperty = ['-__v'];

export const create = async (data) => {
    const item = new Schema(data);
    try {
        await item.save();
    } catch (error) {
        console.log(error);
    }

    return item._id;
};

export const get = async () => {
    return Schema.find().select(excludeProperty).lean()
}
