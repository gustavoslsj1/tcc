"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PricingCards() {
  const [selectedCard1, setSelectedCard1] = useState<"daily" | "weekend">(
    "daily"
  );
  const [selectedCard2, setSelectedCard2] = useState<"mensal" | "anual">(
    "mensal"
  );
  const [selectedCard3, setSelectedCard3] = useState<"mensal" | "anual">(
    "mensal"
  );

  const card1Prices = {
    daily: {
      badge: "35% OFF",
      header: "ASSINE COM 35% OFF",
      installments: "6x R$29,90/mês",
      originalPrice: "DE R$80,90",
      price: "R$52,90",
      period: "POR 1 ANO",
    },
    weekend: {
      badge: "23% OFF",
      header: "ASSINE COM 23% OFF",
      installments: "R$9,90/mês",
      originalPrice: "DE R$12,90",
      price: "R$9,90",
      period: "POR 1 ANO",
    },
  };

  const card2Prices = {
    mensal: {
      badge: "92% OFF",
      header: "ASSINE COM 92% OFF",
      installments: "6x R$1,90/mês",
      duration: "6 MESES POR",
      price: "R$1,90",
      afterPrice: "Após R$23,90",
      strikePrice: "R$13,90",
    },
    anual: {
      badge: "65% OFF",
      header: "ASSINE COM 65% OFF",
      installments: "6x R$9,90/mês",
      duration: "12 MESES POR",
      price: "R$9,90",
      afterPrice: "Total R$118,80",
      strikePrice: "R$340,80",
    },
  };

  const card3Prices = {
    mensal: {
      badge: "54% OFF",
      header: "ASSINE COM 54% OFF",
      installments: "3x R$5,90/mês",
      originalPrice: "DE R$12,90",
      price: "R$5,90",
      period: "POR 3 MESES",
    },
    anual: {
      badge: "54% OFF",
      header: "ECONOMIZE 54%",
      installments: "12x R$5,90/mês",
      originalPrice: "DE R$154,80",
      price: "R$70,80",
      period: "POR 1 ANO",
    },
  };

  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - Jornal Impresso */}
          <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#00d4ff] rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="absolute -top-3 -left-3 bg-[#00ff88] text-black px-3 py-1 rounded-full text-xs font-bold transform -rotate-12">
              {card1Prices[selectedCard1].badge}
            </div>
            <div className="bg-[#00d4ff] text-black text-center py-1 rounded-full text-sm font-bold mb-4">
              {card1Prices[selectedCard1].header}
            </div>

            <h3 className="text-white text-2xl font-bold mb-2 text-center">
              JORNAL IMPRESSO
            </h3>
            <p className="text-white/80 text-sm text-center mb-4">
              + DIGITAL COMPLETA
              <br />+ VOUCHER <span className="text-[#ffeb00]">R$50</span>
            </p>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSelectedCard1("daily")}
                className={`flex-1 text-xs py-2 rounded font-bold transition-colors ${
                  selectedCard1 === "daily"
                    ? "bg-[#ffeb00] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Todos os dias
                <br />
                {card1Prices[selectedCard1].installments}
              </button>
              <button
                onClick={() => setSelectedCard1("weekend")}
                className={`flex-1 text-xs py-2 rounded transition-colors ${
                  selectedCard1 === "weekend"
                    ? "bg-[#ffeb00] text-black font-bold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Finais de semana
                <br />
                {card1Prices[selectedCard1].installments}
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="text-white/60 text-sm line-through">
                {card1Prices[selectedCard1].originalPrice}
              </div>
              <div className="text-[#ffeb00] text-5xl font-bold">
                {card1Prices[selectedCard1].price}
                <span className="text-2xl">/mês</span>
              </div>
              <div className="text-white/80 text-sm">
                {card1Prices[selectedCard1].period}
              </div>
            </div>

            <Button className="w-full bg-[#ffeb00] hover:bg-[#ffeb00]/90 text-black font-bold py-6 rounded-lg mb-4">
              ASSINE E ECONOMIZE
            </Button>
            <p className="text-white/60 text-xs text-center mb-6">
              Cancele quando quiser
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Acesso ilimitado ao portal do Estadão</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Conteúdo personalizado no app</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>30 anos de história no Acervo Estadão</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Réplica digital do jornal impresso</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Estadão impresso entregue na sua casa</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Desconto e cashback no Clube Estadão+</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Digital Completa */}
          <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-white/30 rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="bg-white text-black text-center py-1 rounded-full text-sm font-bold mb-4">
              {card2Prices[selectedCard2].header}
              <br />
              MELHOR OFERTA
            </div>

            <h3 className="text-white text-2xl font-bold mb-4 text-center">
              DIGITAL COMPLETA
            </h3>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSelectedCard2("mensal")}
                className={`flex-1 text-xs py-2 rounded font-bold transition-colors ${
                  selectedCard2 === "mensal"
                    ? "bg-[#ffeb00] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Mensal
                <br />
                {card2Prices[selectedCard2].installments}
              </button>
              <button
                onClick={() => setSelectedCard2("anual")}
                className={`flex-1 text-xs py-2 rounded transition-colors ${
                  selectedCard2 === "anual"
                    ? "bg-[#ffeb00] text-black font-bold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Anual
                <br />
                {card2Prices[selectedCard2].installments}
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="text-white text-lg font-bold">
                {card2Prices[selectedCard2].duration}
              </div>
              <div className="text-[#ffeb00] text-5xl font-bold">
                {card2Prices[selectedCard2].price}
                <span className="text-2xl">/mês</span>
              </div>
              <div className="text-white/80 text-sm">
                {card2Prices[selectedCard2].afterPrice}{" "}
                <span className="line-through text-white/60">
                  {card2Prices[selectedCard2].strikePrice}
                </span>
                /mês
              </div>
            </div>

            <Button className="w-full bg-[#ffeb00] hover:bg-[#ffeb00]/90 text-black font-bold py-6 rounded-lg mb-4">
              ASSINE E ECONOMIZE
            </Button>
            <p className="text-white/60 text-xs text-center mb-6">
              Cancele quando quiser
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Acesso ilimitado ao portal do Estadão</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Conteúdo personalizado no app</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>150 anos de história no Acervo Estadão</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Réplica digital do jornal impresso</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Desconto e cashback no Clube Estadão+</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Digital Básica */}
          <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#00d4ff] rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="bg-[#00d4ff] text-black text-center py-1 rounded-full text-sm font-bold mb-4">
              {card3Prices[selectedCard3].header}
            </div>

            <h3 className="text-white text-2xl font-bold mb-4 text-center">
              DIGITAL BÁSICA
            </h3>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setSelectedCard3("mensal")}
                className={`flex-1 text-xs py-2 rounded font-bold transition-colors ${
                  selectedCard3 === "mensal"
                    ? "bg-[#ffeb00] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Mensal
                <br />
                {card3Prices[selectedCard3].installments}
              </button>
              <button
                onClick={() => setSelectedCard3("anual")}
                className={`flex-1 text-xs py-2 rounded transition-colors ${
                  selectedCard3 === "anual"
                    ? "bg-[#ffeb00] text-black font-bold"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Anual
                <br />
                {card3Prices[selectedCard3].installments}
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="text-white/60 text-sm line-through">
                {card3Prices[selectedCard3].originalPrice}
              </div>
              <div className="text-[#ffeb00] text-5xl font-bold">
                {card3Prices[selectedCard3].price}
                <span className="text-2xl">/mês</span>
              </div>
              <div className="text-white/80 text-sm">
                {card3Prices[selectedCard3].period}
              </div>
            </div>

            <Button className="w-full bg-[#ffeb00] hover:bg-[#ffeb00]/90 text-black font-bold py-6 rounded-lg mb-4">
              ASSINE E ECONOMIZE
            </Button>
            <p className="text-white/60 text-xs text-center mb-6">
              Cancele quando quiser
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Acesso ilimitado ao portal do Estadão</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Conteúdo personalizado no app</span>
              </li>
              <li className="flex items-start gap-2 text-white text-sm">
                <Check className="h-5 w-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                <span>Desconto no Clube Estadão+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
