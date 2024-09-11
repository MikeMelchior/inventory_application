const asyncHandler = require('express-async-handler');
const db = require('../db/queries');
const modelDoesntExistError = require('../errorHandlers/modelDoesntExistError');
const manufacturerDoesntExistError = require('../errorHandlers/manufacturerDoesntExistError');


exports.car_list_get = asyncHandler(async (req, res) => {
    const cars = await db.get_cars()
    for (let car of cars) {
        const model = await db.get_model(car.model);
        const make = await db.get_manufacturer(model.make);
        car.make = make.name;
    }
    console.log(cars)
    res.render('carList', { 
        cars: cars,
    });
})

exports.car_get = asyncHandler(async (req, res) => {
    const vin = req.params.vin;
    const car = await db.get_car(vin);
    res.render('car', { car: car })
})

exports.search_get = asyncHandler(async (req, res) => {
    res.render('carSearch');
})

exports.search_post = asyncHandler(async (req, res) => {
    const vin = await req.body.vin;
    res.redirect(`/catalog/cars/${vin}`)
})

exports.create_get = asyncHandler(async (req, res) => {
    res.render('carCreate');
})

exports.create_post = asyncHandler(async (req, res) => {
    const owner = req.body.owner;
    const year = req.body.year;
    const colour = req.body.colour;

    // get model and make from db
    const model = await db.get_model(req.body.model);
    const manufacturer = await db.get_manufacturer(model.make);

    // error check and, if errors are present, re-render page with previously submitted information
    let errors = [];
    if (model == undefined) {
        errors.push(new modelDoesntExistError())
    }
    if (manufacturer == undefined) {
        errors.push(new manufacturerDoesntExistError());
    }
    
    const hasErrors = errors.length > 0;

    if (hasErrors) {
        res.render('carCreate', {
            model: model.name,
            owner: owner,
            year: year, 
            colour: colour,
            errors: errors
        })
    }

    // if error check is passed query db to add car
    await db.add_car();




})

