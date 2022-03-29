from flask import Flask, jsonify
from flask.helpers import send_from_directory

# comment out on deployment to heroku
# from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out on deployment
# CORS(app)

# this method returns the opposite of the current state of the button
# this would look different for your own personal app
@app.route("/firstName/<firstName>", methods=["GET"])
def result(firstName: str = None):
    if firstName == "alex":
        return jsonify( lastName = "tan")
    return jsonify(lastName = "User Not Found")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")
    
if __name__ == "__main__":
    app.run()