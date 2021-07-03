const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: "c1"},
    { id: 2, name: "c2"},
    { id: 3, name: "c3"},
    { id: 4, name: "c4"},
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4]);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: course.length +1,
        name: req.body.name
    }

    courses.push(course);
    res.send(course);
});



// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params.id);
// });


app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.params);
});


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send('The course with the given id not found');

    res.send(course);
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));