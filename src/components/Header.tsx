import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-red-600 py-6 px-6">
      <div className="flex justify-between items-center">
        {/* Logo ve Yazılar */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Sağlık Bakanlığı Logosu"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-2xl font-bold text-red-600">
              T.C. SAĞLIK BAKANLIĞI
            </h1>
            <h2 className="text-base text-green-600">
              Kurusaray Aile Sağlığı Merkezi
            </h2>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="flex items-center gap-2 border-l border-red-600 pl-4">
          <div className="text-left">
            <span className="text-sm text-red-600">Telefon:</span>
            <span className="block text-lg font-bold text-black">0530 569 4577</span>
          </div>
        </div>
      </div>
    </header>
  );
}