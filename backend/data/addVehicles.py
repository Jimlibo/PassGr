# Script that reads data from csv file and fills the station table in our db
# !pip install pandas
# !pip install mysql-connector-python

import csv
import mysql.connector
import keyring

db = mysql.connector.MySQLConnection(
    host="localhost",
    user="root",
    password="MyNewPass",
    database="TL2106"
    )
mycursor = db.cursor()

PATH_TO_CSV = "./sampledata/vehicles.csv"    # change to the appropriate path if needed
csv_data = csv.reader(open(PATH_TO_CSV), delimiter=';')

first = 0
for row in csv_data:  # adding each station to the database
    if first == 0:
        first = 1
    else:
        insert_stmt = ("INSERT INTO Vehicle (VehicleID, StationProvider, TagID, Balance, LicenseYear, ProviderAbbr, original)"
                       "VALUES (%s, %s, %s, %s, %s, %s, 1)"
        )
        mycursor.execute(insert_stmt, (row[0], row[2], row[1], 0.0, row[4], row[3]))

# closing the connection with the database
db.commit()   # save changes
mycursor.close()
db.close()
print ("Vehicle Table Filled")
