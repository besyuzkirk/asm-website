"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Ayrım Başlığı */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Bize Ulaşın</h2>
        <p className="text-lg text-secondary mt-4">
          Aile Sağlığı Merkezimizin iletişim bilgilerine ve konumuna ulaşabilirsiniz.
        </p>
      </div>

      {/* İçerik */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Google Maps */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8327489971463!2d34.48197961499126!3d40.621945579341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d7a84cd8890001%3A0x1234567890abcdef!2sKurusaray%20Aile%20Sa%C4%9Fl%C4%B1%C4%9F%C4%B1%20Merkezi!5e0!3m2!1str!2str!4v1619876123456!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Kurusaray Aile Sağlığı Merkezi"
          ></iframe>
        </div>

        {/* Adres Bilgileri */}
        <div className="flex flex-col gap-6 text-gray-800">
          {/* Kurusaray ASM */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary">
              Kurusaray Aile Sağlığı Merkezi
            </h3>
            <p className="text-sm mt-2">
            <span className="font-bold">Adres:</span> 19400 Kurusaray Köyü/İskilip/Çorum
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Aile Hekim:</span> Dr. Hüseyin Berkay BAKIŞ
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Telefon:</span> 0530 569 4577
            </p>
          </div>

          {/* Çorum İl Sağlık Müdürlüğü */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary">
              Çorum İl Sağlık Müdürlüğü
            </h3>
            <p className="text-sm mt-2">
              <span className="font-bold">Adres:</span> Bahçelievler Mah.
              Çamlık Sok. No: 86 / A, Merkez / Çorum
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Telefon:</span> 0(364) 219 5500
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Faks:</span> 0(364) 219 5525
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">E-posta:</span>{" "}
              corum@saglik.gov.tr
            </p>
          </div>

          {/* Çorum İlçe Sağlık Müdürlüğü */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-bold text-primary">
              Çorum İlçe Sağlık Müdürlüğü
            </h3>
            <p className="text-sm mt-2">
              <span className="font-bold">İlçe Sağlık Müdürü:</span> Mustafa
              ÇALIŞKAN
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Telefon:</span> 0364 511 87 50
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
