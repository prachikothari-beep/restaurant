// //  const mongoose = require('mongoose');
// // const User = require('./models/User');
// // const Table = require('./models/Table');
// // const MenuCategory = require('./models/MenuCategory');
// // const MenuItem = require('./models/MenuItem');
// // const bcrypt = require('bcryptjs');
// // require('dotenv').config();

// // mongoose.connect(process.env.MONGO_URI).then(async ()=>{
// //   console.log('MongoDB connected for seeding');

// //   // Admin
// //   await User.deleteMany({});
// //   const admin = new User({name:'Admin',email:'admin@example.com',passwordHash:await bcrypt.hash('admin123',10),role:'admin'});
// //   const staff = new User({name:'Staff',email:'staff@example.com',passwordHash:await bcrypt.hash('staff123',10),role:'staff'});
// //   await admin.save();
// //   await staff.save();

// //   // Tables
// //   await Table.deleteMany({});
// //   for(let i=1;i<=10;i++){
// //     await new Table({number:i,qrSlug:'table'+i}).save();
// //   }

// //   // Categories
// //   await MenuCategory.deleteMany({});
// //   const cat1 = await new MenuCategory({name:'Beverages',displayOrder:1}).save();
// //   const cat2 = await new MenuCategory({name:'Snacks',displayOrder:2}).save();

// //   // Items
// //   await MenuItem.deleteMany({});
// //   await new MenuItem({name:'Coke',description:'Soft drink',price:50,categoryId:cat1._id,availability:true,tags:['cold','drink']}).save();
// //   await new MenuItem({name:'Burger',description:'Veg Burger',price:120,categoryId:cat2._id,availability:true,tags:['veg','fastfood']}).save();

// //   console.log('Seeding done');
// //   process.exit();
// // });

// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');
// // require('dotenv').config();

// // const User = require('./models/User');
// // const Table = require('./models/Table');
// // const MenuCategory = require('./models/MenuCategory');
// // const MenuItem = require('./models/MenuItem');

// // mongoose.connect(process.env.MONGO_URI)
// //   .then(async () => {
// //     console.log('MongoDB connected for seeding');

// //     // ---------- Users ----------
// //     await User.deleteMany({});
// //     const admin = new User({
// //       name: 'Admin',
// //       email: 'admin@example.com',
// //       passwordHash: await bcrypt.hash('admin123', 10),
// //       role: 'admin'
// //     });
// //     const staff = new User({
// //       name: 'Staff',
// //       email: 'staff@example.com',
// //       passwordHash: await bcrypt.hash('staff123', 10),
// //       role: 'staff'
// //     });
// //     await admin.save();
// //     await staff.save();
// //     console.log('Users seeded');

// //     // ---------- Tables ----------
// //     await Table.deleteMany({});
// //     const tables = [];
// //     for (let i = 1; i <= 10; i++) {
// //       const table = new Table({ number: i, qrSlug: 'table' + i });
// //       await table.save();
// //       tables.push(table);
// //     }
// //     console.log('Tables seeded');

// //     // ---------- Categories ----------
// //     await MenuCategory.deleteMany({});
// //     const cat1 = await new MenuCategory({ name: 'Beverages', displayOrder: 1 }).save();
// //     const cat2 = await new MenuCategory({ name: 'Snacks', displayOrder: 2 }).save();
// //     console.log('Categories seeded');

// //     // ---------- Menu Items ----------
// //     await MenuItem.deleteMany({});

// //     // Sample menu items to assign to all tables
// //     const sampleItems = [
// //       { name: 'Coke', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
// //       { name: 'Pepsi', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
// //       { name: 'Veg Burger', description: 'Delicious veg burger', price: 120, categoryId: cat2._id, availability: true, tags: ['veg', 'fastfood'] },
// //       { name: 'French Fries', description: 'Crispy fries', price: 80, categoryId: cat2._id, availability: true, tags: ['veg', 'snack'] },
// //     ];

// //     for (let table of tables) {
// //       for (let item of sampleItems) {
// //         await new MenuItem({
// //           ...item,
// //           tableSlug: table.qrSlug // Assign each item to this table
// //         }).save();
// //       }
// //     }

// //     console.log('Menu items seeded for all tables');

// //     process.exit();
// //   })
// //   .catch(err => {
// //     console.error('Seeding error:', err);
// //     process.exit(1);
// //   });

// const mongoose = require('mongoose');
// require('dotenv').config({ path: '../.env' });
// const bcrypt = require('bcryptjs');


// const User = require('./models/User');
// const Table = require('./models/Table');
// const MenuCategory = require('./models/MenuCategory');
// const MenuItem = require('./models/MenuItem');
// console.log("MONGO_URI:", process.env.MONGO_URI);

// mongoose.connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log('MongoDB connected for seeding');

//     // ---------- Users ----------
//     await User.deleteMany({});
//     const admin = new User({
//       name: 'Admin',
//       email: 'admin@example.com',
//       passwordHash: await bcrypt.hash('admin123', 10),
//       role: 'admin'
//     });
//     const staff = new User({
//       name: 'Staff',
//       email: 'staff@example.com',
//       passwordHash: await bcrypt.hash('staff123', 10),
//       role: 'staff'
//     });
//     await admin.save();
//     await staff.save();
//     console.log('Users seeded');

//     // ---------- Tables ----------
//     await Table.deleteMany({});
//     const tables = [];
//     for (let i = 1; i <= 10; i++) {
//       const table = new Table({ number: i, qrSlug: 'table' + i });
//       await table.save();
//       tables.push(table);
//     }
//     console.log('Tables seeded');

//     // ---------- Categories ----------
//     await MenuCategory.deleteMany({});
//     const cat1 = await new MenuCategory({ name: 'Beverages', displayOrder: 1 }).save();
//     const cat2 = await new MenuCategory({ name: 'Snacks', displayOrder: 2 }).save();
//     console.log('Categories seeded');

//     // ---------- Menu Items ----------
//     await MenuItem.deleteMany({});

//     // Sample menu items to assign to all tables
//     const sampleItems = [
//       { name: 'Coke', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
//       { name: 'Pepsi', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
//       { name: 'Veg Burger', description: 'Delicious veg burger', price: 120, categoryId: cat2._id, availability: true, tags: ['veg', 'fastfood'] },
//       { name: 'French Fries', description: 'Crispy fries', price: 80, categoryId: cat2._id, availability: true, tags: ['veg', 'snack'] },
//     ];

//     for (let table of tables) {
//       for (let item of sampleItems) {
//         await new MenuItem({
//           ...item,
//           tableSlug: table.qrSlug // Assign each item to this table
//         }).save();
//       }
//     }

//     console.log('Menu items seeded for all tables');

//     process.exit();
//   })
//   .catch(err => {
//     console.error('Seeding error:', err);
//     process.exit(1);
//   });
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // agar .env root me hai

const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Table = require('./models/Table');
const MenuCategory = require('./models/MenuCategory');
const MenuItem = require('./models/MenuItem');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding');

    // ---------- Users ----------
    const adminEmail = 'admin@example.com';
    const staffEmail = 'staff@example.com';

    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      const admin = new User({
        name: 'Admin',
        email: adminEmail,
        passwordHash: await bcrypt.hash('admin123', 10),
        role: 'admin'
      });
      await admin.save();
      console.log('Admin user seeded');
    }

    const staffExists = await User.findOne({ email: staffEmail });
    if (!staffExists) {
      const staff = new User({
        name: 'Staff',
        email: staffEmail,
        passwordHash: await bcrypt.hash('staff123', 10),
        role: 'staff'
      });
      await staff.save();
      console.log('Staff user seeded');
    }

    // ---------- Tables ----------
    const tableCount = await Table.countDocuments();
    if (tableCount === 0) {
      for (let i = 1; i <= 10; i++) {
        await new Table({ number: i, qrSlug: 'table' + i }).save();
      }
      console.log('Tables seeded');
    }

    // ---------- Categories ----------
    const catCount = await MenuCategory.countDocuments();
    let cat1, cat2;
    if (catCount === 0) {
      cat1 = await new MenuCategory({ name: 'Beverages', displayOrder: 1 }).save();
      cat2 = await new MenuCategory({ name: 'Snacks', displayOrder: 2 }).save();
      console.log('Categories seeded');
    } else {
      cat1 = await MenuCategory.findOne({ name: 'Beverages' });
      cat2 = await MenuCategory.findOne({ name: 'Snacks' });
    }

    // ---------- Menu Items ----------
    const itemCount = await MenuItem.countDocuments();
    if (itemCount === 0) {
      const tables = await Table.find();
      const sampleItems = [
        { name: 'Coke', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
        { name: 'Pepsi', description: 'Soft drink', price: 50, categoryId: cat1._id, availability: true, tags: ['cold', 'drink'] },
        { name: 'Veg Burger', description: 'Delicious veg burger', price: 120, categoryId: cat2._id, availability: true, tags: ['veg', 'fastfood'] },
        { name: 'French Fries', description: 'Crispy fries', price: 80, categoryId: cat2._id, availability: true, tags: ['veg', 'snack'] },
      ];

      for (let table of tables) {
        for (let item of sampleItems) {
          await new MenuItem({
            ...item,
            tableSlug: table.qrSlug
          }).save();
        }
      }
      console.log('Menu items seeded for all tables');
    }

    console.log('Seeding complete!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();
