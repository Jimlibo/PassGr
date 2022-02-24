# Back end Server REST Api


![NodeJS](https://img.shields.io/badge/nodeJS-v7.3+-blue.svg)
![Express](https://img.shields.io/badge/express-v4.17.1+-red.svg)
![mysql](https://img.shields.io/badge/mysql-v2.2.5+-blue.svg)
## Overview

- Restfull Api Application, for [PassGR] website. 
- Api URL: [https://localhost:9103]

## NodeJS Packages
```json
"dependencies": {
    "convert-array-to-csv": "^2.0.0",
    "cors": "^2.8.5",
    "csvtojson": "^2.0.10",
    "express": "^4.17.2",
    "json-2-csv": "^3.15.0",
    "json2csv": "^5.0.6",
    "multer": "^1.4.4",
    "mysql": "^2.18.1"
  }
```

## Initializing Database
   1. Start a mysql server
   2. Create a database by typing "./init_db.sh"
   3. Fill the credentials -> /backend/app/config/db.config.js \
Alternatively, you can create the database, using the /database/dbdump.sql file

## Installation
For a quick installation 

```bash
$ npm install
$ node server.js
```

## Data
We randomly generated data to test the usage of the server. 
It can be found in folder [data]

  [PassGr]: https://localhost
