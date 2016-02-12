from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Score(Resource):
    def get(self):
        return {"heelo":"world"}

api.add_resource(Score,'/', '/score')

if __name__ == '__main__':
    app.run(debug=True)
