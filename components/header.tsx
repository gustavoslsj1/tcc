import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0a0a0a] border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Estadão"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4 text-sm text-white">
            <a
              href="tel:08007702166"
              className="flex items-center gap-2 hover:text-[#ffeb00] transition-colors"
            >
              <Phone className="h-4 w-4" />
              0800 770 2166
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#ffeb00] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Assine via Whatsapp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
