from flask import make_response
from json import JSONEncoder, dumps


class CustomEncoder(JSONEncoder):
    def default(self, obj):
        if set(['quantize', 'year']).intersection(dir(obj)):
            return str(obj)
        elif hasattr(obj, 'next'):
            return list(obj)
        return JSONEncoder.default(self, obj)

@app.route('/get_reps/', methods=['GET'])
def get_reps():
    sample = ['some text', <datetime object>, 123]
    response = make_response(dumps({'result': sample}, cls=CustomEncoder))
    response.headers['Content-Type'] = 'application/json'
    response.headers['mimetype'] = 'application/json'
    return response