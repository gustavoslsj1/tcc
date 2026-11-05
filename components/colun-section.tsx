import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ColumnistsSection() {
  const columnists = [
    { name: "Leandro Karnal", color: "bg-orange-500" },
    { name: "Carlos Andreazza", color: "bg-blue-100" },
    { name: "Roseann Kennedy", color: "bg-purple-900" },
    { name: "Eliane Cantanhêde", color: "bg-blue-600" },
    { name: "Renata Cafaro", color: "bg-pink-100" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Colunistas | Opinião e análise para fazer você pensar
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              No Estadão você acessa análises de qualidade e pode formar sua
              opinião com mais conhecimento. Leia e assista no site ou na edição
              impressa e siga seus colunistas preferidos no APP.
            </p>
            <Button className="bg-[#ffeb00] hover:bg-[#ffeb00]/90 text-black font-bold px-12 py-6 text-lg rounded-lg">
              ASSINE AGORA
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              Cancele quando quiser
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {columnists.map((columnist, index) => (
              <div
                key={index}
                className={`${columnist.color} rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden`}
              >
                {/* <Image
                  src={`/.jpg?height=300&width=300&query=${columnist.name} journalist portrait professional`}
                  alt={columnist.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                /> */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="text-sm font-bold text-black">
                    {columnist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
