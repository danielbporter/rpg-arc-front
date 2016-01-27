import json
from pprint import pprint as pp
from functools import wraps
import jwt
import base64
from flask import Flask, request, abort, redirect, make_response, jsonify, render_template, _request_ctx_stack
import boto3
import decimal
from werkzeug.local import LocalProxy
import bcrypt


app = Flask(__name__)
current_user = LocalProxy(lambda: _request_ctx_stack.top.current_user)
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


def authenticate(error):
    resp = jsonify(error)
    resp.status_code = 401
    return resp


def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.headers.get('Authorization', None)
        if not auth:
            return authenticate({'code': 'authorization_header_missing', 'description': 'Authorization header is expected'})

        parts = auth.split()

        if parts[0].lower() != 'bearer':
            return {'code': 'invalid_header', 'description': 'Authorization header must start with Bearer'}
        elif len(parts) == 1:
            return {'code': 'invalid_header', 'description': 'Token not found'}
        elif len(parts) > 2:
            return {'code': 'invalid_header', 'description': 'Authorization header must be Bearer + \s + token'}

        token = parts[1]
        try:
            payload = jwt.decode(
            token,
            base64.b64decode('9_X_rJMcCBBgI8AcR-ouUvxlXLlbFqAJiDQtjycQhV6sO95sSNHPadw0Q7MTP_dg'.replace("_","/").replace("-","+")),
            audience='ICf6JzrB6yHqkaSWFzJN1sAWwUINpbvJ'
            )
        except jwt.ExpiredSignature:
            return authenticate({'code': 'token_expired', 'description': 'token is expired'})
        except jwt.InvalidAudienceError:
            return authenticate({'code': 'invalid_audience', 'description': 'incorrect audience, expected: ICf6JzrB6yHqkaSWFzJN1sAWwUINpbvJ'})
        except jwt.DecodeError:
            return authenticate({'code': 'token_invalid_signature', 'description': 'token signature is invalid'})

        _request_ctx_stack.top.current_user = user = payload
        return f(*args, **kwargs)

    return decorated


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/api/register', methods=['POST'])
def register():
    json_data = request.get_json()
    user = {
        "UserID": json_data['email'],
        "email": json_data['email'],
        "first_name": json_data['first_name'],
        "last_name": json_data['last_name']
    }
    table = db.Table('User')
    table.put_item(Item=user)
    status = 'success'
    return jsonify({'result': status})


@app.route('/api/campaign', methods=['POST'])
@requires_auth
def campaign():
    token = request.headers.get('Authorization', None).split()[1]
    decoded = jwt.decode(
            token,
            base64.b64decode('9_X_rJMcCBBgI8AcR-ouUvxlXLlbFqAJiDQtjycQhV6sO95sSNHPadw0Q7MTP_dg'.replace("_","/").replace("-","+")),
            audience='ICf6JzrB6yHqkaSWFzJN1sAWwUINpbvJ'
            )
    userid = decoded['sub']
    table = db.Table('Campaign')
    json_data = request.get_json()
    json_data['userid'] = userid
    print(json_data)
    table.put_item(
        Item=json_data
        )
    return jsonify({'status': 'success'})


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

@app.route("/ping")
#@cross_origin(headers=['Content-Type', 'Authorization'])
def ping():
    return "All good. You don't need to be authenticated to call this"

# This does need authentication
@app.route("/api/ping", methods=['GET'])
#@cross_origin(headers=['Content-Type', 'Authorization'])
@requires_auth
def secured_ping():
    return jsonify({'result': "All good. You only get this message if you're authenticated"})

if __name__ == '__main__':
    app.run(debug=True)