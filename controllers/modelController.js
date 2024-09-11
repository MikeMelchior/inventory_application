const asyncHandler = require("express-async-handler");
const db = require('../db/queries');
const manufacturerDoesntExistError = require('../errorHandlers/manufacturerDoesntExistError')

exports.models_list_get = asyncHandler(async (req, res) => {
    const models = await db.get_models();
    res.render('modelList', {
        models: models,
    })
});

exports.model_get = asyncHandler(async(req, res) => {
    const model = await db.get_model(req.params.name);
    res.render('model', {
        model: model,
    })
});

exports.search_get = asyncHandler(async (req, res) => {
    res.render('modelSearch');
})

exports.search_post = asyncHandler(async (req, res) => {
    const modelName = req.body.modelName;
    res.redirect(`./${modelName}`)
})

exports.create_get = asyncHandler(async(req, res) => {
    res.render('modelCreate')
})

exports.create_post = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const make = req.body.make;
    const zts = req.body.zts;
    const hp = req.body.hp;

    const manufacturer = await db.get_manufacturer(make);
    if (manufacturer == undefined) {
        let errors = [new manufacturerDoesntExistError()];
        res.render('modelCreate', {
            name: req.body.name,
            make: req.body.make,
            zts: req.body.zts,
            hp: req.body.hp,
            errors: errors
        })
    }

    await db.add_model(name, make, zts, hp);
    res.redirect('./');
})
