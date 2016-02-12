api

curl 'http://127.0.0.1:5000/score' \
--verbose \
--get \
--data 'user_name=hiroki'

result

{
    "count": 6,
    "user_name": "hiroki"
}
