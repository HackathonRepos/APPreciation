from flask import Flask, render_template, session, request
import requests
import json


app = Flask(__name__)

LATITUDE = 37.786882
LONGITUDE = -122.399972
YELP_ACCESS_TOKEN = "cF6wMa675BUGiGhZ8pMVzfLNTpaNMVur82KKan9_kWcYmBX_mc6WIV0QVaCHGn5-ogLT_x0ck2C5cIUiJMixfGavxErAIkBdUxpLbEOyAPtndQPAcOdwYquPB_toYHYx"
EMPTY_RESPONSE = json.dumps('')

def get_auth_dict():
    return {'Authorization' : "Bearer " + YELP_ACCESS_TOKEN}

@app.route("/")
def index():
  return "Hello World!"

@app.route("/search_latlong", methods = ["POST", "GET"])
def search_latlong():
    query = dict(request.args)
    query = query["query"].split('|')
    print(query)
    x_list = ["term", "latitude", "longitude"]
    x = {}
    for i in range(len(x_list)):
        x[x_list[i]] = query[i]
    print(x)
    response = requests.get('https://api.yelp.com/v3/businesses/search',
            params=x,
            headers=get_auth_dict())
    print(response.json())
    if response.status_code == 200:
        print("Got 200 for business search")
        return json.dumps(response.json())
    else:
        print("Received non-200 response({}) for business search, returning empty response".format(response.status_code))
        return EMPTY_RESPONSE

@app.route("/search_loc", methods = ["POST", "GET"])
def search_loc():
    query = dict(request.args)
    query = query["query"].replace("+", " ").split('|')
    print(query)
    x_list = ["term", "location"]
    x = {}
    for i in range(len(x_list)):
        x[x_list[i]] = query[i]
    print(x)
    response = requests.get('https://api.yelp.com/v3/businesses/search',
            params=x,
            headers=get_auth_dict())
    print(response.json())
    if response.status_code == 200:
        print("Got 200 for business search")
        return json.dumps(response.json())
    else:
        print("Received non-200 response({}) for business search, returning empty response".format(response.status_code))
        return EMPTY_RESPONSE

app.run()
