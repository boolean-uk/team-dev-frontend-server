curl -X PATCH http://localhost:4000/user/update/14 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTU3MzE5MSwiZXhwIjoxNjY1NjU5NTkxfQ.QIM0ssvUqZGjZvKsP9bNEeugA0nd0P6xDRsHnlLhMtY" -H "Content-Type: application/json" -d ' { "email": "teacher2@teacher.com", "password": "t3ach3r", "cohortId": 5, "role": "TEACHER", "firstName": "Another", "lastName": "Change", "biography": "blah blah blah blah", "githubUrl": "https://github.com/teach", "profileUrl": "https://dottorato.dimes.unical.it/wp-content/uploads/2015/09/Unknown.jpg" }'