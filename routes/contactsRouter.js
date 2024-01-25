const express = require("express");
const contactsControllers = require("../controllers/contactsControllers.js");
const validateBody = require("../helpers/validateBody.js");
const validateSchema = require("../schemas/contactsSchemas.js");

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getContactById);

contactsRouter.delete("/:id", contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(validateSchema.createContactSchema),
  contactsControllers.createContact
);

// contactsRouter.post('/favorite')

contactsRouter.put(
  "/:id",
  validateBody(validateSchema.updateContactSchema),
  contactsControllers.updateContact
);

module.exports = contactsRouter;
