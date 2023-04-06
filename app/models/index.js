const List = require ('./List');
const Card = require ('./Card');
const Tag = require ('./Tag');

// CARD/LIST association : one-to-many (1:N)
// a card belongs to 1 list 
Card.belongsTo( List, {
    as: 'list',
    foreignKey: 'list_id'
  }
);
// a list can have many cards
List.hasMany( Card, {
    as: 'cards',
    foreignKey: 'list_id'
  }
);

// CARD/TAG association : many-to-many (N:N)
// a card is linked to several tags through table card_has_tag
Card.belongsToMany( Tag, {
    as: 'tags',
    through: 'card_has_tag',
    timestamps: false
  });
// a tag is linked to several cards through table card_has_tag
Tag.belongsToMany( Card, {
    as: 'cards',
    through: 'card_has_tag',
    timestamps: false
  });

module.exports = {List, Card, Tag};