import connection from "./connection.js";

connection.query(
  "SELECT name FROM country WHERE population > 8000000;",
  (err, results) => {
    if (err) throw err;
    console.log("Countries with population greater than 8 million:");
    console.log(results);
  }
);
connection.query(
  'SELECT name FROM country WHERE name LIKE "%land%";',
  (err, results) => {
    if (err) throw err;
    console.log('Countries with "land" in their name:');
    console.log(results);
  }
);
connection.query(
  "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000;",
  (err, results) => {
    if (err) throw err;
    console.log("Cities with population between 500,000 and 1 million:");
    console.log(results);
  }
);

connection.query(
  'SELECT name FROM country WHERE continent = "Europe";',
  (err, results) => {
    if (err) throw err;
    console.log("Countries in Europe:");
    console.log(results);
  }
);

connection.query(
  "SELECT name FROM country ORDER BY surfacearea DESC;",
  (err, results) => {
    if (err) throw err;
    console.log("Countries ordered by surface area (descending):");
    console.log(results);
  }
);
connection.query(
  'SELECT name FROM city WHERE countrycode = "NLD";',
  (err, results) => {
    if (err) throw err;
    console.log("Cities in the Netherlands:");
    console.log(results);
  }
);

connection.query(
  'SELECT population FROM city WHERE name = "Rotterdam";',
  (err, results) => {
    if (err) throw err;
    console.log("Population of Rotterdam:");
    console.log(results);
  }
);

connection.query(
  "SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10;",
  (err, results) => {
    if (err) throw err;
    console.log("Top 10 countries by surface area:");
    console.log(results);
  }
);

connection.query(
  "SELECT name FROM city ORDER BY population DESC LIMIT 10;",
  (err, results) => {
    if (err) throw err;
    console.log("Top 10 most populated cities:");
    console.log(results);
  }
);

connection.query(
  "SELECT SUM(population) AS world_population FROM country;",
  (err, results) => {
    if (err) throw err;
    console.log("Population number of the world:");
    console.log(results);
  }
);
connection.end();
