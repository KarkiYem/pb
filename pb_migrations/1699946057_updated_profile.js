/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8dfutotepofvz42")

  // remove
  collection.schema.removeField("ffw4wcyq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nals7z2g",
    "name": "img",
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
  const collection = dao.findCollectionByNameOrId("8dfutotepofvz42")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffw4wcyq",
    "name": "img",
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
  collection.schema.removeField("nals7z2g")

  return dao.saveCollection(collection)
})
