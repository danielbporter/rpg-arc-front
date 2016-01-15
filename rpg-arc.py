import json
from pprint import pprint as pp

from flask import Flask, request, abort, redirect, make_response, jsonify, render_template
import boto3
import decimal
import bcrypt


app = Flask(__name__)
app.secret_key = "this is my awesome key"
db = boto3.resource('dynamodb')


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/login")
def login():
    return render_template("login.html")


@app.route('/api/register', methods=['POST'])
def register():
    json_data = request.json

    user = {
        "UserID": json_data['email'],
        "email": json_data['email'],
        "password": bcrypt.hashpw(json_data['password'], bcrypt.gensalt()),
        "first_name": json_data['first_name'],
        "last_name": json_data['last_name']
    }
    try:
        table= db.Table('User').put_item(Item=json.dumps(user))
        status = 'success'
    except:
        status = 'this user is already registered'
    return jsonify({'result': status})


@app.route('/campaign', methods=['POST'])
def campaign():

    table = db.Table('Campaign')
    if request.method == 'POST':
        table.put_item(
            Item={
                'CampaignID': 3,
                'UserID': 'jdemp@cyve',
                'Name': 'Again',
            }
        )


@app.route('/api/campaign/<int:campaign_id>', methods=['GET', 'POST', 'PUT'])
def campaign_detail(campaign_id):
    table=db.Table('Campaign')
    if request.method == 'GET':
        data = table.get_item(
                Key={
                    'CampaignID': campaign_id,
                    'UserID': 'jdemp@cyve',
                }
        )
    try:
        return json.dumps(data['Item'], cls=DecimalEncoder)
    except KeyError:
        return "Campaign not found"

@app.route('/api/user', methods=['POST'])
def user():
    table = db.Table('User')
    if request.method == 'POST':
        pass
    else:
        pass


@app.route('/api/user/<string:user_id>', methods=['GET', 'POST', 'PUT'])
def user_detail(user_id):
    table=db.Table('User')
    if request.method == 'GET':
        data = table.get_item(
                Key={
                    'UserID': user_id,
                }
        )
    try:
        return json.dumps(data['Item'], cls=DecimalEncoder)
    except KeyError:
        return "User not found"

if __name__ == '__main__':
    app.run(debug=True)