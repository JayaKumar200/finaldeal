require('dotenv').config();

// require('dotenv').config(); 

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors')
// const app = express();

// const route = require('./router/router.js');

// app.use(express.json());
// app.use(cors())
// app.use('/', route);

// app.get('/age',(req,res)=>{
//   res.send('hi')
// })

// // Use dynamic port from .env
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });








const express = require('express');
const cors = require('cors');
const connectDB = require('./configure/store');
const authRoutes = require('./router/router.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', authRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
