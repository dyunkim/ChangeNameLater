from flask import Flask, request
app = Flask(__name__)

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