curl -X POST http://localhost:4000/login -d "email=teacher@teacher.com&password=t3ach3r"

curl -X PATCH http://localhost:4000/user/update/14 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTU3MzE5MSwiZXhwIjoxNjY1NjU5NTkxfQ.QIM0ssvUqZGjZvKsP9bNEeugA0nd0P6xDRsHnlLhMtY" -H "Content-Type: application/json" -d ' { "email": "teacher2@teacher.com", "password": "t3ach3r", "cohortId": 5, "role": "TEACHER", "firstName": "Another", "lastName": "Change", "biography": "blah blah blah blah", "githubUrl": "https://github.com/teach", "profileUrl": "https://dottorato.dimes.unical.it/wp-content/uploads/2015/09/Unknown.jpg" }'

curl -X PATCH http://localhost:4000/post/1/comment/23 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json" -d '{"content": "make comments great again because Britney Spears is totally awesome"}'

curl -X POST http://localhost:4000/post/1/postLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json" -d '{"active": true}'

curl -X POST http://localhost:4000/post/1/postLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json" -d '{"active": false, "postId": 11}'

curl http://localhost:4000/post/postLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json"

curl http://localhost:4000/cohort -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json"

curl -X PATCH http://localhost:4000/post/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTY2NDA0NSwiZXhwIjoxNjY1NzUwNDQ1fQ.IGmmVfV1IsxCgoZWmF3kS-yQ90C736rCwGpL0v01uPk" -H "Content-Type: application/json" -d '{"content": "I am endlessly patient editing a DB"}'

curl http://localhost:4000/user -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTkyODM1NSwiZXhwIjoxNjY2MDE0NzU1fQ.3Y23Hq3HEgSTaG41pJlTuTEm3pQqSLJs_CQt8S9dzvk" -H "Content-Type: application/json"

curl http://localhost:4000/post/commentLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTkyODM1NSwiZXhwIjoxNjY2MDE0NzU1fQ.3Y23Hq3HEgSTaG41pJlTuTEm3pQqSLJs_CQt8S9dzvk" -H "Content-Type: application/json"
