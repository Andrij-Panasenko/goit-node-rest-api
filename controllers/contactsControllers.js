const contactsService = require("../services/contactsServices.js");
const controllerWrapper = require("../helpers/controllerWraper.js");
const HttpError = require("../helpers/HttpError");

const getAllContacts = async (_, res) => {
  const result = await contactsService.listContact();
  if (!result) throw HttpError(404);
  res.status(200).json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) throw HttpError(404);
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

  if (req.body === undefined)
    throw HttpError(400, "Body must have at least one field");

  const result = await contactsService.updateContact(id, req.body);
  if (!result) throw HttpError(404);

  res.status(200).json(result);
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  deleteContact: controllerWrapper(deleteContact),
  createContact: controllerWrapper(createContact),
  updateContact: controllerWrapper(updateContact),
};
