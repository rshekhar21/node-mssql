import mssql from "mssql";
import cnfig from "./db-config.js";
const log = console.log;
const cnstr = cnfig.config;
// log(cnstr);

const query = (sql) => {
  return new Promise((resolve, reject) => {
    mssql.connect(cnstr, (err) => {
      if (err) return reject(err);
      new mssql.Request().query(sql, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  });
};

export default {
  query,
};
