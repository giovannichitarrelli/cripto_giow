import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 ">
      <main className="flex flex-col items-center ">
        <Image
          className="rounded-full mb-6"
          src="/logo.png"
          alt="logo"
          width={120}
          height={38}
          priority
        />
        <h1 className="font-bold text-2xl">Cripto com Giow ⚡</h1>

        <div className=" flex gap-2 py-4 flex-wrap items-center justify-center">
          <a
            className="flex items-center  hover:text-primary"
            href="https://www.instagram.com/criptogiow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-full mr-1"
              src="/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
            <span className=" text-sm text-[#ccc] hover:text-foreground">
              @criptogiow
            </span>
          </a>

          <a
            className="flex items-center    hover:text-primary"
            href="https://www.telegram.com/@GiowoBot" //rever aqui
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-full mr-1"
              src="/telegram.svg"
              alt="telegram"
              width={20}
              height={20}
            />
            <span className=" text-sm text-[#ccc] hover:text-foreground">
              Cripto com Giow ⚡
            </span>
          </a>
        </div>

        <div className="  space-y-4 text-center">
          <h3 className="font-semibold">
            💰 Criptomoedas 🚀Airdrops gratuitos
          </h3>
          <span className="font-semibold">⤵️ Comece sua jornada ⤵️</span>
        </div>

        <div className="flex  py-10 items-center flex-col ">
          <h3 className="font-bold mb-2 text-xl">Guia para iniciantes</h3>

          <Link
            href="/airdrops"
            className="hover:text-foreground text-[#ccc] text-sm  "
          >
            💰 O que são Airdrops?
          </Link>
          <Link
            href="/corretoras"
            className="hover:text-foreground text-[#ccc] text-sm  "
          >
            💱 Corretoras
          </Link>
        </div>

        <div className="flex gap-2  items-center flex-col ">
          <a
            className="hover:text-foreground text-[#ccc] text-sm  "
            href="https://t.me/Ton_kombat_bot/app?startapp=966140556"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚔ Airdrop gratuito #1
          </a>

          <a
            className="hover:text-foreground text-[#ccc] text-sm  "
            href="https://t.me/Binance_Moonbix_bot/start?startApp=ref_966140556&startapp=ref_966140556&utm_medium=web_share_copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎁 Airdrop gratuito #2
          </a>

          <a
            className="hover:text-foreground text-[#ccc] text-sm  "
            href="https://t.me/Tomarket_ai_bot/app?startapp=0002pAzk"
            target="_blank"
            rel="noopener noreferrer"
          >
            🍅 Airdrop gratuito #3
          </a>

          <a
            className="hover:text-foreground text-[#ccc] text-sm  "
            href="https://t.me/blum/app?startapp=ref_KEwToMnAYN"
            target="_blank"
            rel="noopener noreferrer"
          >
            🍀 Airdrop gratuito #4
          </a>
        </div>
      </main>
    </div>
  );
}
