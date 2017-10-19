# HarperDB Node.JS Driver

## Created by Ethan Arrowood

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
