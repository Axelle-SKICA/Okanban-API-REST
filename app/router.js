const router = require('express').Router();

const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const tagController = require ('./controllers/tagController');

//LISTS ROUTES
router.get('/lists/:id', listController.getOneList);
router.get('/lists', listController.getAllLists);

router.post('/lists', listController.createList);

router.delete('/lists/:id', listController.deleteList);

router.patch('/lists/:id', listController.updateList);


//CARDS ROUTES
router.get('/lists/:id/cards', cardController.getAllCardsFromList);
router.get('/cards/:id', cardController.getOneCard);

router.post('/cards', cardController.createCard);

router.patch('/cards/:id', cardController.updateCard);

router.delete('/cards/:id', cardController.deleteCard);


//TAGS ROUTES
router.get('/tags', tagController.getAllTags);

router.post('/tags', tagController.createTag);
router.post('/cards/:id/tag', tagController.associateTagWithCard)

router.patch('/tags/:id', tagController.updateTag);
router.delete('/tags/:id', tagController.deleteTag);

router.use((req, res) => {
    res.status(404).json({ error: "Not found" });
})

module.exports = router;