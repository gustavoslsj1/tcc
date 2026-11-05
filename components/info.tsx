import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function InfoSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <Image
              src="/img1.png"
              alt="Estadão App"
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Com o Estadão, sua rotina de informação fica completa.
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Política, Economia, Internacional, Cultura e muitos outros temas
              que ajudam você a entender o mundo à sua volta e a participar das
              discussões do momento.
            </p>
            <Button className="bg-[#ffeb00] hover:bg-[#ffeb00]/90 text-black font-bold px-12 py-6 text-lg rounded-lg">
              ASSINE AGORA
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              Cancele quando quiser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
