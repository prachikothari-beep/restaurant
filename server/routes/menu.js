const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const MenuCategory = require('../models/MenuCategory');

// GET all categories
router.get('/categories', async (req,res)=>{
  const cats = await MenuCategory.find({active:true}).sort({displayOrder:1});
  res.json(cats);
});

// GET all menu items with search/filter
router.get('/items', async (req,res)=>{
  const {search,category,page=1,limit=10} = req.query;
  const query = {};
  if(category) query.categoryId = category;
  if(search) query.name = {$regex: search, $options: 'i'};

  const items = await MenuItem.find(query)
    .skip((page-1)*limit)
    .limit(parseInt(limit));
  res.json(items);
});

module.exports = router;
