# Copy as "config.py" and insert your Yelp credentials. See README.md for details.
import os

yelp_api_auth = {
    'client_id' : 'oAXFtXos6R7jgkEpPDSmQA',
    'client_secret' : '<CLIENT_SECRET>',
    'grant_type' : 'client_credentials'
}

# Create a secret session key for Flask. Easy to do in python:
# import os
# os.urandom(24)
secret_session_key = os.urandom(24)
