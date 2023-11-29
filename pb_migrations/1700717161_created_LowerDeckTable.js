/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5gx37un3jeps5u5",
    "created": "2023-11-23 05:26:01.200Z",
    "updated": "2023-11-23 05:26:01.200Z",
    "name": "LowerDeckTable",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zh6bufoz",
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
        "id": "e3inqiai",
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
  const collection = dao.findCollectionByNameOrId("5gx37un3jeps5u5");

  return dao.deleteCollection(collection);
})
