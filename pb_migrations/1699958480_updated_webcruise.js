/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8hb2alfukv3fek7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvsnihlr",
    "name": "timing",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8hb2alfukv3fek7")

  // remove
  collection.schema.removeField("jvsnihlr")

  return dao.saveCollection(collection)
})
