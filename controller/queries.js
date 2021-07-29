import query from "../model/index.js";
const log = console.log;
let sql = "";

const newCustomer = async (name, email = "", contact = "", address = "") => {
  sql = `INSERT INTO test(name, email, contact, address) VALUES('${name}', '${email}', '${contact}', '${address}')`;
  return query.query(sql);
};

const fetchAll = async () => {
  sql = `SELECT * FROM test`;
  return query.query(sql);
};

const runQuery = async (qry) => {
  return query.query(qry);
};

export default {
  newCustomer,
  fetchAll,
  runQuery,
};
