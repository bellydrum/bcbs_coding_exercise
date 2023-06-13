import express from 'express';
import router from './routes.js';

const app = express();

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });
//
// app.get('/about', (req, res) => {
//     res.send('About page');
// });
//
// app.get('/contact', (req, res) => {
//     res.send('Contact page');
// });
//
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User ID: ${userId}`);
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});