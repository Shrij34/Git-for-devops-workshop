// orderService/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const axios = require('axios');

app.use(express.json());

const orders = [
    { id: 1, userId: 1, productId: 1 },
    { id: 2, userId: 2, productId: 2 }
];

app.get('/', (req, res) => { res.send('Welcome to the OrderService Service!'); });

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.get('/orders/:id', async (req, res) => {
    const order = orders.find(o => o.id == req.params.id);
    if (order) {
        const user = await axios.get(`http://localhost:3001/users/${order.userId}`);
        const product = await axios.get(`http://localhost:3003/products/${order.productId}`);
        res.json({ ...order, user: user.data, product: product.data });
    } else {
        res.status(404).send('Order not found');
    }
});

app.listen(port, () => {
    console.log(`Order Service running at http://localhost:${port}/`);
});
