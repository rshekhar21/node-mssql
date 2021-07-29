import express from "express";
const router = express.Router();
import db from "../../controller/queries.js";
const log = console.log;

router.use(express.json());

router.get("/", async (req, res) => {
  res.send("ok from router");
});

router.get("/list", async (req, res) => {
  try {
    let result = await db.fetchAll();
    res.send(result.recordsets);
  } catch (error) {
    log(error);
    res.json(error);
  }
});

export default router;
