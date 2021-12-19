# Script that reads data from csv file and fills the tranceiver table in our db
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

operators = {   # dictionary that maps each operator name to its OperatorID;
    'aodos': 1,
    'egnatia': 2,
    'gefyra': 3,
    'kentriki_odos': 4,
    'nea_odos': 5,
    'olympia_odos': 6,
    'moreas': 7
}
PATH_TO_CSV = "./sampledata01_vehicles_100.csv"   # change to the appropriate path if needed
df = pd.read_csv(PATH_TO_CSV, sep=';')

for i in range(0, len(df)):  # adding each tranceiver to the database
    tag_id = df.iloc[i]['tagID']
    veh_id = df.iloc[i]['vehicleID']
    op_id = operators[df.iloc[i]['tagProvider']]  # find the tagProvider name, and return the appropriate id
    license_year = df.iloc[i]['licenseYear']

    q = "INSERT INTO tranceiver VALUES ('{}', {}, 0.0, '{}', {}, 1)".format(tag_id, op_id, veh_id, license_year)
    mycursor.execute(q)
    db.commit()    # save changes

# closing the connection with the database
mycursor.close()
db.close()