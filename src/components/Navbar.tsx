export default function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <ul className="flex justify-center gap-8 py-4 text-sm font-medium">
        <li className="hover:underline cursor-pointer"><a href="#anasayfa">Anasayfa</a></li>
        <li className="hover:underline cursor-pointer"><a href="#hizmetlerimiz">Hizmetlerimiz</a></li>
        <li className="hover:underline cursor-pointer"><a href="#ekibimiz">Ekibimiz</a></li>
        <li className="hover:underline cursor-pointer"><a href="#calisma-plani">Haftalık Çalışma Planı</a></li>
        <li className="hover:underline cursor-pointer">
          <a href="https://www.mhrs.gov.tr" target="_blank" rel="noopener noreferrer">
            Randevu Alın
          </a>
        </li>
        <li className="hover:underline cursor-pointer"><a href="#cevrimici">Çevrimiçi Hizmetler</a></li>
        <li className="hover:underline cursor-pointer"><a href="#bize-ulasin">Bize Ulaşın</a></li>
      </ul>
    </nav>
  );
}
