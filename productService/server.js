// productService/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
];

app.get('/', (req, res) => { res.send('Welcome to the productService Service!'); });
 
app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Product Service running at http://localhost:${port}/`);
});

// // userService/server.js
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;

// app.use(express.json());

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];

// app.get('/', (req, res) => { res.send('Hello World!'); });


// app.get('/users', (req, res) => {
//     res.json(users);
// });

// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

// app.listen(port, () => {
//     console.log(`User Service running at http://localhost:${port}/`);
// });


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;

// app.use(express.json());

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
// ];

// // Default route for '/' 

//  app.get('/', (req, res) => { res.send('Welcome to the User Service!'); });

// app.get('/users', (req, res) => {
//     res.json(users);
// });

// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);
//     if (user) {
//         res.json(user);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

// app.listen(port, () => {
//     console.log(`User Service running at http://localhost:${port}/`);
// });
