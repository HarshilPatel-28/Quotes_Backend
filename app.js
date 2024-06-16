const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');


const app = express();
app.use(cors());
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
  }));

  const formRoutes = require('./routes/formRoutes');



  connectDatabase();
app.get("/", (req, res) => {
    res.send("Api working ")

    
})

app.use("/api/v1",formRoutes);

app.listen(port, () => {
    console.log(`server is working on http://localhost:${port}`);

})