const asyncHandler = require('express-async-handler');

exports.home_get = asyncHandler(async(req, res) => {
    res.render('index', {hideNav: true})
})