from flask import Flask, request, make_response 
from imputabiliteDrugOC import imputabiliteProcess
from json import dumps
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@cross_origin(Origin="localhost:5000")
@app.route('/treate', methods=['POST']) 
def api_json():

    data = request.get_json()  #Coverted to dict 

    response = imputabiliteProcess(data)
    
    res = make_response(dumps(response, indent=4, sort_keys=True, default=str) , 200)

    return res


if __name__ == '__main__':
	app.run(debug=True) 