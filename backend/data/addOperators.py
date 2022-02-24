# Script that initializes the operator table in our db
# !pip install mysql-connector-python

import mysql.connector

db = mysql.connector.MySQLConnection(
	host="localhost",
	user="root",
	password= "MyNewPass",
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
print("Operator Table Filled")
