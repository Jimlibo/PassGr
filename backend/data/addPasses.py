# Script that reads data from csv file and fills the passes table in our db
# !pip install pandas
# !pip install mysql-connector-python

import pandas as pd
import mysql.connector

db = mysql.connector.MySQLConnection(   # fill with your own credentials
    host="localhost",
    user="****",
    password="****",
    database=" "
    )
mycursor = db.cursor()

PATH_TO_CSV = "./sampledata01_passes100_8000.csv"   # change to the appropriate path if needed
df = pd.read_csv(PATH_TO_CSV, sep=';')

for i in range(0, len(df)):
    pass_id = df.iloc[i]['passID']
    st_id = df.iloc[i]['stationRef']
    amount = df.iloc[i]['charge']
    timestamp = df.iloc[i]['timestamp']
    veh_id = df.iloc[i]['vehicleRef']

    q = "INSERT INTO pass VALUES ('{}', '{}', '{}', STR_TO_DATE('{}', '%d/%m/%Y %h:%i'), {})".format(pass_id, st_id, veh_id, timestamp, amount)
    mycursor.execute(q)
    db.commit()  # save changes

mycursor.close()  # closing the connection
db.close()


