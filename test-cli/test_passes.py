import subprocess
import os
from pathlib import Path


datefrom = "20190201"    # starting date for testing purposes
dateto = "20191031"      # ending date for testing purposes
operator1 = "aodos"
operator2 = "nea_odos"
station = "AO00"

def capture(command):    # helping function that executes a given command from shell and gets the results
	proc = subprocess.Popen(command,  # run the command
		stdout = subprocess.PIPE,    # redirect output of the command
		stderr = subprocess.PIPE,    # redirect error output (if there is) of the command
	)
	out,err = proc.communicate()   # save output and error 
	return out, err, proc.returncode



def test_chargesby_json():    # testing chargesby cli call with json format
	command = ["../cli/chargesby", "--op1", operator1, "--datefrom", datefrom, "--dateto", dateto, "--format", "json" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_chargesby_csv():   # testing chargesby cli call with csv format
	command = ["../cli/chargesby", "--op1", operator1, "--datefrom", datefrom, "--dateto", dateto, "--format", "csv" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passesanalysis_json():    # testing passesanalysis cli call with json format
	command = ["../cli/passesanalysis", "--op1", operator1, "--op2", operator2, "--datefrom", datefrom, "--dateto", dateto, "--format", "json" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passesanalysis_csv():    # testing passesanalysis cli call with csv format
	command = ["../cli/passesanalysis", "--op1", operator1, "--op2", operator2,"--datefrom", datefrom, "--dateto", dateto, "--format", "csv" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passescost_json():    # testing passescost cli call with json format
	command = ["../cli/passescost", "--op1", operator1, "--op2", operator2, "--datefrom", datefrom, "--dateto", dateto, "--format", "json" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passescost_csv():    # testing passescost cli call with csv format
	command = ["../cli/passescost", "--op1", operator1, "--op2", operator2,"--datefrom", datefrom, "--dateto", dateto, "--format", "csv" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passesperstation_json():    # testing passesperstation cli call with json format
	command = ["../cli/passesperstation", "--station", station, "--datefrom", datefrom, "--dateto", dateto, "--format", "json" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


def test_passesperstation_csv():    # testing passesperstation cli call with csv format
	command = ["../cli/passesperstation", "--station", station, "--datefrom", datefrom, "--dateto", dateto, "--format", "csv" ]
	out, err, exitcode = capture(command)   # execute command and get output
	assert b"200" in out   # check that all went fine


# Chargesby testing
test_chargesby_json()
test_chargesby_csv()
print("ChargesBy test: completed")

# PassesAnalysis testing
test_passesanalysis_json()
test_passesanalysis_csv()
print("PassesAnalysis test: completed")

# PassesCost testing
test_passescost_json()
test_passescost_csv()
print("PassesCost test: completed")

# PassesPerStation testing
test_passesperstation_json()
test_passesperstation_csv()
print("PassesPerStation test: completed")

