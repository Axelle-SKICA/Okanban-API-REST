const { List } = require ('../models/index');

const listController = {
    getOneList: async function (req, res) {
        const response = {"message": "getOne function is executed here"}
        res.json(response);
    },
    
    getAllLists: async function (req, res) {
        const response = {"message": "getAllLists function is executed here"}
        res.json(response);
    },

    createList: async function (req, res) {
        const response = {"message": "createList function is executed here"}
        res.json(response);
    },

    updateList: async function (req, res) {
        const response = {"message": "updateList function is executed here"}
        res.json(response);
    },

    deleteList: async function (req, res) {
        const response = {"message": "deleteList function is executed here"}
        res.json(response);
    }
};

module.exports = listController;