from flask import Flask, jsonify
from flask_cors import CORS
from flask import Flask, request

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)

@app.route('/users')
def users():
	# users 데이터를 Json 형식으로 반환한다
    return {"users": [{ "id" : 1, "name" : "hyeseon" },
    					{ "id" : 2, "name" : "dalkong" }]}

def on_json_loading_failed_return_dict(e):
	return {}           

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_text():
    data = request.form.get("inputText")
    data = jsonify(data)
    print(data)
    return data

if __name__ == "__main__":
    app.run(debug = True)