// #! /usr/bin/env node

// const { Client } = require("pg");

// const SQL = `

// CREATE TABLE IF NOT EXISTS manufacturer (
// name VARCHAR(255) PRIMARY KEY,
// country VARCHAR(255),
// website VARCHAR(255),
// email VARCHAR(255),
// description VARCHAR(255)
// );

// CREATE TABLE model (
// name VARCHAR(255) PRIMARY KEY,
// make VARCHAR(255),
// zts FLOAT,
// hp INTEGER,
// CONSTRAINT fk_make FOREIGN KEY (make) REFERENCES manufacturer (name)
// );

// CREATE TABLE car (
// vin INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// model VARCHAR(255),
// owner VARCHAR(255),
// year INTEGER,
// colour VARCHAR(255),
// CONSTRAINT fk_model FOREIGN KEY (model) REFERENCES model (name)
// );



// INSERT INTO manufacturer (name, country, website, email, description) 
// VALUES
//   ('Toyota', 'Japan', 'toyota.com', 'toyotacars@gmail.com', 'Reliable affordable cars'),
//   ('Subaru', 'Japan', 'subaru.com', 'subarucars@outlook.com', 'Sporty and outdoorsy'),
//   ('Honda', 'Japan', 'honda.com', 'hondacars@honda.com', 'Built to last');

// INSERT INTO model (name, make, zts, hp)
// VALUES 
//     ('Civic', 'Honda', 8.8, 180),
//     ('Corolla', 'Toyota', 8.5, 169),
//     ('Outback', 'Subaru', 5.8, 182);

// INSERT INTO car (model, owner, year, colour)
// VALUES
//     ('Civic', 'Bob', 2022, 'Blue'),
//     ('Corolla', 'Mary', 2019, 'Silver'),
//     ('Outback', 'Sally', 2025, 'Orange');
// `;

// async function main() {
//   console.log("seeding...");
// //   const client = new Client({
// //     connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`,
// //   });
//   const client = new Client({
//     connectionString: "postgresql://mike:Formidable1!@localhost:5432/cars",
//   });
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }

// main();
