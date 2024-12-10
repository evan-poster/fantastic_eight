const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.route('/').get((req, res) => {
res.json({ message: 'Hello from the backend!' });
});

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
