from flask import Flask, request, make_response 
from imputabiliteCNPM import imputabiliteProcess
from json import dumps

app = Flask(__name__)

@app.route('/treate', methods=['POST']) 
def api_json():

    data = request.get_json()  #Coverted to dict 

    response = imputabiliteProcess(data)
    
    res = make_response(dumps(response, indent=4, sort_keys=True, default=str) , 200)

    return res


if __name__ == '__main__':
app.run(debug=True) 