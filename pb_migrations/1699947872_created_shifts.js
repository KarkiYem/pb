/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z9ts1q02vvtmc8e",
    "created": "2023-11-14 07:44:32.569Z",
    "updated": "2023-11-14 07:44:32.569Z",
    "name": "shifts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "knblqkvm",
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
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e");

  return dao.deleteCollection(collection);
})
