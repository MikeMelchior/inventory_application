const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

exports.manufacturer_list_get = asyncHandler(async(req, res) => {
    const manufacturers = await db.get_manufacturers();

    const sorted = manufacturers.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

    res.render('manufacturerList', {
        manufacturers: sorted,
    });
});

exports.manufacturer_get = asyncHandler(async(req, res) => {
    const manufacturer = await db.get_manufacturer(req.params.name);
    res.render('manufacturer', {
        manufacturer: manufacturer,
    });
});

exports.search_get = asyncHandler(async(req, res) => {
    res.render('manufacturerSearch');
});

exports.search_post = asyncHandler(async(req, res) => {
    res.redirect(`/catalog/manufacturers/${req.body.manufacturerName}`)
});

exports.create_get = asyncHandler(async (req, res) => {
    res.render('manufacturerCreate');
});

exports.create_post = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const country = req.body.country;
    const website = req.body.website;
    const email = req.body.email;
    const description = req.body.description;

    const manufacturer = await db.get_manufacturer(name) 

    const isManufacturer = manufacturer !== undefined;

    if (isManufacturer) {
        res.render('manufacturerCreate', {
            name: name, 
            country: country,
            website: website,
            email: email,
            description: description,
            errors: ['That manufacturer already exists in the Database!']
        })
    } else {
        await db.add_manufacturer(name, country, website, email, description);
        res.redirect('/catalog/manufacturers')
    }
    
})

exports.update_get = asyncHandler(async (req, res) => {
    const m = await db.get_manufacturer(req.params.name);
    res.render('manufacturerUpdate', {
        name: m.name,
        country: m.country,
        website: m.website,
        email: m.email,
        description: m.description,
    })
})

exports.update_post = asyncHandler(async (req, res) => {
    await db.update_manufacturer(req.body.name, req.body.country, req.body.website, req.body.email, req.body.description);
    res.redirect('/catalog/manufacturers')
})