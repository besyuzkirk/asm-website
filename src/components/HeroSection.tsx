"use client";

import React, { useState } from "react";

// Yerleşik UI bileşenleri yerine Tailwind ve React kullan

const slides = [
  {
    id: 1,
    title: "9 Şubat Dünya Sigarayı Bırakma Günü",
    description: "Sigarayı Bırakmanın Faydaları",
    image: "/images/blog_2.jpg",
    buttonText: "Daha Fazla Bilgi",
    blogContent: "Sigara içmek vücudunuzda çok fazla hasara neden olmaktadır. Örneğin, kalbiniz ve kan damarlarınız bu alışkanlıktan etkileniyor. Dumandan çıkan toksik ürünler kan damarlarının daralmasına ve sertleşmesine (ateroskleroz) neden olur. Kan basıncı yükselir ve kalp daha fazla çalışmak zorundadır. Sigara, kardiyovasküler hastalık ve inme için önde gelen bir neden olarak kabul edilmektedir.",
  },
  {
    id: 2,
    title: "Aşıların Önemi",
    description: "Aşılar, sağlığınızı ve sevdiklerinizi korur.",
    image: "/images/blog_3.jpg",
    buttonText: "Aşı Bilgisi",
    blogContent: "Aşılar, bağışıklık sistemimizi güçlendiren önemli sağlık uygulamalarıdır. Hastalıkların önlenmesi açısından kritik rol oynar...",
  },
  {
    id: 3,
    title: "Kardiyovasküler Risk Nedir?",
    description: "Kardiyovasküler Hastalık vücudunuzun kan damar sistemini olumsuz etkileyen hastalıkları kapsar",
    image: "/images/blog_1.jpg",
    buttonText: "Daha Fazla Bilgi",
    blogContent: "Kardiyovasküler Hastalık (kalp damar hastalığı; KVH), kalbinizi ve vücudunuzun kan damar sistemini olumsuz etkileyen hastalıkları kapsar. Yani hastalığın adındaki kardiyo kalp, vasküler de kan damarları ifade etmektedir. Kardiyovasküler Hastalıklarının büyük çoğunluğu kronik rahatsızlıkları yansıtır. Bu rahatsızlıklar uzun sürede gelişip kendini belli etmektedir. Fakat kardiyovasküler Hastalıklarının bir bölümü kalbi ya da beyni besleyen bir damarda tıkanıklık meydana geldiğinde ansızın oluşan kalp krizleri ve inmeler gibi akut olaylar şeklinde meydana gelebilir. Riskinizi öğrenmek ve erken önlem almak için Aile Hekiminizden randevu alınız.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-gray-100">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="bg-black/50 text-white p-6 text-center rounded-md">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
              <button onClick={() => { setSelectedSlide(slide); setOpen(true); }} className="mt-4 bg-primary py-2 px-6 rounded-lg hover:bg-secondary transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-md hover:bg-gray-200 transition">&larr;</button>
      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-md hover:bg-gray-200 transition">&rarr;</button>

      <div className="absolute bottom-4 flex justify-center gap-2 w-full">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-primary" : "bg-white"}`}></button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-4">{selectedSlide?.title}</h3>
            <p>{selectedSlide?.blogContent}</p>
            <button onClick={() => setOpen(false)} className="mt-4 bg-secondary py-2 px-4 rounded-lg">Kapat</button>
          </div>
        </div>
      )}
    </section>
  );
}