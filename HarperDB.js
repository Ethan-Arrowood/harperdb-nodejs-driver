var http = require("http");
var request = require('request');
var base64 = require("base-64");
var rp = require('request-promise');


class HarperDB {
  constructor() {
    this.options = {};
    this.isConnected = false;
  }

  connect(url, username, password) {
    if (arguments.length !== 3)
      throw new Error("Connect must be passed 3 arguments");

    const authorization = `Basic ${base64.encode(`${username}:${password}`)}`;

    const options = {
      "method": "POST",
      url,
      "headers": {
        "content-type": "application/json",
        authorization
      },
      "json": true,
    }

    rp({
      ...options,
      body: {"operation": "list_users"}
    })
      .then(() => {
        console.log("Succesfully connected to server!");
        this.isConnected = true;
        this.options = options;
      })
      .catch(error => {
        console.log(`Error: ${error.message}`);
      })
  }

  request(query) {
    if(!this.isConnected)
      throw new Error("Must connect to DB first using .connect()");
    else
      return rp({...this.options, body: query });
  }
}

module.exports.HarperDB = HarperDB;
