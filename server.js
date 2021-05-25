const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Require user routes
const usersRoutes = require('./src/routes/user.routes')
const chatRoutes = require('./src/routes/chat.routes')
const messageRoutes = require('./src/routes/message.routes')
// using as middleware
app.use('/api/users', usersRoutes)
app.use('/api/chats', chatRoutes)
app.use('/api/message', messageRoutes)


// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
