const { Card, List, Tag } = require ('../models/index');

const cardController = {
    getAllCardsFromList: async function (req, res) {
        const searchedId = Number(req.params.id);

        try {
            // get all cards with their tags from model "Card" with sequelize
            const cardsList = await Card.findAll({
                include: "tags",
                where: {
                    list_id: searchedId //filters with the list_id from requested route
                }
            });
            // if successful we send the list as JSON (succes HTTP code 200 is implied)
            res.json(cardsList);

        } catch (error) { // if there is an error, we catch it here:
            console.trace(error);
            // we send a special error message to the client with HTTP code 500
            const errorContent = {
                error: 'unexpected server error. Please try again later.'
            }
            res.status(500).json(errorContent);
        }
    },

    getOneCard: async function (req, res) {
        
    },

    createCard: async function (req, res) {
        
    },

    updateCard: async function (req, res) {
        
    },

    deleteCard: async function (req, res) {
        
    }

};

module.exports = cardController;