require("dotenv").config();
const express  = require("express");
const app = express();
app.use(express.json());
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const connect = require('./config/db');
const allRoutes = require("./routes");
app.use('/api',allRoutes)

app.get("/",(req,res)=>{
    return res.send("Hello API is working now ...")
})



// Start the server
app.listen(SERVER_PORT, async() => {
  try {
    await connect();
    console.log(`Server started on PORT ${SERVER_PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
