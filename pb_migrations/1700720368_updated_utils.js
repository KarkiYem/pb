/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eqbe6mfsm2ihshi")

  // remove
  collection.schema.removeField("qc0gcvg9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljrjf7gq",
    "name": "cruise",
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
    "id": "zvaktog6",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svkcbsgl",
    "name": "deck",
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
    "id": "cpbv4rcp",
    "name": "date",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qc0gcvg9",
    "name": "utils",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ljrjf7gq")

  // remove
  collection.schema.removeField("zvaktog6")

  // remove
  collection.schema.removeField("svkcbsgl")

  // remove
  collection.schema.removeField("cpbv4rcp")

  return dao.saveCollection(collection)
})
