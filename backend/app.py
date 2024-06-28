from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

# Gets total spent in the last 30 days
@app.route('/price', methods=['GET'])
def fetch_total():
    url = ''
    