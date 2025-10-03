require("dotenv").config();
const express  = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require("cookie-parser")
app.use(express.json());

const corsOptions = {
  origin : ["http://localhost:3000","http://localhost:3001"],
  credentials : true
}
app.use(cors(corsOptions))

// this helps to get cookie in backend (auth middleware)
app.use(cookieParser())


const SERVER_PORT = process.env.SERVER_PORT || 4000;
const connect = require('./config/db');
const allRoutes = require("./routes");
app.use('/api',allRoutes)

app.get("/",(req,res)=>{
    return res.json("Hello API is working now ...")
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
