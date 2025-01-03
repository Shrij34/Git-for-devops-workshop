// productService/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());

const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
];

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
