# Exercises
## Product ID endpoint

Add view in pgAdmin

```sql
CREATE VIEW "sequel-mart-schema".v_Product_Details
AS
SELECT product_id, product_item FROM "sequel-mart-schema"."Products"
```

- Add file `backend\routes\products_id.js`

```jsx
//Route into the database to retrieve customer information

const express = require('express');
const router = express.Router();
const db = require('../db');        //Connects to DB & sends a GET request for info

/* Specify a query, once the promise has been fulfilled, convert it to json & send it to the target page
- router.get('target page, (request, response), db.any = any number (unknown) of rows) */

router.get('/', (req, res) => {
  db.any(
    `
    SELECT * FROM "sequel-mart-schema".v_Product_Details
    `
  )
  .then(rows => {
    
    res.send(rows);
  })
  .catch(error => {
    console.log(error);
  })
})

//Export it to be used by routes & files that need to connect
module.exports = router;
```

- Add to the end of `backend\app.js`
- You may need to restart the server

```jsx
//Products with ID Route - Enable the data to be picked up from the router that contains the SQL code
const productsIDRouter = require('./routes/products_id');
app.use('/products_id', productsIDRouter);
```

- Test with REST Client
- Add to restrequests.http

```
GET http://localhost:5001/products_id
```
