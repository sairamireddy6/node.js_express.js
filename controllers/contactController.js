const contactModel = require("../models/contactModel");

const getContacts = async (req, res) => {
    let contacts = await contactModel.find()
    res.status(200).json(contacts)
}

const createContact = async (req, res) => {
    console.log(req.body);
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
        return res.status(401).json({"message":"All fields must be provided"})
    }
    let data = await contactModel.create(req.body)
    res.status(201).json(data)
}

const getContact = async (req, res) => {
    let contact = await contactModel.findById(req.params.id)
    res.status(200).json(contact)
}

const updateContact = async (req, res) => {
    await contactModel.findByIdAndUpdate(req.params.id, req.body)
    let contact = await contactModel.findById(req.params.id)
    res.status(200).send(contact)
}

const deleteContact = async (req, res) => {
    await contactModel.deleteOne({_id:req.params.id})
    let contacts = await contactModel.find()
    res.status(200).json(contacts)
}

module.exports = {
    getContact,
    createContact,
    getContacts,
    updateContact,
    deleteContact
}