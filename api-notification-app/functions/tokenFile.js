const fs = require("fs");
const path = require("path");
function readToken() {
  const pathTo = path.join(__dirname, "../resources/token.json");
  const json = fs.readFileSync(pathTo);
  const objectData = JSON.parse(json);
  return objectData;
}

function writeToken(token) {
  const tokens = readToken();
  if (!tokens.find((item) => item == token)) tokens.push(token);
  const pathTo = path.join(__dirname, "../resources/token.json");
  const jsonString = JSON.stringify(tokens);
  fs.writeFileSync(pathTo, jsonString);
  return tokens;
}
module.exports = { readToken, writeToken };
