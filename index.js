var express = require("express");

var router = express();

router.get("/", (req, res)=>{
    res.send("Finished...")
});

router.listen(7500, ()=>{
    console.log("Server started on port 7500..");
})