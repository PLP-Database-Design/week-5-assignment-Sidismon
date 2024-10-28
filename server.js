// import our dependencies
const express = require('express'); 
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// confingure environment virables 
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE 
  //create a connection object
  });

// test the connection 
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database!');
  
    // connection is not successful
    console.log("successfully connected to mysql: ", db.threadId)
  });


  // retrieve all patients 
  app.get('/patients', (req, res) => {
    db.query('SELECT patient_id, first_name, last_name, date_of_birth FROM patients', (err, results) => {
      if (err) {
        console.error(err);
        res.status(400).json({ error: 'Internal Server Error' });
      } else {
        
        res.status(200).render('data',(datsa))
      }
    });
  });
// start and listen to the server 
app.listen(3001, () => {
    console.log(`Server listening
 on port ${3001}`);
});