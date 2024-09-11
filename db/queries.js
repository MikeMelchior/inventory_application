const pool = require('./pool');

exports.get_car = async (vin) => {
    const { rows } = await pool.query("SELECT * FROM car WHERE vin = " + vin);
    return rows[0];
};

exports.get_cars = async () => {
    const { rows } = await pool.query("SELECT * FROM car");
    return rows
};

exports.add_car = async (modelName, owner, year, colour) => {
    await pool.query(`
        INSERT INTO car (model, owner, year, colour)
        VALUES
            ('${modelName}', '${owner}', '${year}', '${colour}')
        `)
}

exports.get_model = async (name) => {
    const { rows } = await pool.query(`
        SELECT * FROM model 
        WHERE UPPER(name) LIKE UPPER('${name}')
    `)
    return rows[0];
};

exports.get_models = async () => {
    const { rows } = await pool.query("SELECT * FROM model");
    return rows;
};

exports.add_model = async (name, make, zts, hp) => {
    await pool.query(`
        INSERT INTO model (name, make, zts, hp)
        VALUES
            ('${name}', '${make}', '${zts}', '${hp}');
        `)
}

exports.update_model = async (name, make, zts, hp) => {





    // await pool.query(`
    //     UPDATE model
    //     SET
    //         name = '${name}',
    //         make = '${make},
    //         zts = '${zts}',
    //         hp = '${hp}',
    //     `)
}

exports.get_manufacturer = async (name) => {
    const { rows } = await pool.query("SELECT * FROM manufacturer WHERE UPPER(name) LIKE UPPER('" + name + "')");
    return rows[0];
};

exports.get_manufacturers = async () => {
    const { rows } = await pool.query("SELECT * FROM manufacturer");
    return rows;
};

exports.add_manufacturer = async (name, country, website, email, description) => {
    await pool.query(`INSERT INTO manufacturer (name, country, website, email, description) VALUES ('${name}', '${country}', '${website}', '${email}', '${description}');`)
}

exports.update_manufacturer = async (name, country, website, email, description) => {
    console.log(name, country, website, email, description)
    await pool.query(`UPDATE manufacturer SET name = '${name}', country = '${country}', website = '${website}', email = '${email}', description = '${description}' WHERE LOWER(name) LIKE LOWER('${name}');`)
}

