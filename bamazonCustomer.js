var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log('\n -------- welcome ---------');
    display();
});


function display() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
    
    
    inquirer
        .prompt([{
                type: "input",
                name: "purchase",
                message: "Type in the ID of the product you would like to buy?",
            },

            {
                type: "input",
                name: "quantity",
                message: "How many would you like to buy?",

            },

            {
                type: "confirm",
                name: "confirm",
                message: "Please confirm your order?"
            }
        ])

        .then(function (answer) {
            var item_ID = answer.purchase;
            // var quantityAnswer = answer.quantity;
            var confirmAnswer = answer.quantity;

            connection.query('SELECT * FROM `products` WHERE `id` = ?', [item_ID], function (error, results) {
                if (error) throw error;
                // console.log(results);
                if (results === 0) {
                    console.log("Please pick a valid id from the table!");

                    display();
                } else {
                    console.log("We have the item you are looking for!")
                    .then(function(answer2){
                        var quantityAnswer = answer2.quantity;
                        if (quantityAnswer > results[0].stock_quantity) {
                            console.log("We dont have that shiit, we only have about " + results[0].stock_quantity + " ,that's all we got!")

                            display();
                        } else {
                            console.log("");
                            console.log(results[0].)
                        }
                    })
                }
                
            });

        });

}