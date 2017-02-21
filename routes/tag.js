let express = require('express')
let router = express.Router()
let acl = require('express-acl')
let models = require('../models')
let TagController = require('../controllers/TagController')(models.Tag)
let AuthController = require('../controllers/AuthController')(models.User)

router.use(AuthController.middlewareAuth)
router.use(acl.authorize)

router.get('/', TagController.getAll.bind(TagController))
router.get('/:_id', TagController.getById.bind(TagController))
router.post('/', AuthController.middlewareLogging, TagController.create.bind(TagController))
router.put('/:_id', AuthController.middlewareLogging, TagController.update.bind(TagController))
router.delete('/:_id', AuthController.middlewareLogging, TagController.remove.bind(TagController))

module.exports = router
