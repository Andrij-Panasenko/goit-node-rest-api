const express = require("express");
const contactsControllers = require("../controllers/contactsControllers.js");
const validateBody = require('../helpers/validateBody.js');

const contactsRouter = express.Router();

// const validateSchema = {
//    //юзфємо джоі
// }

contactsRouter.get("/", contactsControllers.getAllContacts);


// contactsRouter.get(
//   "/",
//   validateBody(validateSchema),
//   contactsControllers.getAllContacts
// );


contactsRouter.get("/:id", contactsControllers.getContactById);

contactsRouter.delete("/:id", contactsControllers.deleteContact);

contactsRouter.post("/", contactsControllers.createContact);

contactsRouter.put("/:id", contactsControllers.updateContact);

module.exports = contactsRouter;





















// import express from "express";
// import {
//   getAllContacts,
//   getContactById,
//   deleteContact,
//   createContact,
//   updateContact,
// } from "../controllers/contactsControllers.js";

// const contactsRouter = express.Router();

// contactsRouter.get("/", getAllContacts);

// contactsRouter.get("/:id", getContactById);

// contactsRouter.delete("/:id", deleteContact);

// contactsRouter.post("/", createContact);

// contactsRouter.put("/:id", updateContact);

// export default contactsRouter;
