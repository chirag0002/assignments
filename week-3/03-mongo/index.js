const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

const app = express();
const PORT = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.all('*', (req, res) => {
    res.status(404).send({
        error: 'Not found'
    });
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: err.message
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
