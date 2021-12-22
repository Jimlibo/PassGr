# Script that initializes the operator table in our db
# !pip install mysql-connector-python

import mysql.connector

db = mysql.connector.MySQLConnection(
	host="sql11.freemysqlhosting.net",
	user="sql11460242",
	password="pNHDmwlRnX",
	database="sql11460242"
	)

cursor = db.cursor()
for name in operators.keys():   # adding each operator in the database
	q = "INSERT INTO Operator VALUES ('{}', '{}')".format(name, operators[name])
	mycursor.execute(q)
	db.commit()   # save changes

mycursor.close()  # closing the connection
db.close()
