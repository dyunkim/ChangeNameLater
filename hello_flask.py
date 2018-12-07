from flask import Flask, request
import os
from PIL import Image

app = Flask(__name__)

UPLOAD_FOLDER = './uploads'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/comment', methods=['POST'])
def add_comment():
    comment = request.json['comment']
    candidate = request.json['candidate']
    return comment

@app.route('/profile/<int:id>')
def get_profile(id):
    return "Profile: " + str(id)

@app.route('/search', methods=['GET'])
def search_profile():
    first = request.args.get('first')
    last = request.args.get('last')
    return first + last

@app.route("/processPicture", methods=['POST'])
def send_to_ocr():
    image = request.files['image']
    pil_image = Image.open(image)
    f = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
    image.save(f)
    print(pil_image)
    return "Image Uploaded"
