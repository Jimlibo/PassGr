# Script that initializes the Database

import mysql.connector

mydb = mysql.connector.connect (
        host = "localhost",
        user = "root",
        password = "MyNewPass"
        )
mycursor = mydb.cursor()

# Create the Database TL2106
mycursor.execute("CREATE DATABASE TL2106")
mycursor.execute("USE TL2106")

fd = open('./db_skeleton.sql', 'r')
sqlFile = fd.read()
fd.close()

sqlCommands = sqlFile.split(';')

for command in sqlCommands:
    try: 
        mycursor.execute(command)
    except:
        print("Command Error")

