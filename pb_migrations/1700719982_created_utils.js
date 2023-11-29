/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "eqbe6mfsm2ihshi",
    "created": "2023-11-23 06:13:02.112Z",
    "updated": "2023-11-23 06:13:02.112Z",
    "name": "utils",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qc0gcvg9",
        "name": "utils",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eqbe6mfsm2ihshi");

  return dao.deleteCollection(collection);
})
