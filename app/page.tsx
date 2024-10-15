import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center p-8 sm:p-20">
      <main className="flex flex-col items-center">
        <Image
          className="mb-6 rounded-full"
          src="/logo.png"
          alt="logo"
          width={120}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Cripto com Giow ⚡</h1>

        <div className="flex flex-wrap items-center justify-center gap-2 py-4">
          <a
            className="hover:text-primary flex items-center"
            href="https://www.instagram.com/criptogiow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mr-1 rounded-full"
              src="/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
            <span className="text-sm text-[#ccc] hover:text-foreground">
              @criptogiow
            </span>
          </a>

          <a
            className="hover:text-primary flex items-center"
            href="https://t.me/GiowoBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mr-1 rounded-full"
              src="/telegram.svg"
              alt="telegram"
              width={20}
              height={20}
            />
            <span className="text-sm text-[#ccc] hover:text-foreground">
              Cripto com Giow ⚡
            </span>
          </a>
        </div>

        <div className="space-y-4 text-center">
          <h3 className="font-semibold">
            💰 Criptomoedas 🚀Airdrops gratuitos
          </h3>
          <span className="font-semibold">⤵️ Comece sua jornada ⤵️</span>
        </div>

        <div className="flex flex-col items-center py-10">
          <h3 className="mb-2 text-xl font-bold">Guia para iniciantes</h3>

          <Link
            href="/airdrops"
            className="text-sm text-[#ccc] hover:text-foreground"
          >
            💰 O que são Airdrops?
          </Link>
          <Link
            href="/corretoras"
            className="text-sm text-[#ccc] hover:text-foreground"
          >
            💱 Corretoras
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            className="text-sm text-[#ccc] hover:text-foreground"
            href="https://t.me/Ton_kombat_bot/app?startapp=966140556"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚔ Airdrop gratuito #1
          </a>

          <a
            className="text-sm text-[#ccc] hover:text-foreground"
            href="https://t.me/Binance_Moonbix_bot/start?startApp=ref_966140556&startapp=ref_966140556&utm_medium=web_share_copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎁 Airdrop gratuito #2
          </a>

          <a
            className="text-sm text-[#ccc] hover:text-foreground"
            href="https://t.me/Tomarket_ai_bot/app?startapp=0002pAzk"
            target="_blank"
            rel="noopener noreferrer"
          >
            🍅 Airdrop gratuito #3
          </a>

          <a
            className="text-sm text-[#ccc] hover:text-foreground"
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
