from flask import Flask, request
import os
from PIL import Image
app = Flask(__name__)

UPLOAD_FOLDER = './uploads'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/")
def hello():
    return "Hello World!1"

@app.route("/profile/<int:id>")
def getProfile(id):
    return "Profile: " + str(id)

@app.route("/processPicture", methods=['POST'])
def send_to_ocr():
    image = request.files['image']
    pil_image = Image.open(image)
    f = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
    image.save(f)
    print(pil_image)
    return "Image Uploaded"