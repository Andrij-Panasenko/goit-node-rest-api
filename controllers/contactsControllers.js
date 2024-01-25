const contactsService = require("../services/contactsServices.js");
const controllerWrapper = require("../helpers/controllerWraper.js");
const HttpError = require("../helpers/HttpError");

const Contact = require('../models/contact.js');

const getAllContacts = async (_, res) => {
  const result = await Contact.find();//запит за всіма даними в колекції
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
  const result = await contactsService.removeContact(id);// findByIdAndDelete(id) 
  if (!result) throw HttpError(404);
  res.status(200).json(result);
};

const createContact = async (req, res) => {
  // const { name, email, phone } = req.body;
  const result = await Contact.create(req.body);
  if (!result) throw HttpError(400);
  res.status(201).json(result);
};


//OLD
// const createContact = async (req, res) => {
//   const { name, email, phone } = req.body;
//   const result = await contactsService.addContact({ name, email, phone });
//   if (!result) throw HttpError(400);
//   res.status(201).json(result);
// };

const updateContact = async (req, res) => {
  const { id } = req.params;

  if (req.body === undefined)
    throw HttpError(400, "Body must have at least one field");

  const result = await contactsService.updateContact(id, req.body); //findByIdAndUpdate(id, req.body, {new: true})
  //
  if (!result) throw HttpError(404);

  res.status(200).json(result);
};

// const updateFavorite = async (req,res) => {
//   const { id } = req.params;
//   const result = await Contact.findByIdAndUpdate(id);
//   if (!result) throw HttpError(404)

//   res.status(200).Json(result)
// }

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContactById: controllerWrapper(getContactById),
  deleteContact: controllerWrapper(deleteContact),
  createContact: controllerWrapper(createContact),
  updateContact: controllerWrapper(updateContact),
  // updateFavorite: controllerWrapper(updateFavorite),
};
