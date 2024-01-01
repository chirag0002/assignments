const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require ("../db/index");
const zod = require("zod");

const router = Router();



// User Routes
<<<<<<< HEAD
router.post('/signup', async(req, res) => {
    const {username, password} = req.body;

    if (!(zod.string().safeParse(username).success)  || !(zod.string().min(6).safeParse(password).success)) {
        res.status(500).json({ message: 'Creditentials are not valid' });
        return null
    }
    try{
        const user = new User({
            username: username,
            password: password,
            courses: []
        });
 
        await user.save();
        res.status(200).send({msg: 'User created successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    };

});

router.get('/courses', async (req, res) => {
    try{
        const result = await Course.find();
        res.status(200).json(result);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    };
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const user = req.user;
    const id = req.params.courseId;
    try{
        const course = await Course.findOne({id : id});
        if(!course){
            res.status(404).json({ message: 'Course not found' });
        }
        user.courses.push(course._id);
        await user.save();
        res.status(200).json({ message: 'Course added successfully' });
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    };
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = req.user;
    try {
        const courses = await Course.find({ _id: { $in: user.courses } });
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> upstream/master
