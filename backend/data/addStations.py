# Script that reads data from csv file and fills the station table in our db
# !pip install pandas
# !pip install mysql-connector-python

import csv
import mysql.connector
import keyring

db = mysql.connector.MySQLConnection(
	host="localhost",
	user="root",
	password= keyring.get_password("test", "root"),
	database="TL2106"
	)
mycursor = db.cursor()

PATH_TO_CSV = "./sampledata/stations.csv"    # change to the appropriate path if needed
csv_data = csv.reader(open(PATH_TO_CSV), delimiter=';')

first = 0
for row in csv_data:  # adding each station to the database
    if first == 0:
        first = 1
    else:
        insert_stmt = ("INSERT INTO Station (StationID, StationProvider, StationName, original)"
                       "VALUES (%s, %s, %s, 1)"
        )
        mycursor.execute(insert_stmt, (row[0], row[1], row[2]))

# closing the connection with the database
db.commit()   # save changes
mycursor.close()
db.close()
print ("Done")