/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mev9sy7f",
    "name": "deck",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e")

  // remove
  collection.schema.removeField("mev9sy7f")

  return dao.saveCollection(collection)
})
