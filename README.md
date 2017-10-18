# HarperDB Node.JS Driver
### Created by Ethan Arrowood

After cloning project navigate to [HarperDB](http://products.harperdb.io/download/beta) and download the appropriate beta version.

Decompress download and copy the `HarperDB` folder do this project directory.

Run `npm run init` to generate HarperDB Database and generate your environment variables for authorization. -- Generate Environment Variables is currently not implemented. Please add your DB username and password to a `.env` file with the following structure:
```
HARPERDB_USERNAME=[USERNAME]
HARPERDB_PASSWORD=[PASSWORD]
```


**Note** I highly recommend you set the DB path to `Path/To/This/Directory/hdb`
This will help contain any test queries you may run while testing the driver.

I've included a `server.js` running Fastify so you can hard test the driver as you make edits. TODO: Move server.js to an example dir. [Ref Issue #2](https://github.com/Ethan-Arrowood/harperdb-nodejs-driver/issues/2).
