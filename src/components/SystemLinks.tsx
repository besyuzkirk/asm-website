"use client";

import React from "react";

const systems = [
  {
    name: "MHRS Randevu Sistemi",
    description: "Hastane ve aile hekimi randevularınızı buradan alabilirsiniz.",
    link: "https://www.mhrs.gov.tr/",
    icon: "/images/mhrs-logo.svg", // MHRS logosu
  },
  {
    name: "e-Nabız",
    description: "Kişisel sağlık bilgilerinize ve tahlil sonuçlarınıza buradan ulaşabilirsiniz.",
    link: "https://www.enabiz.gov.tr/",
    icon: "/images/enabiz-logo.png", // e-Nabız logosu
  },
  {
    name: "Aşı Bilgi Sistemi",
    description: "Aşı takvimi ve aşı bilgileriniz için buraya tıklayın.",
    link: "https://asi.saglik.gov.tr/",
    icon: "/images/asi-bilgi-sistemi-logo.png", // Aşı Bilgi Sistemi logosu
  },
  {
    name: "Obezite",
    description: "Sağlıklı Beslenme ve Hareketli Hayat Dairesi Başkanlığı",
    link: "https://hsgm.saglik.gov.tr/tr/obezite",
    icon: "/images/obezite-logo.svg", // e-Nabız logosu
  },
];

export default function SystemsLinks() {
    return (
      <section className="py-12 bg-gray-50">
        {/* Başlık */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-primary">Online Sağlık Sistemleri</h2>
          <p className="text-lg text-secondary mt-2">
            Sağlık Bakanlığı'nın çevrimiçi hizmetlerine kolayca erişin.
          </p>
        </div>
  
        {/* Sistem Linkleri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <a
              key={index}
              href={system.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              {/* İkon */}
              <div className="w-40 h-40 mb-6">
                <img
                  src={system.icon}
                  alt={system.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Başlık */}
              <h3 className="text-xl font-bold text-gray-800 text-center">{system.name}</h3>
              {/* Açıklama */}
              <p className="text-md text-gray-600 mt-3 text-center">
                {system.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
  }