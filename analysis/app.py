from flask import Flask, request
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

class Score(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('user_name')
        args = parser.parse_args()

        user_name = args.get('user_name')
        count = len(user_name)
        return {"user_name":user_name,
                "count":count}

api.add_resource(Score,'/score',endpoint='score')

if __name__ == '__main__':
    app.run(debug=True)
