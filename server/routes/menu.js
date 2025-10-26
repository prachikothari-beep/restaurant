// const express = require('express');
// const router = express.Router();
// const MenuItem = require('../models/MenuItem');
// const MenuCategory = require('../models/MenuCategory');

// // GET all categories
// router.get('/categories', async (req,res)=>{
//   const cats = await MenuCategory.find({active:true}).sort({displayOrder:1});
//   res.json(cats);
// });

// // GET all menu items with search/filter
// router.get('/items', async (req,res)=>{
//   const {search,category,page=1,limit=10} = req.query;
//   const query = {};
//   if(category) query.categoryId = category;
//   if(search) query.name = {$regex: search, $options: 'i'};

//   const items = await MenuItem.find(query)
//     .skip((page-1)*limit)
//     .limit(parseInt(limit));
//   res.json(items);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const MenuItem = require('../models/MenuItem');

// GET menu items
router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const role = decoded.role;

    let items;

    if (role === 'staff' || role === 'admin') {
      // Staff/Admin dekhen sab tables ka menu
      items = await MenuItem.find();
    } else {
      // Customer
      const tableSlug = req.query.tableSlug;
      if (!tableSlug) return res.status(400).json({ error: 'Table slug required' });
      items = await MenuItem.find({ tableSlug });
    }

    if (!items || items.length === 0) return res.json({ message: 'No menu items found' });

    res.json(items);
  } catch (err) {
    console.error('Menu fetch error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
