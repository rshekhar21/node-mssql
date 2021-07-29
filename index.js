import express from "express";
const app = express();
const log = console.log;
import router from "./routes/apis/index.js";

app.use(express.json());
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/api", router);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, (err) => log(`server started: http://localhost:3000`));
