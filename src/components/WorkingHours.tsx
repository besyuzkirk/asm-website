"use client";

import React from "react";

export default function WorkingHours() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary">Haftalık Çalışma Planı</h2>
        <p className="text-secondary mt-2">
          Aile Sağlığı Merkezimizin haftalık çalışma planını aşağıdaki tablodan inceleyebilir veya PDF olarak indirebilirsiniz.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Saat</th>
              <th className="border border-gray-300 px-4 py-2">Pazartesi</th>
              <th className="border border-gray-300 px-4 py-2">Salı</th>
              <th className="border border-gray-300 px-4 py-2">Çarşamba</th>
              <th className="border border-gray-300 px-4 py-2">Perşembe</th>
              <th className="border border-gray-300 px-4 py-2">Cuma</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-4 py-2">08:00 - 12:00</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Gezici Sağlık (Ayın Her Haftası)</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Gezici Sağlık (Ayın Her Haftası)</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td></tr>
            <tr><td className="border px-4 py-2">12:00 - 13:00</td><td colSpan={5} className="border px-4 py-2 text-center">Öğle Tatili</td></tr>
            <tr><td className="border px-4 py-2">13:00 - 16:00</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td></tr>
            <tr><td className="border px-4 py-2">16:00 - 17:00</td><td className="border px-4 py-2">Ev Ziyareti</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Aile Hekimliği Hizmetleri</td><td className="border px-4 py-2">Ev Ziyareti</td></tr>
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <a
            href="calisma.jpeg"
            download
            className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-secondary transition"
          >
            PDF'yi İndir
          </a>
        </div>
      </div>
    </section>
  );
}
