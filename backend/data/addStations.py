# Script that reads data from csv file and fills the station table in our db
# !pip install pandas
# !pip install mysql-connector-python

import pandas as pd
import mysql.connector

db = mysql.connector.MySQLConnection(  # fill with your own credentials - same as with file db.config.js
    host="localhost",
    user="****",
    password="******",
    database=" "
    )
mycursor = db.cursor()

operators = {   # dictionary that maps each operator name to its OperatorID;
    'aodos': 1,
    'egnatia': 2,
    'gefyra': 3,
    'kentriki_odos': 4,
    'nea_odos': 5,
    'olympia_odos': 6,
    'moreas': 7
}

PATH_TO_CSV = "./sampledata01_stations.csv"    # change to the appropriate path if needed
df = pd.read_csv(PATH_TO_CSV, sep=';')

for i in range(0, len(df)):  # adding each station to the database
    st_id = df.iloc[i]['stationID']
    op_ID = operators[df.iloc[i]['stationProvider']]   # find the provider and return the appropriate ID
    name = df.iloc[i]['stationName']

    q = "INSERT INTO station VALUES ('{}', {}, '{}')".format(st_id, op_ID, name)
    mycursor.execute(q)
    db.commit()   # save changes

# closing the connection with the database
mycursor.close()
db.close()