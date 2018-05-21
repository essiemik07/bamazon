var mysql = require('mysql');
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    connectionLimit: 100,
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  // function which prompts the user for ID of product they want to purchase
  function start() {
    inquirer
     .prompt({
       name: "idOfProduct",
       type: "ID",
       message: "Please enter [ID] if searching for product. Please note response is case sensitive.",
       choices: ["300", "301", "302", "303", "304", "305", "306", "307", "308", "309"]
      })
      .then(function(answer) {
        // based on their answer, 
        if (answer.idOfProduct == "ID") {
          idItem();
        }
      });
  }

  // function to handle prompting for ID of items
  function idItem() {
  // prompt for info about the item that is being looked up
   inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the product name?"
      },
      {
        name: "category",
        type: "input",
        message: "What department?"
      },
      { 
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?",
    
      },
      {
        name: "product",
        type: "ID",
        choices: function() {
          var productsArray = [];
          var results = [];
          for (var i = 0; i < results.length; i++) {
              productsArray.push(results[i].stock_quantity);
          }
          return productsArray;
        },
        message: "To reconfirm what is the item number?"
      },
      {
        name: "quantity",
        type: "input",
        message: "Please reconfirm the quantity desired."
      },
    ])
    .then(function(answer) {    
    // query the database for all products
    connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
      // get the information of item
      var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.quantity) {
            chosenItem = results[i];
          }
        }
  
        // see if there is enough in stock
        if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
          // enough in stock update database, update customer and restart
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: answer.quantity
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Stock available!");
              start();
            }
          );
        }
        else {
          // not enough in quantity, sorry message and restart
          console.log("So sorry none in stock!");
          start();
        }
      });
   });
  }