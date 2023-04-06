require("dotenv").config();

const { List, Card, Tag } = require ('./app/models');

async function run() {
  
  // all lists:
  const lists = await List.findAll();
  // console.log(lists);

  // all cards with lists:
  const cards = await Card.findAll(
    {
      include: 'list',
    }
  );
  // console.log(cards);

  // all lists with cards and tags:
    const fullLists = await List.findAll(
    {
      include: {
        association: 'cards',
        include: 'tags',
      },
    }
  );
  // console.log(fullLists);

}

run();