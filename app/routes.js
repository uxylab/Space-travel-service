const express = require('express')
const router = express.Router()


router.post(`/question`, function (req, res) {
    const accountType = req.session.data['account-type'];
  
    if (accountType === 'Personal') {
        res.redirect(`/v${verNum}/create-account/name`);
    } else {
        res.redirect(`/v${verNum}/create-account/name`);
    }
  });

// Add your routes here - above the module.exports line

module.exports = router
