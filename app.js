const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const users = require("./server/routes/users");
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);
app.use('/api/users', users);

router.post('/login', function (req, res) {
    const username = JSON.stringify(req.body.username);
    const password = JSON.stringify(req.body.password);
    const currentUser = JSON.stringify("user");
    const currentPass = JSON.stringify("pass");

    if(username === currentUser && password === currentPass){
        res.send('ok');
    }else{
        res.send('error');
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(3200, () => console.log('Example app listening on port 3200!'))