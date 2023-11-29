/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wia788q1grb7n5o")

  // remove
  collection.schema.removeField("two6jaxr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmllizwk",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wia788q1grb7n5o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "two6jaxr",
    "name": "thumbnail",
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

  // remove
  collection.schema.removeField("pmllizwk")

  return dao.saveCollection(collection)
})
