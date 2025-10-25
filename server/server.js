const express = require("express");
const app = express();

// used to set requests for front end
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions));

// retrieve local host
app.get("/api", (req, res, next) => {
    // necessary statement for CORS requests, along with next();
    res.set({
        "Access-Control-Allow-Origin": "*"
    });
    res.json({names: ["anton", "rohan", "russ"]});
    next();
});

app.listen(8080, () => {
    console.log("Server started on port 8080.");
})