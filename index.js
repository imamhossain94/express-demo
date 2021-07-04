const Joi = require('joi');
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
    //res.send([1, 2, 3, 4]);
    res.send(courses);
});


//Post request
app.post('/api/courses', (req, res) => {

    const {
        error
    } = validateCourse(req.body);
    //Validate 
    //If invalid, return 400 - Bad request
        // Input validation
    if(error) {
        //400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }


    const course = {
        id: courses.length +1,
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



//Put request
app.put('/api/courses/:id', (req, res) => {
    //Looking u the course
    //If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id not found');

    const {error} = validateCourse(req.body);
    //Validate 
    //If invalid, return 400 - Bad request
        // Input validation
    if(error) {
        //400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    }

    // Update course
    course.name = req.body.name;
    res.send(course);
    //Return updated course
});

//Validator function
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);    //console.log(result);
}



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));