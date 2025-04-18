const express = require("express");
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) throw err;
  console.log('Connected to SQLite database');
  // 2025-04-18 19:04:41
});


/*
app.get("/", (req, res) => {
  res.send("Hello World44!");
});
app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
  //you see all information 2025-04-13 14:02:32 [今天怎么办才好?]
  // 2025-04-14 09:36:31 交通违法,60块

});
*/