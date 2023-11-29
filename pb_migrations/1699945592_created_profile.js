/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8dfutotepofvz42",
    "created": "2023-11-14 07:06:32.653Z",
    "updated": "2023-11-14 07:06:32.653Z",
    "name": "profile",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ior99pyh",
        "name": "email",
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
  const collection = dao.findCollectionByNameOrId("8dfutotepofvz42");

  return dao.deleteCollection(collection);
})
