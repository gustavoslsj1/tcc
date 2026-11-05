"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 5,
    minutes: 21,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center flex-col gap-4">
            <div className="bg-[#ffeb00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
              Mês de Ofertas
            </div>
            <Image
              src="/friday.png"
              alt="News Friday"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </div>

          <div className="text-center">
            <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2 text-balance">
              Invista em informação e{" "}
              <span className="text-[#ffeb00]">economize</span>
            </h1>
            <p className="text-white/80 text-sm">
              O Estadão democratiza o acesso à<br />
              informação com as melhores ofertas.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 min-w-[70px]">
                <div className="text-white text-3xl font-bold">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="text-white/60 text-xs mt-1">Dias</div>
            </div>
            <div className="text-white text-3xl flex items-center">:</div>
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 min-w-[70px]">
                <div className="text-white text-3xl font-bold">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="text-white/60 text-xs mt-1">Horas</div>
            </div>
            <div className="text-white text-3xl flex items-center">:</div>
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 min-w-[70px]">
                <div className="text-white text-3xl font-bold">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="text-white/60 text-xs mt-1">Minutos</div>
            </div>
            <div className="text-white text-3xl flex items-center">:</div>
            <div className="text-center">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 min-w-[70px]">
                <div className="text-white text-3xl font-bold">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="text-white/60 text-xs mt-1">Segundos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
