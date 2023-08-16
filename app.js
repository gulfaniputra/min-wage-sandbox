require("dotenv").config();

const url =
  "https://webapi.bps.go.id/v1/api/list/model/data/domain/0000/var/1172/key/" +
  process.env.WEBAPI_BPS_KEY;

fetch(url, { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.datacontent);
  });
