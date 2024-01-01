const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin&&&000@cluster0.j8ehdug.mongodb.net/userappnew');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String, 
    password: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const CourseSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String, 
    price: Number,
    imageLink: String,
    published: Boolean
});


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}