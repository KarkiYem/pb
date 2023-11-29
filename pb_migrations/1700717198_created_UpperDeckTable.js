/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "naatok5nusygf7n",
    "created": "2023-11-23 05:26:38.681Z",
    "updated": "2023-11-23 05:26:38.681Z",
    "name": "UpperDeckTable",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kff2kjmz",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xcu6vc9e",
        "name": "capacity",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("naatok5nusygf7n");

  return dao.deleteCollection(collection);
})
