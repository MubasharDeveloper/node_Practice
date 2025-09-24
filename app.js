import express from "express";
import morgan from "morgan";
import studentRoutes from "./routes/studentRoutes.js";
import { connectDB } from "./config.js";
const app = express();
const port = 4000;

// Middleware
app.use(morgan("dev"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // enable views

// Routes
app.use("/students", studentRoutes);
app.use("/", (req, res)=>{
  // res.render('home');
  res.json("api working")
});

// Connect DB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
