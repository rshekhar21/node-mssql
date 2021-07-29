const d = document,
  bulkForm = d.getElementById("form1"),
  tbl = d.getElementById("bulkTable"),
  tr = d.createElement("tr"),
  td = d.createElement("td"),
  tblBtn = d.getElementById("formSubmit"),
  log = console.log;

// document.getElementById("form1").addEventListener("submit", function (e) {
//   e.preventDefault();
//   log(e);
// });

bulkForm.addEventListener("submit", handleFrom);

let s = "",
  v = "",
  c = "",
  url = "http://localhost:3000/api/bulkadd";

function handleFrom(e) {
  e.preventDefault();
  let fd = new FormData(e.target);

  for (let key of fd.keys()) {
    // log(key, fd.get(key));
    let k = fd.get(key);
    //   log(`'${k}',`);
    s += `'${k}', `;
    v += `[${key}], `;
  }
  s = s.substring(0, s.length - 2);
  s = `VALUES(${s})`;

  v = v.substring(0, v.length - 2);
  v = `INSERT INTO test (${v})`;

  c = v + " " + s;
  fd.append("key", c);
  let data = convertFormData(fd);
  //   log(s);
  //   log(v);
  let t = `INSERT INTO test ([name], [email], [contact], [address]) values ('Raj','raj@gmail.com','9910075648','delhi'),('Sid','sid@gmai.com','981080449','gurugram'),('Amit','amit@gmail.com','9810800123','agra'),('Sumit','sumit@gmail.com','9910012345','etah'),('Gaurav','gaurav@gmai.com','9812398123','hadoi')`;
  //   log(c);
  let req = new Request(url, {
    body: JSON.stringify({ key: t }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  });
  fetch(req);
  bulkForm.reset();
  //   let req = new Request(url, {
  //     method: "POST",
  //     body: "email=test@example.com&password=pw",
  //     headers: { "content-type": "text/plain" },
  //   });

  //   fetch(req)
  //     .then((res) => {
  //       return res.text();
  //     })
  //     .then((text) => {
  //       log(text);
  //     })
  //     .catch((err) => {
  //       log(err);
  //     });
  //   log(c);
}

function convertFormData(fd) {
  let obj = {};
  for (let key of fd.keys()) {
    obj[key] = fd.get(key);
  }
  return obj;
}
