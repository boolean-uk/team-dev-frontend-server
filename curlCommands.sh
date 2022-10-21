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

curl -X POST http://localhost:4000/note/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNzI0NiwiZXhwIjoxNjY2MDkzNjQ2fQ.Gg5aEgkWDBLclh4h_5-aiuj1QYT4OHR-oJzyHZwKozI" -H "Content-Type: application/json" -d '{"content": "totally awesome"}'

curl http://localhost:4000/note/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNzI0NiwiZXhwIjoxNjY2MDkzNjQ2fQ.Gg5aEgkWDBLclh4h_5-aiuj1QYT4OHR-oJzyHZwKozI" -H "Content-Type: application/json"

curl http://localhost:4000/posts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNzI0NiwiZXhwIjoxNjY2MDkzNjQ2fQ.Gg5aEgkWDBLclh4h_5-aiuj1QYT4OHR-oJzyHZwKozI" -H "Content-Type: application/json"

curl -X PATCH http://localhost:4000/note/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjAwNzI0NiwiZXhwIjoxNjY2MDkzNjQ2fQ.Gg5aEgkWDBLclh4h_5-aiuj1QYT4OHR-oJzyHZwKozI" -H "Content-Type: application/json" -d ' { "content": "really really awesome, actually" }'

curl -X POST http://localhost:4000/exercise -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjE2ODEzMSwiZXhwIjoxNjY2MjU0NTMxfQ.pxBRwH8KNqteK7xiMD9ywk_oUmXRedBMlWJbctlTSTE" -H "Content-Type: application/json" -d '{"exerciseName": "React Events and Forms", "githubUrl": "http://a.url.com", "unitId": 1}'

curl -X DELETE http://localhost:4000/post/16/comment/16 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjE5MTU4OSwiZXhwIjoxNjY2Mjc3OTg5fQ.7sbWdmTAGHzM-B7WrjYamoSxEc8fo-lzEohB4zHxEa0" -H "Content-Type: application/json"

curl -X PATCH http://localhost:4000/user/3 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjI2MzE1MywiZXhwIjoxNjY2MzQ5NTUzfQ.kb7jiODWSs_STzI5EMcGEMuOsQwlDcKgHu_fXgZoEk0" -H "Content-Type: application/json" -d ' { "cohortId": "" }'

curl -X POST http://localhost:4000/post/1/comment/2/commentLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjI2MzE1MywiZXhwIjoxNjY2MzQ5NTUzfQ.kb7jiODWSs_STzI5EMcGEMuOsQwlDcKgHu_fXgZoEk0" -H "Content-Type: application/json" -d ' { "active": false }'

curl -X POST http://localhost:4000/post/1/comment/2/commentLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjI2MzE1MywiZXhwIjoxNjY2MzQ5NTUzfQ.kb7jiODWSs_STzI5EMcGEMuOsQwlDcKgHu_fXgZoEk0" -H "Content-Type: application/json" -d ' { "active": false, "commentLikeId": 1}'
curl -X POST http://localhost:4000/post/1/comment/2/commentLike -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NjI2MzE1MywiZXhwIjoxNjY2MzQ5NTUzfQ.kb7jiODWSs_STzI5EMcGEMuOsQwlDcKgHu_fXgZoEk0" -H "Content-Type: application/json" -d ' { "active": true, "commentLikeId": 1}'