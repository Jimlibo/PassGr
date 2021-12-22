# Script that reads data from csv file and fills the station table in our db
# !pip install pandas
# !pip install mysql-connector-python

import csv
import mysql.connector

db = mysql.connector.MySQLConnection(
	host="sql11.freemysqlhosting.net",
	user="sql11460242",
	password="pNHDmwlRnX",
	database="sql11460242"
	)

mycursor = db.cursor()

PATH_TO_CSV = "./sampledata/passes.csv"    # change to the appropriate path if needed
csv_data = csv.reader(open(PATH_TO_CSV), delimiter=';')

first = 0
for row in csv_data:  # adding each station to the database
    if first == 0:
        first = 1
    else:
        insert_stmt = ("INSERT INTO Pass (PassID, Timestamp, StationID, VehicleID, Charge)"
                       "VALUES (%s, %s, %s, %s, %s)"
        )
        mycursor.execute(insert_stmt, (row[0], row[1], row[2], row[3], row[4]))
        print(row)

# closing the connection with the database
db.commit()   # save changes
mycursor.close()
db.close()
print ("Done")

