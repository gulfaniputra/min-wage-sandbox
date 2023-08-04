require("dotenv").config();

let url =
  "https://webapi.bps.go.id/v1/api/list/model/data/domain/0000/var/1172/key/" +
  process.env.WEBAPI_BPS_KEY;

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
