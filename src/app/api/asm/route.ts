import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// JSON dosyasının yolu
const filePath = path.join(process.cwd(), "src/data/asm.json");

// API GET metodu: JSON dosyasındaki veriyi döner
export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf-8"); // JSON dosyasını oku
    return NextResponse.json(JSON.parse(data)); // JSON formatında döndür
  } catch (error) {
    console.error("GET API hatası:", error);
    return NextResponse.json(
      { error: "Veri okunamadı." },
      { status: 500 }
    );
  }
}

// API POST metodu: JSON dosyasını günceller
export async function POST(req: Request) {
  try {
    const newData = await req.json(); // İstekten gelen yeni veriyi al
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2)); // Yeni veriyi JSON dosyasına yaz
    return NextResponse.json({ message: "Veriler başarıyla güncellendi." });
  } catch (error) {
    console.error("POST API hatası:", error);
    return NextResponse.json(
      { error: "Veriler güncellenemedi." },
      { status: 500 }
    );
  }
}
