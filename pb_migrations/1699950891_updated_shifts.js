/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z9ts1q02vvtmc8e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0a53eoqo",
    "name": "udcapacity",
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
    "id": "uqlcum8u",
    "name": "ldcapacity",
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
    "id": "urr23tio",
    "name": "udpriceadult",
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
    "id": "akc290zg",
    "name": "udpricekid",
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
    "id": "mzt45ceg",
    "name": "udpriceinfant",
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
    "id": "q0xja1fu",
    "name": "ldpriceadult",
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
    "id": "0hke8clk",
    "name": "ldpricekid",
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
    "id": "xp1fplkd",
    "name": "ldpriceinfant",
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
  collection.schema.removeField("0a53eoqo")

  // remove
  collection.schema.removeField("uqlcum8u")

  // remove
  collection.schema.removeField("urr23tio")

  // remove
  collection.schema.removeField("akc290zg")

  // remove
  collection.schema.removeField("mzt45ceg")

  // remove
  collection.schema.removeField("q0xja1fu")

  // remove
  collection.schema.removeField("0hke8clk")

  // remove
  collection.schema.removeField("xp1fplkd")

  return dao.saveCollection(collection)
})
