const express = require("express");
const contactsControllers = require("../controllers/contactsControllers.js");
const validateBody = require("../helpers/validateBody.js");
const validateSchema = require("../schemas/contactsSchemas.js");
const isValidId = require("../helpers/isValidId.js");

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getContactById);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(validateSchema.createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(validateSchema.updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(validateSchema.updateFavoriteSchema),
  contactsControllers.updateFavorite
);

module.exports = contactsRouter;
