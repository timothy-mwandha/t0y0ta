/** This written by Timothy Wampa Mwandha creates a node.js web server, 
 * that passes values from the Toyota Mail Order Form and inserts them into a database. */


/** Upon install via npm, node's web framework called Express calls extra native and3rd party
 *  packages (files & libraries) which are required to move data from form to mysql db.
 * The packages are initiated and assigned to constant variables. */


const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const session = require('express-session');

/** Set up the middleware i.e. Express package 'uses' methods of other packages for 
 * 1 - morgan for logging traffic between client and server 
 * 2 - body parse for selecting DOM sections 
 * 3 - connecting to database, 4 - managing sessions in Express */

const webs3v3r = express();                   // variable for the main node.js package
webs3v3r.use(morgan('short'));               //to view diagnostic info about data comms
webs3v3r.use(parser.urlencoded({ extended: false }));
var html_dir = './public/';                //a variable to refer to the HTML directory
webs3v3r.use(express.static('./public')); //making node access static files in public folder.
webs3v3r.use(session({                   //keep track of user sessions
    secret: 'secret',                   //do not expose the data
    resave: true,                      //keep historical data
    saveUninitialized: true           // keep track of uninitialized attempts/sessions.
}));

/** Set up route for seaching the file system to get the index page i.e form and response to user requests.
 * Express fetches toyota_order_form.html from the public directory and sends to client browser */

webs3v3r.get("/", function(request, reponse) {
    reponse.sendfile(html_dir+"toyota_order_form.html");
  });

  /** A connection with the database is created using a mysql method, and it is stored in a 
 * constant variable for re-use whilst querying the database. */

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customer'
})

/**variables defined and declared to store HTML element names as parsed by body parser module */
webs3v3r.post('/toy', (request, response) =>{
    const custID = req.body.custID;
    const name = req.body.name;
    const city = req.body.city;
    const courier = req.body.courier;
    const partno = req.body.partno;
    const price = req.body.price;
    const qty = req.body.quant;
    const tot = req.body.total;

    /** create a string to query and insert into mailordedr table of toyota database*/
    const querystring = "INSERT INTO mailorder(custID, name, city, courier, partno, prce, quant, total) VALUES (?,?,?,?,?,?,?,?,?)";

    /** the connection method passes arguments of the variables*/
    connection.query(querystring, [customID,name, city, courier, partno, descr, price, qty, total])
    console.log('getting the form input123');
})

/** Express creates a listener on port 3000 of the client and whenever an event or
 *  request comes to this port, node interprets the request/responds as per the script */

 webs3v3r.listen(8080);
 console.log("server started at port 8080. Waiting to serve you please...");
 
 setTimeout(function() {
    res.redirect("/")
    res.end();
}, 15000);