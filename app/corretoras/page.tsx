import Link from "next/link";

export default function Corretora() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 ">
      <div className="pb-2 text-sm">
        <Link href="/" className="text-[#ccc] hover:underline">
          Home
        </Link>{" "}
        / Corretoras
      </div>
      <main className="flex flex-col items-center">
        <h1 className="font-bold text-4xl">Corretoras 💱</h1>
        <div className="py-4 flex flex-col">
          <span className="text-[#ccc]">➡ Qual a melhor corretora? </span>
          <span className="text-[#ccc]">➡ Qual corretora você deve usar?</span>
          <div className="py-4">
            <h3 className="font-bold py-4">Qual corretora escolher? 🚀</h3>
            <p className="text-[#ccc]">
              Se você deseja investir em criptomoedas, usar uma corretora é
              praticamente indispensável. É através dela que você consegue
              converter seus reais (BRL) em criptoativos como Bitcoin, Ethereum,
              Solana, entre outros. Eu utilizo várias corretoras, dependendo do
              meu objetivo, mas em 90% das vezes opto pela Bybit.
            </p>

            <p className="text-[#ccc]">
              Caso queira, você pode abrir sua conta na Bybit clicando aqui: 
              <Link
                href=" https://www.bybit.com/invite?ref=XQNBRE9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#ccc] mx-1"
              >
                https://www.bybit.com/invite?ref=XQNBRE9
              </Link>
            </p>
            <h3 className="font-bold py-4">
              Por que a Bybit se destaca como uma boa escolha? 🚀
            </h3>
            <p className="text-[#ccc]">
              A Bybit é altamente recomendada para quem está dando os primeiros
              passos no universo das criptomoedas. Veja alguns motivos: Fácil de
              usar: A plataforma tem uma interface simples e intuitiva, perfeita
              para quem nunca negociou antes.
            </p>

            <p className="text-[#ccc]">
              Em pouco tempo, você estará familiarizado com o sistema. Baixas
              taxas: As taxas de negociação são atraentes e sem pegadinhas, o
              que é ótimo para quem está começando com um orçamento menor.
              Atendimento em português: Para quem não fala inglês, a Bybit
              oferece suporte em português, facilitando a comunicação e a
              resolução de dúvidas.
            </p>
          </div>

          <div className="bg-[#ddd] p-4 mt-4">
            <p className="text-[#000]">
              ✅ Depois de criar sua conta, você já pode começar a explorar o
              mundo das criptomoedas! Quer comprar cripto? É só depositar reais
              via Pix, escolher a moeda que deseja e fazer seu investimento.
              Dica importante: Se você é iniciante, sugiro estudar bem antes de
              investir em qualquer ativo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
