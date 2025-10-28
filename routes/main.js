// Create a new router
const express = require("express");
const router = express.Router();

var shopData ={
    shopName: "Drinks R Us",
    productCategories:[
        "Beer", "Wine", "Soft Drinks", "Hot Drinks"
    ],
    shops: [
        {
            location: "New Cross",
            manager: "Alice Smith",
            address: "14 New Cross Road, SE14 5BQ"
        },
        {
            location: "Welling",
            manager: "Bob Johnson",
            address: "62 Exeter Road, DA16 3JU"
        },
        {
            location: "Charlton",
            manager: "Carla Brown",
            address: "78 Redchurch Street, SE7 7DP"
        }
    ]
    
}

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req,res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function(req,res) {
    
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req,res) => {
    res.render("register.ejs", shopData)
});

router.post("/registered", (req,res) => {
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send a confirmation email to '+ req.body.email +' shortly.')
});

// Export the router object so index.js can access it
module.exports = router;
