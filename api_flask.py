from flask import Flask, request, make_response, jsonify
from imputabiliteCNPM import imputabiliteProcess

app = Flask(__name__)

@app.route('/', methods=['POST']) 
def api_json():

    data = request.get_json()  #Coverted to dict 

    response = imputabiliteProcess(data)
    
    res = make_response(jsonify(response), 200)

    return res


if __name__ == '__main__':
    app.run(debug=True) 
