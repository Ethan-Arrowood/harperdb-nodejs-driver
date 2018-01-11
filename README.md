# HarperDB Node.JS Driver [![Build Status](https://travis-ci.org/Ethan-Arrowood/harperdb-nodejs-driver.svg?branch=master)](https://travis-ci.org/Ethan-Arrowood/harperdb-nodejs-driver) [![Coverage Status](https://coveralls.io/repos/github/Ethan-Arrowood/harperdb-nodejs-driver/badge.svg?branch=master)](https://coveralls.io/github/Ethan-Arrowood/harperdb-nodejs-driver?branch=master)

## Deprecating 
I'll be deprecating this package and will be replacing it with something much more succinct. Furthermore, this isn't exactly a database driver so the naming is confusing. You can check out the progress on the new package [here](https://github.com/Ethan-Arrowood/harperdb-connect)

[![https://nodei.co/npm/harperdb-nodejs-driver.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/harperdb-nodejs-driver.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/harperdb-nodejs-driver)


### Created by Ethan Arrowood


## Contributing 

After cloning project navigate to [HarperDB](http://products.harperdb.io/download/beta) and download the appropriate beta version.

Decompress download and copy the `HarperDB` folder do this project directory.

Run `npm run init` to generate HarperDB Database and generate your environment variables for authorization.

**Note** I highly recommend you set the DB path to `Path/To/This/Directory/hdb`
This will help contain any test queries you may run while testing the driver.

Template .env file
```env
HARPERDB_USERNAME=[USERNAME]
HARPERDB_PASSWORD=[PASSWORD]
```

Want to test out the driver?

Run `npm run start-harperDB` and then `npm run example-fastify`

Then navigate to localhost:3000/list_users in your browser, and you should be greeted with a response from the server containing data from the database.


## Documentation

### Getting Started
Install using: `npm install --save harperdb-nodejs-driver`

Import into your project using: 
```javascript
var { HarperDB } = require('harperdb-nodejs-driver');
```

Create an instance of the HarperDB driver class like so:
```javascript
var db = new HarperDB();
```

*Before* you can make requests to HarperDB you need to use the `.connect()` method.

```javascript
db.connect(
  <URL>,      // "http://localhost:9925"
  <USERNAME>, // "admin"
  <PASSWORD>  // "Password1!"
);
```
The `.connect()` method will handle the base64 encoding of your username and password for the request header.

Now you're ready to use the `.request()` method!

`.request()` returns a Promise. As shown in `fastify-example.js`:
```javascript
db
  .request({ operation: "list_users" })
  .then(response => {
    reply.send({ response });
  })
  .catch(e => console.error(e));
```

### Event Emitters
The HarperDB Driver class is hooked up to a standard Node.JS core event emitter. From any server file you can add event hooks such as:

```javascript
const db = new HarperDB();
db.event.on('connection', () => console.log('CONNECTED'));
```

Currently available events are as follows:
`request`, `connection`, `error`
