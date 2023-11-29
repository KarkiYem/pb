/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qaqkpurj",
    "name": "reportingtime",
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
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e")

  // remove
  collection.schema.removeField("qaqkpurj")

  return dao.saveCollection(collection)
})
