# O'kanban

## Description du projet

L'objectif est de réaliser l'__API REST__ d'un outil de type Kanban (comme par exemple Trello) :

- on crée des cartes à l'intérieur de listes,
- un utilisateur peut créer autant de listes qu'il veut, et mettre autant de cartes qu'il souhaite dans ces listes,
- Chaque liste a un nom, une position,
- Chaque carte a un titre, une position dans la liste, une couleur (qui est optionnelle), et un ou plusieurs label(s) (optionnel(s)).

## Lancement

```bash
npm i
```

Créer une base de données sur __PostgreSQL__.

Créer et remplir les tables de la BDD de quelques données de test :
```bash
npm run dbreset
npm run dbseed
```

Créer et remplir _.env_ à partir du fichier d'exemple.

Lancer le serveur :
```bash
npm run dev
```

## Routes

### LISTES

GET /lists/:id  
GET /lists  

POST /lists  

PATCH /lists/:id  

DELETE /lists/:id  

### CARTES

:heavy_check_mark: GET /lists/:id/cards  
:heavy_check_mark: GET /cards/:id  

:heavy_check_mark: POST /cards  

:heavy_check_mark: PATCH /cards/:id  

:heavy_check_mark: DELETE /cards/:id  

### LABELS

GET /tags  

POST /tags  
POST /cards/:id/tag  

PATCH /tags/:id  

DELETE /tags/:id  