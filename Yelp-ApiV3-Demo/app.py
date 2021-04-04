#!/usr/bin/env python

from flask import Flask, render_template, session, request
import requests
import json

app = Flask(__name__)
#app.secret_key = config.secret_session_key

LATITUDE = 37.786882
LONGITUDE = -122.399972
YELP_ACCESS_TOKEN = "cF6wMa675BUGiGhZ8pMVzfLNTpaNMVur82KKan9_kWcYmBX_mc6WIV0QVaCHGn5-ogLT_x0ck2C5cIUiJMixfGavxErAIkBdUxpLbEOyAPtndQPAcOdwYquPB_toYHYx"
EMPTY_RESPONSE = json.dumps('')


@app.route("/")
def index():
    return render_template('index.html')



@app.route("/business_search")
def business_search():
    print(request.args)
    term = request.args.get("term", None)
    if term == None:
        print("No term provided for business search, returning nothing")
        return EMPTY_RESPONSE

    response = requests.get('https://api.yelp.com/v3/businesses/search',
            params=get_search_params(term),
            headers=get_auth_dict(get_yelp_access_token()))
    if response.status_code == 200:
        print("Got 200 for business search")
        print(response.json())
        return json.dumps(response.json())
    else:
        print("Received non-200 response({}) for business search, returning empty response".format(response.status_code))
        return EMPTY_RESPONSE


@app.route("/autocomplete")
def autocomplete():
    term = request.args.get("term", None)
    if term==None:
        print("No term provided for autocomplete, returning nothing")
        return EMPTY_RESPONSE
    print("autocompleting for: ", term)
    
    response = requests.get('https://api.yelp.com/v3/autocomplete', params=get_autocomplete_params(term), headers=get_auth_dict(get_yelp_access_token()))
    if response.status_code == 200:
        # We return a list of businesses that autocomplete appended with a list of terms that autocomplete.
        return json.dumps([business['name'] for business in response.json()['businesses']]
        + [term['text'] for term in response.json()['terms']])
    else:
        print("received non-200 response({}) for autocomplete, returning empty response".format(response.status_code))
        return EMPTY_RESPONSE


def get_yelp_access_token():

    return YELP_ACCESS_TOKEN


def get_search_params(term, latitude=LATITUDE, longitude=LONGITUDE):
    return {'term': term, 'latitude' : latitude, 'longitude' : longitude}


def get_autocomplete_params(term, latitude=LATITUDE, longitude=LONGITUDE):
    return {'text': term, 'latitude' : latitude, 'longitude' : longitude}


def get_auth_dict(access_token):
    return {'Authorization' : "Bearer " + access_token}


if __name__ == "__main__":
    app.run()