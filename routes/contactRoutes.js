const { getContact, createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController')

let route = require('express').Router()

route.get('/', getContacts)

route.post('/',createContact)

route.get('/:id',getContact)

route.put('/:id',updateContact)

route.delete('/:id',deleteContact)


module.exports = route