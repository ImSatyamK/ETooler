const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '5mb' }));

app.use('/api/mocktest', require('./routes/mocktest.routes'));

app.listen(5000, () => console.log('Server running on port 5000'));
