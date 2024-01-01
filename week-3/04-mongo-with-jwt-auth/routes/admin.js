const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require ("../db/index");
const zod = require("zod");

const router = Router();

// Admin Routes
<<<<<<< HEAD
router.post('/signup', async(req, res) => {
    const {username, password} = req.body;

    if (!(zod.string().safeParse(username).success)  || !(zod.string().min(6).safeParse(password).success)) {
        res.status(500).json({ message: 'Creditentials are not valid' });
        return null
    }

    try{
        const admin = new Admin({
            username: username,
            password: password,
            courses: []
        });
        await admin.save()
        res.status(200).send({msg: 'Admin created successfully'});
    } catch(err) {
        console.log(err);
    };

});

router.post('/courses', adminMiddleware, async(req, res) => {
    const admin = req.admin;
    const courseSchema = zod.object({
        id: zod.number(),
        title: zod.string(),
        description: zod.string(),
        price: zod.number(),
        imageLink: zod.string(),
        published: zod.boolean(),
    });
    const {title, description, price, imageUrl} = req.body;

    try{
        const course = new Course({
            id: Math.floor(Math.random() * 100),
            title: title,
            description: description,
            price: price,
            imageLink: imageUrl,
            published: true
        });

        // const result = courseSchema.safeParse(course);

        // if (!result.success) {
        //     res.status(500).json("Course is not valid")
        //     return null
        // }
    
        await course.save()
        admin.courses.push(course._id);
        await admin.save();        
        res.status(200).send({msg: 'Course created successfully', courseId: course.id});
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const admin = req.admin;
    try {
        const courses = await Course.find({ _id: { $in: admin.courses } });
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> upstream/master
});

module.exports = router;