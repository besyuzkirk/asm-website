"use client";

import React from "react";

const doctor = {
  name: "Dr. Hüseyin Berkay Bakış",
  title: "Aile Hekimi",
  photo: "/images/berkay.png",
  description:
    "Kurusaray ASM'de aile hekimi olarak hizmet vermektedir. Sağlık hizmetlerinde tecrübeli ve güler yüzlü bir yaklaşım sunmaktadır.",
  tel: "0530 569 4577"
};

export default function Team() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Ekibimiz</h2>
      <p className="text-lg text-secondary mb-8">
        Aile Sağlığı Merkezimizde görev yapan değerli ekip üyemiz.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-white shadow-lg rounded-lg p-6 gap-6">
        <div className="flex justify-center">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-72 h-72 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-gray-800">{doctor.name}</h3>
          <p className="text-md text-primary mt-2">{doctor.title}</p>
          <p className="text-gray-600 mt-4">{doctor.description}</p>
          <p className="text-gray-600 mt-4"><span className="font-bold">Telefon Numarası:</span> {doctor.tel}</p>
        </div>
      </div>
    </section>
  );
}