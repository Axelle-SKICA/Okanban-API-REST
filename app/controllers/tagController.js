const { Tag } = require ('../models/index');

const tagController = {
   
    getAllTags: async function (req, res) {
        const response = {"message": "getAllTags function is executed here"}
        res.json(response);
    },

    createTag: async function (req, res) {
        const response = {"message": "createTag function is executed here"}
        res.json(response);
    },

    associateTagWithCard: async function (req, res) {
        const response = {"message": "associateTagWithCard function is executed here"}
        res.json(response);
    },

    updateTag: async function (req, res) {
        const response = {"message": "updateTag function is executed here"}
        res.json(response);
    },

    deleteTag: async function (req, res) {
        const response = { "message": "deleteTag function is executed here" }
        res.json(response);
    }
};

module.exports = tagController;