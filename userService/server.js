const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`User Service running at http://localhost:${port}/`);
});
