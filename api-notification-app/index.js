const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const { readToken, writeToken } = require("./functions/tokenFile");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.post("/token", (request, response) => {
  const token = request.body.token;
  const tokens = readToken();
  if (!token) return response.status(500).json({ tokens });
  writeToken(token);
  return response.status(200).json({ newtoken: token, tokens:readToken() });
});

app.post("/notify", (request, response) => {
  const options = request.body;
  const expoNotificationURL = "https://exp.host/--/api/v2/push/send";
  axios
    .post(expoNotificationURL, options)
    .then((result) => {
      return response.status(200).json(options);
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`);
});
