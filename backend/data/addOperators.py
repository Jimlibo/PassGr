# Script that initializes the operator table in our db
# !pip install mysql-connector-python

import mysql.connector

db = mysql.connector.MySQLConnection(   # fill with your own credentials
    host="localhost",
    user="****",
    password="****",
    database=" "
    )
mycursor = db.cursor()


operators = {   # dictionary that maps each operator name to an abrv.;
	'aodos': 'AO',
	'egnatia': 'EG',
	'gefyra': 'GF',
	'kentriki_odos': 'KO',
	'nea_odos': 'NE', 
	'olympia_odos': 'OO',
	'moreas': 'MR'
}

for name in operators.keys():   # adding each operator in the database
	q = "INSERT INTO operator(NAME, ProviderAbrv) VALUES ('{}', '{}')".format(name, operators[name])
	mycursor.execute(q)
	db.commit()   # save changes

mycursor.close()  # closing the connection
db.close()
