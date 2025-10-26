// import React, { useEffect, useState } from 'react';
// import api from '../services/api';

// export default function AdminPanel() {
//   const [categories,setCategories] = useState([]);
//   const [tables,setTables] = useState([]);

//   useEffect(()=>{
//     api.get('/menu/categories').then(res=>setCategories(res.data));
//     api.get('/tables').then(res=>setTables(res.data));
//   },[]);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Admin Panel</h2>
//       <div>
//         <h3 className="font-bold mt-2">Categories</h3>
//         {categories.map(c=><div key={c._id}>{c.name}</div>)}
//       </div>
//       <div>
//         <h3 className="font-bold mt-2">Tables</h3>
//         {tables.map(t=><div key={t._id}>{t.number} - QR: {t.qrSlug}</div>)}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminPanel() {
  const [categories, setCategories] = useState([]);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [staff, setStaff] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    api.get("/menu/categories", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setCategories(res.data));

    api.get("/tables", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setTables(res.data));

    api.get("/orders", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setOrders(res.data));

    api.get("/auth/staff", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setStaff(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Admin Panel</h2>

      <div className="mb-4">
        <h3 className="font-bold mt-2">Orders</h3>
        {orders.map((o) => (
          <div key={o._id} className="border p-2 mb-1">
            Table {o.table.number} - Status: {o.status} - Staff: {o.assignedStaff?.name || "Unassigned"}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-bold mt-2">Staff</h3>
        {staff.map((s) => (
          <div key={s._id}>{s.name} ({s.email})</div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-bold mt-2">Categories</h3>
        {categories.map((c) => (
          <div key={c._id}>{c.name}</div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-bold mt-2">Tables</h3>
        {tables.map((t) => (
          <div key={t._id}>{t.number} - QR: {t.qrSlug}</div>
        ))}
      </div>
    </div>
  );
}
