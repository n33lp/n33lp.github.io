from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    # Allows serving additional files like CSS and JavaScript
    @app.route('/<path:filename>')
    def static_files(filename):
        return send_from_directory('.', filename)

    app.run(host='0.0.0.0', port=8000, debug=True)
