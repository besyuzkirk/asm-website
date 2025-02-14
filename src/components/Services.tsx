"use client";

import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const services = [
  {
    title: "Poliklinik Muayenesi",
    description: "ASM'mizde birinci basamak muayene hizmetleri verilmektedir.",
    icon: <FaHeartbeat />,
    iconColor: "text-red-500",
  },
  {
    title: "Aile Planlaması",
    description: "Aile planlaması hizmetleri ve eğitimleri yapılmaktadır.",
    icon: <FaHeartbeat />,
    iconColor: "text-purple-500",
  },
  {
    title: "Halk Eğitimleri",
    description: "AÇS-AP, gebelik, hijyen vb. konularında eğitim verilmektedir.",
    icon: <FaHeartbeat />,
    iconColor: "text-orange-500",
  },
  {
    title: "Aşı Hizmetleri",
    description:
      "Aşı takviminde yer alan aşıların uygulanması ve takibi yapılmaktadır.",
    icon: <FaHeartbeat />,
    iconColor: "text-green-500",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-background text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">HİZMETLER</h2>
      <p className="text-secondary mb-8">
        Aile Sağlığı Merkezimizde verilen başlıca hizmetler.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {/* İkon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4 ${service.iconColor} group-hover:rotate-12 transition-transform duration-500`}
            >
              <span className="text-3xl">{service.icon}</span>
            </div>
            {/* Başlık */}
            <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
            {/* Açıklama */}
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
