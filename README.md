# rsasmal-grx10-solar
Solar panel assignment GRX10

Default port 3000. Environment variable PORT will override if set.
SQLITE DB used to store phone numbers in a phone_numbers.db file.

Run following commands

1. Run the install command first time. This will pull in dependencies.
npm install

2. Run the server start command. This will initialize the db file and empty phones table and start the server on port 3000, unless overridden by the PORT environment variable.
npm start

Open localhost:3000 or localhost:PORT on any browser

Enter fields and click Calculate.
Output should appear.
Phone numbers should be stored in the sqlite db. UNIQUE constraint ensures no duplication.
