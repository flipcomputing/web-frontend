//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info

/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.post('target page, (request, response), db.any = any number (unknown) of rows) */
router.post('/', (req, res) => {
    console.log("Offers", req.body);
  
    // Extract data from request body
    const { offer_name, product_id, offer_discount_percentage, offer_start_date, offer_end_date } = req.body;
    
    db.any(
      `INSERT INTO "sequel-mart-schema"."Product_Offers"
      (offer_name, product_id, offer_discount_percentage, offer_start_date, offer_end_date)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`, // Assuming you want to return the inserted row
      [offer_name, product_id, offer_discount_percentage, offer_start_date, offer_end_date]
    )
    .then(rows => {
      // Log and send the rows as response if needed
      console.log(rows);
      res.send(rows);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
  });

//Export it to be used by routes & files that need to connect
module.exports = router;