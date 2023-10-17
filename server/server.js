import express, { json } from "express";
import db from './db.js';
const app = express();

const port = 8080;
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// set access port
app.use(json());
app.listen(port, () => {
    console.log(`RUN http://localhost:${port}`);
});

app.get("/", function(req, res) {
    res.send("Hello World!");
});

// DROP table if exists, then CREATE
const drop_item = "DROP TABLE IF EXISTS Item";
const creat_item = "CREATE TABLE Item (\
    Id int NOT NULL AUTO_INCREMENT,\
Item varchar(255),\
quantity int,\
PRIMARY KEY (Id) );";

// INSERT default dat
const item_add1 = "INSERT INTO Item (Item, quantity) VALUES ('Purple T', 10)";
const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('White T', 20)";

app.get("/get_item", function(req, res) {
db.query(drop_item);
db.query(creat_item);
db.query(item_add1);
db.query(item_add2);
const result = db.query('select * from Item');
return res.send(result);
});

app.post("/update_quantity", function(req, res) {
    var IDs = req.body.names;
    var quantities = req.body.quantity;

    IDs.forEach((id, index) => {
      const quan = quantities[index];
      const query = `UPDATE Item SET quantity = ${quan} WHERE Id = ${id}`;

      db.query(query, (error, result) => {
        if (error) {
          console.error("Error updating quantity:", error);
        } else {
          console.log("Quantity updated successfully");
        }
      });
    });

    return res.send("Update complete"); // Corrected the response message
  });





