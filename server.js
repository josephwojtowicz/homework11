const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);


app.listen(PORT, () => {
  console.log(`Server listening port: ${PORT}`)
})