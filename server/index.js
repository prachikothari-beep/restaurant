// const express = require('express'); 
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/auth');
// const menuRoutes = require('./routes/menu');
// const tableRoutes = require('./routes/tables');
// const orderRoutes = require('./routes/orders');
// const cartRoutes= require('./routes/cartRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/menu', menuRoutes);
// app.use('/api/cartRoutes',cartRoutes);
// app.use('/api/tables', tableRoutes);
// app.use('/api/orders', orderRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const tableRoutes = require('./routes/tables');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/cartRoutes', cartRoutes);
app.use('/api/tables', tableRoutes);
app.use('/api/orders', orderRoutes);

// Health check
app.get('/', (req, res) => res.send('Server is running'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
