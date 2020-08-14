var express = require("express"),
    app     = express();

app.use(express.static(__dirname + '/public'));
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("color_game");
})

app.listen(3000, function(){
    console.log("The game works");
})