from flask import Flask, request, jsonify, send_from_directory
import os
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('stopwords')

# Load English stopwords
stop_words = set(stopwords.words('english'))

app = Flask(__name__, static_folder='public', static_url_path='')

@app.route('/process', methods=['POST'])
@app.route('/', methods=['GET'])
def home():
    return "Hello, World!"
def process_text():
    text = request.json['text']

    # Tokenize the text
    tokens = word_tokenize(text)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')