import Schema from './schema/index.js';

export const create = async (
    data,
) => {
    const item = new Schema(data);

    try {
        await item.save();
    } catch (error) {
        console.log(error);
    }

    return item._id;
};
