import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminPanel() {
  const [categories,setCategories] = useState([]);
  const [tables,setTables] = useState([]);

  useEffect(()=>{
    api.get('/menu/categories').then(res=>setCategories(res.data));
    api.get('/tables').then(res=>setTables(res.data));
  },[]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Admin Panel</h2>
      <div>
        <h3 className="font-bold mt-2">Categories</h3>
        {categories.map(c=><div key={c._id}>{c.name}</div>)}
      </div>
      <div>
        <h3 className="font-bold mt-2">Tables</h3>
        {tables.map(t=><div key={t._id}>{t.number} - QR: {t.qrSlug}</div>)}
      </div>
    </div>
  );
}
