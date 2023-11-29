/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1054ragekognyuu");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "1054ragekognyuu",
    "created": "2023-11-14 04:59:43.312Z",
    "updated": "2023-11-23 06:39:51.196Z",
    "name": "userss",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2aiyzam4",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
