const d = document,
  myForm = d.getElementById("form_1"),
  myTable = d.getElementById("table_1"),
  tblRow = d.createElement("tr"),
  log = console.log;

let tblData = d.createElement("td"),
  cntr = 1;

myForm.addEventListener("submit", handleFormData);
let td = "";
function handleFormData(e) {
  e.preventDefault();
  td = "";
  let fd = new FormData(this);
  //   fd.append("sn", cntr);
  for (let key of fd.keys()) {
    let k = fd.get(key);
    // log(key, k);
    // td += tblData.append(k);
    td += `<td>${k}</td>`;
  }
  td = `<tr><th>${cntr}</th>${td}</tr>`;
  cntr++;

  let newRow = myTable.insertRow(myTable.rows.length);
  newRow.innerHTML = td;
  myForm.reset();
}

function convertFormData(fd) {
  let obj = {};
  for (let key of fd.keys()) {
    obj[key] = fd.get(key);
  }
  return obj;
}
