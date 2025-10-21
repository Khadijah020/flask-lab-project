from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/health')
def health():
    return "OK", 200

@app.route('/data', methods=['POST'])
def data():
    content = request.json
    return jsonify({"received": content}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
