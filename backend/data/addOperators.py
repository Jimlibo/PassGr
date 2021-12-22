# Script that initializes the operator table in our db
# !pip install mysql-connector-python

import mysql.connector
# keyring for storing database password
import keyring

db = mysql.connector.MySQLConnection(
	host="localhost",
	user="root",
	password= keyring.get_password("test", "root"),
	database="TL2106"
	)
mycursor = db.cursor()

operators = [
	("olympia_odos","OO"),
	("nea_odos","NE"),
	("moreas","MR"),
	("kentriki_odos","KO"),
	("aodos","AO"),
	("egnatia","EG"),
	("gefyra","GF")
]

for name in operators:   # adding each operator in the database
	q = "INSERT INTO Operator VALUES (%s, %s)"
	mycursor.execute(q, (name[0], name[1]))
	db.commit()   # save changes

mycursor.close()  # closing the connection
db.close()
