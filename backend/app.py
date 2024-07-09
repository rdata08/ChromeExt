from flask import Flask, jsonify
import requests
from pprint import pprint
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def scrapeOne():
    url = 'https://www.amazon.com/gp/css/order-history'
    # no headers at the moment
    
    session = requests.Session()
    
    r = session.get(url)

    soup = BeautifulSoup(r.content, 'html.parser')

    title_element = soup.select_one("#product-summary")
    if title_element:
        title = title_element.text.strip()
    else: 
        None

    payload =  {
        'title': title
    }

    if r.status_code == 200:
        return soup
    elif r.status_code == 503:
        print("503: Status Code")
    else:
        print(f"Unexpected: {r.status_code} Status Code")



if __name__ == '__main__':
    app.run(debug=True)