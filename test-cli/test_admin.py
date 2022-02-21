import subprocess
import os
from pathlib import Path

def capture(command):    # helping function that executes a given command from shell and gets the results
	proc = subprocess.Popen(command,  # run the command
		stdout = subprocess.PIPE,    # redirect output of the command
		stderr = subprocess.PIPE,    # redirect error output (if there is) of the command
	)
	out,err = proc.communicate()   # save output and error 
	return out, err, proc.returncode


def test_healthcheck():  # check cli healthcheck call
	command = ["../cli/healthcheck"]
	out, err, exitcode = capture(command)
	assert b"200" in out


def test_reset_passes():     # test cli resetpasses call
	command = ["../cli/resetpasses"]
	out, err, exitcode = capture(command)
	assert b"200" in out


def test_reset_stations():    # test cli resetstations call
	command = ["../cli/resetstations"]
	out, err, exitcode = capture(command)
	assert b"200" in out


def test_reset_vehicles():   # test cli resetvehicles call
	command = ["../cli/resetvehicles"]
	out, err, exitcode = capture(command)
	assert b"200" in out


def test_valid_passes_upload():     # test cli passesupd call with valid credentials
	command = ["../cli/admin", "--passesupd", "--username", "admin01", "--password", "tl2106", "--source", "./passes_testing.csv"]
	out, err, exitcode = capture(command)
	assert b"200" in out


def test_invalid_passes_upload():   # test cli passesupd call with invalid credentials
	command = ["../cli/admin", "--passesupd", "--username", "admin01", "--password", "wrongPassword", "--source", "passes_testing.csv"]
	out, err, exitcode = capture(command)
	assert b"400" in out

# testing for healthcheck unit
test_healthcheck()
print("Healthcheck test: completed")

# test for reset_passes unit
test_reset_passes()
print("ResetPasses test: completed")

# test for reset_vehicles unit
test_reset_vehicles()
print("ResetVehicles test: completed")

# test for reset_stations unit
test_reset_stations()
print("ResetStations test: completed")

# testing for passesupd unit
test_valid_passes_upload()
test_invalid_passes_upload()
print("Passesupd test: completed")

