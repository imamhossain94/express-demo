## Express Demo

This is for the first time that i learned the beginners course of Javascript, nodeJs & ExpressJs in a row. Here, I follow the teutorial made by "Programming With Mosh".
```
• Javascript - https://www.youtube.com/watch?v=W6NZfCO5SIk
• NodeJs - https://www.youtube.com/watch?v=TlB_eWDSMt4
• ExpressJs - https://www.youtube.com/watch?v=pKd0Rpw7O48
```

#### All The Routes:


#### Get Request

http://localhost:3000/api/courses
```json
[
    {
        "id": 1,
        "name": "c1"
    },
    {
        "id": 2,
        "name": "c2"
    },
    {
        "id": 3,
        "name": "c3"
    },
    {
        "id": 4,
        "name": "c4"
    }
]
```

#### Post Request

http://localhost:3000/api/courses
```json
{
	"id": 5,
	"name": "New Course"
}
```

#### Put Request

http://localhost:3000/api/courses/1
```json
{
	"id": 5,
	"name": "Updated Course"
}
```

#### Delete Request

http://localhost:3000/api/courses/5
```json
{
	"id": 5,
	"name": "Updated Course"
}
```
