from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask Lab Project!"

@app.route('/health')
def health():
    return "OK", 200

@app.route('/data', methods=['POST'])
def data():
    content = request.json
    return jsonify({"received": content}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
