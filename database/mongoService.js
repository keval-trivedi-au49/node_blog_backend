const { BlogSchema } = require("../models/blogs");

const models = {
    BlogSchema
};

module.exports = {
    async create(opts = { model: "", data: {} }) {
        try {
            if (!opts.model || !models[opts.model]) {
                throw new Error("Invalid model name");
            }

            if (!opts.data) return false;

            const result = await models[opts.model].create(opts.data);
            return result;

        } catch (err) {
            console.log(`Error in Mongo Create Method ::: ${err}`);
            throw err;
        }
    },

    async find(opts = { model: "", query: {}, sort: {}, attributes: [] }) {
        try {

            if (!opts.model || !models[opts.model]) {
                throw new Error("Invalid model name");
            }

            let result;
            if (opts.attributes && opts.attributes.length) {
                result = await models[opts.model].find(opts.query).sort(opts.sort).select(opts.attributes).lean().exec()
            } else {
                result = await models[opts.model].find(opts.query).sort(opts.sort).lean().exec()
            }
            return result;
        } catch (err) {
            console.log(`Error in Mongo Create Method ::: ${err}`);
            throw err;
        }
    }
};