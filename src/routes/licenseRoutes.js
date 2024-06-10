const express = require('express');
const router = express.Router();
const licenseController = require('../controllers/licenseController');

router.get('/', licenseController.getLicenseKey);

module.exports = router;
