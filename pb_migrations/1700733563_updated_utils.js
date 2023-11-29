/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqbe6mfsm2ihshi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s8eh1hhs",
    "name": "kidprice",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbbsp5kc",
    "name": "adultprice",
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
  const collection = dao.findCollectionByNameOrId("eqbe6mfsm2ihshi")

  // remove
  collection.schema.removeField("s8eh1hhs")

  // remove
  collection.schema.removeField("zbbsp5kc")

  return dao.saveCollection(collection)
})
