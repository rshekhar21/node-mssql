import express from "express";
const app = express();
const log = console.log;
import router from "./routes/apis/index.js";

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("ok from home page");
});

app.listen(3000, (err) => log(`server started: http://localhost:3000`));
