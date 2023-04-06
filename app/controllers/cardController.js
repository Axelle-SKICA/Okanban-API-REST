const { Card, List, Tag } = require ('../models/index');

const cardController = {
    getAllCardsFromList: async function (req, res) {
        const searchedListId = Number(req.params.id);

        try {
            // get all cards with their tags from model "Card" with sequelize
            const cardsList = await Card.findAll({
                include: "tags",
                where: {
                    list_id: searchedListId // filter with the list_id from requested route
                }
            });
            // if successful we send the list as JSON (succes HTTP code 200 is implied)
            res.json(cardsList);

        } catch (error) { // if there is an error, we catch it here:
            console.trace(error);
            // we send a special error message to the client with HTTP code 500
            const errorContent = {
                error: 'Unexpected server error'
            }
            res.status(500).json(errorContent);
        }
    },

    getOneCard: async function (req, res) {
        const searchedCardId = Number(req.params.id);

        try {
            // get a card (with tags) from its id (id from the requested route)
            const searchedCard = await Card.findByPk(searchedCardId, {
                include: "tags"
            });

            if (searchedCard) {
                // if there is a card with this id in DB we send it to the client
                res.json(searchedCard);
            } else {
                res.status(404).json({error: "Not found"})
            };

        } catch(error) {
            console.trace(error);
            const errorContent = {
                error: 'Unexpected server error'
            }
            res.status(500).json(errorContent);
        }        
    },

    createCard: async function (req, res) {
        const searchedCardId = Number(req.params.id);

        try {
            const searchedCard = await Card.findByPk(searchedCardId, {
                include: "tags"
            });

            if (searchedCard) {
                res.json(searchedCard);
            } else {
                res.status(404).json({error: "not found"})
            };

        } catch(error) {
      
            console.trace(error);

            const errorContent = {
                error: 'unexpected server error. Please try again later.'
            }

            res.status(500).json(errorContent);
        }
    },

    createCard: async function (req, res) {
        // we get the info for the card to create from the body of the request
        const { title, position, color, list_id } = req.body;

        try {
            // check there is a value for "title" (can't be NULL)
            if (!title) {
                // if not: HTTP code 400 and we send an explanation message to the client
                return res.status(400).json({ "error": "Missing body parameter: title" });
            }
            
            // check there is a value for "position" and that it is a number
            if (position !== undefined){
                if (position === "" || isNaN(position)){
                    return res.status(400).json({ "error": "Invalid type: position should be a number" });
                }
            }

            // check there is a value for "list_id" and that it is a number
            if (list_id === "" || isNaN(list_id)){
                return res.status(400).json({ "error": "Invalid type: list_id should be a number" });
            }
            
            // create the card in DB :
            const addedCard = await Card.create({
                title: title,
                position: position,
                color: color,
                list_id: list_id
            });
            // send the added card to the client with success HTTP code 201
            res.status(201).json(addedCard);

        } catch(error) {
            console.trace(error);
            const errorContent = {
                error: 'unexpected server error. Please try again later.'
            }
            res.status(500).json(errorContent);
        }
    },

    updateCard: async function (req, res) {
        
    },

    deleteCard: async function (req, res) {
        
    }

};

module.exports = cardController;