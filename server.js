const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/pets.routes")(app);

app.listen(3500, () => console.log("Server is listening on Port 3500"));
