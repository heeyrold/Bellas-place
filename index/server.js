
import express from "express";
const app= express();
const port= 3000 ;

app.use(express.static("views"));
app.get ("/", (req, res) =>{
  res.render("home.ejs");
});

app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});
