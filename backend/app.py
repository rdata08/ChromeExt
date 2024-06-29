from flask import Flask, jsonify
import requests
from pprint import pprint
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def scrapeOne():
    url = 'https://www.amazon.com/Bose-QuietComfort-45-Bluetooth-Canceling-Headphones/dp/B098FKXT8L'
    # no headers at the moment
    
    session = requests.Session()
    
    r = session.get(url)
    if r.status_code == 200:
        return jsonify(status = r.status_code, content = r.text)
    elif r.status_code == 503:
        print("503: Status Code")
    else:
        print(f"Unexpected: {r.status_code} Status Code")
    

if __name__ == '__main__':
    app.run(debug=True)