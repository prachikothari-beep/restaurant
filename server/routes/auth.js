// // // // //  const express = require('express');
// // // // // const router = express.Router();
// // // // // const User = require('../models/User');
// // // // // const bcrypt = require('bcryptjs');
// // // // // const jwt = require('jsonwebtoken');

// // // // // router.post('/register', async (req,res)=>{
// // // // //   const {name,email,password,role} = req.body;
// // // // //   const hash = await bcrypt.hash(password,10);
// // // // //   const user = new User({name,email,passwordHash:hash,role});
// // // // //   await user.save();
// // // // //   res.json({message:'User registered'});
// // // // // });

// // // // // router.post('/login', async (req,res)=>{
// // // // //   const {email,password} = req.body;
// // // // //   const user = await User.findOne({email});
// // // // //   if(!user) return res.status(400).json({error:'User not found'});
// // // // //   const valid = await bcrypt.compare(password,user.passwordHash);
// // // // //   if(!valid) return res.status(400).json({error:'Invalid password'});
// // // // //   const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET, {expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN});
// // // // //   res.json({token,role:user.role});
// // // // // });

// // // // // module.exports = router;
// // // // const express = require('express');
// // // // const router = express.Router();
// // // // const User = require('../models/User');
// // // // const bcrypt = require('bcryptjs');
// // // // const jwt = require('jsonwebtoken');

// // // // // =============================
// // // // // REGISTER USER (Admin/Staff)
// // // // // =============================
// // // // router.post('/register', async (req, res) => {
// // // //   try {
// // // //     const { name, email, password, role } = req.body;

// // // //     // Check if user already exists
// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser)
// // // //       return res.status(400).json({ error: 'User already exists' });

// // // //     // Hash password
// // // //     const hash = await bcrypt.hash(password, 10);

// // // //     // Create user
// // // //     const user = new User({
// // // //       name,
// // // //       email: email.trim().toLowerCase(), // email normalize
// // // //       passwordHash: hash,
// // // //       role,
// // // //     });
// // // //     await user.save();

// // // //     res.json({ message: 'User registered successfully' });
// // // //   } catch (err) {
// // // //     console.error('Register Error:', err);
// // // //     res.status(500).json({ error: 'Server error' });
// // // //   }
// // // // });

// // // // // =============================
// // // // // LOGIN USER (Admin/Staff)
// // // // // =============================
// // // // router.post('/login', async (req, res) => {
// // // //   try {
// // // //     const { email, password } = req.body;

// // // //     // Step 1: Validate input
// // // //     if (!email || !password)
// // // //       return res.status(400).json({ error: 'Email and password required' });

// // // //     // Step 2: Find user by email
// // // //     const user = await User.findOne({ email: email.trim().toLowerCase() });
// // // //     if (!user)
// // // //       return res.status(400).json({ error: 'Invalid email or password' });

// // // //     // Step 3: Compare password
// // // //     const isMatch = await bcrypt.compare(password, user.passwordHash);
// // // //     if (!isMatch)
// // // //       return res.status(400).json({ error: 'Invalid email or password' });

// // // //     // Step 4: Generate JWT token
// // // //     const token = jwt.sign(
// // // //       { id: user._id, role: user.role },
// // // //       process.env.JWT_SECRET,
// // // //       { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
// // // //     );

// // // //     res.json({
// // // //       message: 'Login successful',
// // // //       token,
// // // //       role: user.role,
// // // //       name: user.name,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error('Login Error:', err);
// // // //     res.status(500).json({ error: 'Server error' });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require('express');
// // // const router = express.Router();
// // // const User = require('../models/User');
// // // const bcrypt = require('bcryptjs');
// // // const jwt = require('jsonwebtoken');

// // // // =============================
// // // // REGISTER USER (Admin/Staff)
// // // // =============================
// // // router.post('/register', async (req, res) => {
// // //   try {
// // //     const { name, email, password, role } = req.body;

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser)
// // //       return res.status(400).json({ error: 'User already exists' });

// // //     const hash = await bcrypt.hash(password, 10);
// // //     const user = new User({
// // //       name,
// // //       email: email.trim().toLowerCase(),
// // //       passwordHash: hash,
// // //       role,
// // //     });
// // //     await user.save();

// // //     res.json({ message: 'User registered successfully' });
// // //   } catch (err) {
// // //     console.error('Register Error:', err);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // =============================
// // // // LOGIN USER (Admin/Staff)
// // // // =============================
// // // router.post('/login', async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;

// // //     if (!email || !password)
// // //       return res.status(400).json({ error: 'Email and password required' });

// // //     const user = await User.findOne({ email: email.trim().toLowerCase() });

// // //     // 🟢 Debugging Logs
// // //     console.log("Login attempt:", email);
// // //     console.log("User found:", user ? user.email : '❌ Not found');

// // //     if (!user)
// // //       return res.status(400).json({ error: 'Invalid email or password' });

// // //     const isMatch = await bcrypt.compare(password, user.passwordHash);

// // //     // 🟢 Debugging Logs
// // //     console.log("Password valid:", isMatch);

// // //     if (!isMatch)
// // //       return res.status(400).json({ error: 'Invalid email or password' });

// // //     const token = jwt.sign(
// // //       { id: user._id, role: user.role },
// // //       process.env.JWT_SECRET,
// // //       { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
// // //     );

// // //     res.json({
// // //       message: 'Login successful',
// // //       token,
// // //       role: user.role,
// // //       name: user.name,
// // //     });
// // //   } catch (err) {
// // //     console.error('Login Error:', err);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // module.exports = router;
// // router.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     console.log("=====================================");
// //     console.log("🟢 Login attempt received");
// //     console.log("📧 Email entered:", email);
// //     console.log("🔑 Password entered (length):", password ? password.length : 0);

// //     // Step 1: Check input
// //     if (!email || !password) {
// //       console.log("❌ Missing email or password");
// //       return res.status(400).json({ error: 'Email and password required' });
// //     }

// //     // Step 2: Find user
// //     const user = await User.findOne({ email: email.trim().toLowerCase() });
// //     console.log("👤 User found in DB:", user ? user.email : "No user found");

// //     if (!user) {
// //       console.log("❌ Invalid email — user not found in DB");
// //       return res.status(400).json({ error: 'Invalid email or password' });
// //     }

// //     // Step 3: Check password
// //     const isMatch = await bcrypt.compare(password, user.passwordHash);
// //     console.log("🔍 Password match status:", isMatch);

// //     if (!isMatch) {
// //       console.log("❌ Invalid password for:", user.email);
// //       return res.status(400).json({ error: 'Invalid email or password' });
// //     }

// //     // Step 4: Generate token
// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
// //     );

// //     console.log("✅ Login successful for:", user.email);
// //     console.log("=====================================");

// //     res.json({
// //       message: 'Login successful',
// //       token,
// //       role: user.role,
// //       name: user.name,
// //     });

// //   } catch (err) {
// //     console.error("💥 Login Error:", err);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });
// // const express = require('express');
// // const router = express.Router();
// // const User = require('../models/User');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // // =============================
// // // LOGIN ROUTE WITH DEBUG LOGS
// // // =============================
// // router.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     console.log("=====================================");
// //     console.log("🟢 Login attempt received");
// //     console.log("📧 Email entered:", email);
// //     console.log("🔑 Password entered (length):", password ? password.length : 0);

// //     if (!email || !password) {
// //       console.log("❌ Missing email or password");
// //       return res.status(400).json({ error: 'Email and password required' });
// //     }

// //     const user = await User.findOne({ email: email.trim().toLowerCase() });
// //     console.log("👤 User found in DB:", user ? user.email : "No user found");

// //     if (!user) {
// //       console.log("❌ Invalid email — user not found in DB");
// //       return res.status(400).json({ error: 'Invalid email or password' });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.passwordHash);
// //     console.log("🔍 Password match status:", isMatch);

// //     if (!isMatch) {
// //       console.log("❌ Invalid password for:", user.email);
// //       return res.status(400).json({ error: 'Invalid email or password' });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
// //     );

// //     console.log("✅ Login successful for:", user.email);
// //     console.log("=====================================");

// //     res.json({
// //       message: 'Login successful',
// //       token,
// //       role: user.role,
// //       name: user.name,
// //     });

// //   } catch (err) {
// //     console.error("💥 Login Error:", err);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // ✅ Export router at end
// // module.exports = router;



// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const MenuItem = require('../models/MenuItem');

// // ===========================
// // GET ALL MENU ITEMS
// // ===========================
// router.get('/', async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'Unauthorized' });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const role = decoded.role;

//     let items;

//     if (role === 'staff' || role === 'admin') {
//       // Staff/Admin can see all menu items
//       items = await MenuItem.find();
//     } else {
//       // Customer view (based on tableSlug)
//       const tableSlug = req.query.tableSlug;
//       if (!tableSlug) return res.status(400).json({ error: 'Table slug required' });
//       items = await MenuItem.find({ tableSlug });
//     }

//     if (!items || items.length === 0)
//       return res.json({ message: 'No menu items found' });

//     res.json(items);
//   } catch (err) {
//     console.error('Menu fetch error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // ===========================
// // GET ALL CATEGORIES
// // ===========================
// router.get('/categories', async (req, res) => {
//   try {
//     // Fetch unique category names from MenuItem model
//     const categories = await MenuItem.distinct("category");
//     res.json(categories);
//   } catch (err) {
//     console.error('Category fetch error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// =============================
// LOGIN ROUTE WITH DEBUG LOGS
// =============================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("=====================================");
    console.log("🟢 Login attempt received");
    console.log("📧 Email entered:", email);
    console.log("🔑 Password entered (length):", password ? password.length : 0);

    if (!email || !password) {
      console.log("❌ Missing email or password");
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    console.log("👤 User found in DB:", user ? user.email : "No user found");

    if (!user) {
      console.log("❌ Invalid email — user not found in DB");
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    console.log("🔍 Password match status:", isMatch);

    if (!isMatch) {
      console.log("❌ Invalid password for:", user.email);
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m' }
    );

    console.log("✅ Login successful for:", user.email);
    console.log("=====================================");

    res.json({
      message: 'Login successful',
      token,
      role: user.role,
      name: user.name,
    });
  } catch (err) {
    console.error("💥 Login Error:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =============================
// ✅ GET ALL STAFF (Admin only)
// =============================
router.get('/staff', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin')
      return res.status(403).json({ error: 'Access denied' });

    const staff = await User.find({ role: 'staff' }).select('-passwordHash');
    res.json(staff);
  } catch (err) {
    console.error('Staff fetch error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
