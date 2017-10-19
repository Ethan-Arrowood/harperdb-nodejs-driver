var fs = require("fs");

fs.readFile("./HarperDB/install_log.log", (err, data) => {
  if (err) throw err;
  var s = data.toString();
  // prettier-ignore
  var regex = /(HDB_ADMIN_\w+\\\".?\\\"(\w*[$-/:-?{-~!"^_`\[\]]*)\\\")/g;

  var m, username, password;
  while ((m = regex.exec(s)) !== null) {
    if (m.index === regex.lastIndex) regex.lastIndex++;

    m.forEach((match, groupIndex) => {
      if (groupIndex === 2) {
        if (username === undefined) username = match;
        else password = match;
      }
    });
  }

  if (username === undefined || password === undefined)
    throw new Error("Error reading log file. Please add .env manually.");

  var envVars =
    "HARPERDB_USERNAME=" + username + "\nHARPERDB_PASSWORD=" + password;
  fs.writeFile(".env", envVars, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
