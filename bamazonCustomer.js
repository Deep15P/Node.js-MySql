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




function display() {
    connection.query('SELECT * FROM `products`', function (error, results) {
        if (error) throw error;
        console.table(results);

        // connection.connect(function (err) {
        //     if (err) throw err;
        //     // run the start function after the connection is made to prompt the user
        //     console.log('\n -------- welcome ---------');

        // });

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
                var item_ID = answer.purchase - 1;
                var quantityAnswer = answer.quantity;
                // var quantityAnswer = answer.quantity; 
                // var confirmAnswer = answer.quantity;

                connection.query('SELECT * FROM `products`', function (error, results) {
                    if (error) throw error;
                    // console.log(results);
                    // console.log(item_ID);
                    // console.log(answer.quantity);
                    // console.log(results[item_ID].product_name)
                    // console.log(results[item_ID].stock_quantity)
                    // console.log("We have the item you are looking for!")


                    if (quantityAnswer >= results[item_ID].stock_quantity) {
                        console.log("We dont have that shiit, we only have about " + results[item_ID].stock_quantity + " ,that's all we got!")
                        display();


                    } else {
                        // console.log("");
                        console.log(results[item_ID].product_name + " purchased!")

                        var updateQuantity = results[item_ID].stock_quantity - quantityAnswer;


                        connection.query("UPDATE products SET ? WHERE ?", [{
                                    stock_quantity: updateQuantity
                                },
                                {
                                    id: answer.purchase
                                }

                            ],
                            function (err, resultsUpdate) {
                                if (err) throw err;
                                console.log("Your order is completed. Now get out of my face! I don't want to look at you!")
                                connection.destroy();
                            }
                        );

                    }

                });

            });
    });
}

display();