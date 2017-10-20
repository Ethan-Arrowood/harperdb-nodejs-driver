# HarperDB Node.JS Driver [![Build Status](https://travis-ci.org/Ethan-Arrowood/harperdb-nodejs-driver.svg?branch=master)](https://travis-ci.org/Ethan-Arrowood/harperdb-nodejs-driver) [![Coverage Status](https://coveralls.io/repos/github/Ethan-Arrowood/harperdb-nodejs-driver/badge.svg?branch=master)](https://coveralls.io/github/Ethan-Arrowood/harperdb-nodejs-driver?branch=master)

### Created by Ethan Arrowood

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

### Event Emitters
The HarperDB Driver class is hooked up to a standard Node.JS core event emitter. From any server file you can add event hooks such as:

```javascript
const db = new HarperDB();
db.event.on('connection', () => console.log('CONNECTED'));
```

Currently available events are as follows:
`request`, `connection`, `error`
