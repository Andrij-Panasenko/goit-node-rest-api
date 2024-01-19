const contactsService = require("../services/contactsServices.js");
const controllerWrapper = require("../helpers/controllerWraper.js");
const HttpError = require('../helpers/HttpError');


const getAllContacts = async (_, res) => {
  const result = await contactsService.listContact();
  if (!result) throw HttpError(404)
  res.status(200).json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id)
  if (!result) throw HttpError(404)
  res.status(200).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) throw HttpError(404);
  res.status(200).json(result);
};

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const result = await contactsService.addContact({ name, email, phone });
  if (!result) throw HttpError(400);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  // const { name, email, phone } = req.body;
  console.log('req.body', req.body)
  const result = await contactsService.updateContact(id, req.body);
  if (!result) throw HttpError(400);
  res.status(200).json(result);
};

// Експортуємо функції
module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  deleteContact: controllerWrapper(deleteContact),
  createContact: controllerWrapper(createContact),
  updateContact: controllerWrapper(updateContact),
};

// import contactsService from "../services/contactsServices.js";

// export const getAllContacts = (req, res) => {
//   const { url, method } = req;
// };

// export const getContactById = (req, res) => {
//   const { url, method } = req;
// };

// export const deleteContact = (req, res) => {
//   const { url, method } = req;
// };

// export const createContact = (req, res) => {
//   const { url, method } = req;
// };

// export const updateContact = (req, res) => {
//   const { url, method } = req;
// };
