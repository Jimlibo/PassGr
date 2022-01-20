#! usr/bin/env python3

import argparse   # for command-line arguments
import requests   # for communicating with the api
import json       # for json format


def resetvehicles(ar):
    res = requests.post('http://localhost:9103/interoperability/api/admin/resetvehicles')
    print(res.status_code)   # printing returning code
    print(res.json())       # printing  returned message

    return True


# right now, parser has no arguments, although this will probably change
parser = argparse.ArgumentParser()   # creates a parser
args = parser.parse_args()          # gets the values of parser's arguments

resetvehicles(args)

