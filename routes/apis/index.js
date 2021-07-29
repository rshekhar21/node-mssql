import express from "express";
const router = express.Router();
import db from "../../controller/queries.js";
const log = console.log;

router.use(express.json());

router.get("/", async (req, res) => {
  res.render("./api");
});

router.get("/list", async (req, res) => {
  try {
    let result = await db.fetchAll();
    res.send(result.recordsets);
  } catch (error) {
    res.json(error);
  }
});

router.get("/new", (req, res) => {
  res.render("./newcust.ejs");
});

router.post("/create", async (req, res) => {
  try {
    let { name, email, contact, address } = req.body;
    let result = await db.newCustomer(name, email, contact, address);
    res.send(result);
  } catch (error) {
    res.json(error);
  }
});

router.post("/bulkadd", async (req, res) => {
  log(req.body);
  res.send("bulkadd");
  // try {
  //   let sql =
  //     "INSERT INTO test (name, email, contact, address) values ('Raj','raj@gmail.com','9910075648','delhi'),('Sid','sid@gmai.com','981080449','gurugram'),('Amit','amit@gmail.com','9810800123','agra'),('Sumit','sumit@gmail.com','9910012345','etah'),('Gaurav','gaurav@gmai.com','9812398123','hadoi')";
  //   let result = await db.runQuery(sql);
  //   res.send(result);
  // } catch (error) {
  //   res.json(error);
  // }
});

router.get("/bulkform", async (req, res) => {
  res.render("./bulkadd.ejs");
});

export default router;
