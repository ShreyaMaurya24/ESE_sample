const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
  res.send("Backend Working Successfully");
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/candidates", require("./routes/candidateRoutes"));
app.use("/api/match", require("./routes/matchRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/interview", require("./routes/interviewRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});