const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes

const authRoute = require('./routes/auth');
const eventsRoute = require('./routes/events.routes');

dotenv.config();

/* use port 500 */

const PORT = 5000;


//Middleware
app.use(express.json());
app.use(cors());

//Route middleware
app.use(authRoute);
app.use(eventsRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));