const express = require('express');
const router = express.Router();
const Table = require('../models/Table');

// GET all tables
router.get('/', async (req,res)=>{
  const tables = await Table.find();
  res.json(tables);
});

// GET table by qrSlug
router.get('/:slug', async (req,res)=>{
  const table = await Table.findOne({qrSlug:req.params.slug});
  if(!table) return res.status(404).json({error:'Table not found'});
  res.json(table);
});

module.exports = router;
