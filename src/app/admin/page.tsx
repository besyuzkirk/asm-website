"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    workingHours: "",
    services: [],
    announcements: []
  });

  useEffect(() => {
    fetch("/api/asm")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await fetch("/api/asm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alert("ASM bilgileri güncellendi!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">ASM Bilgileri</h1>

      <label className="block mb-2">ASM Adı:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Adres:</label>
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Telefon:</label>
      <input
        type="text"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">E-posta:</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <label className="block mb-2">Çalışma Saatleri:</label>
      <input
        type="text"
        name="workingHours"
        value={data.workingHours}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        Güncelle
      </button>
    </div>
  );
}
