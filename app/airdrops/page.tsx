import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen items-center justify-items-center p-8 sm:p-20">
      <div className="pb-2 text-sm">
        <Link href="/" className="text-[#ccc] hover:underline">
          Home
        </Link>{" "}
        / Aidrops
      </div>
      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">O que é um Airdrop? 💰</h1>
        <div className="flex flex-col py-4">
          <span className="text-[#ccc]">
            ➡ Airdrops são uma maneira de distribuir criptomoedas gratuitamente
            para várias pessoas ao mesmo tempo. Eles são usados, principalmente,
            para promover novos projetos, atrair mais usuários ou recompensar
            quem já está na comunidade.{" "}
          </span>

          <div className="py-4">
            <h3 className="py-4 font-bold">Como funciona? 🚀</h3>
            <p className="text-[#ccc]">
              Imagine um airdrop como um lançamento de moedas digitais. Pense em
              um festival onde de repente começam a distribuir camisetas grátis
              do palco. Todo mundo corre para pegar a sua, certo? Nos airdrops,
              em vez de camisetas, são criptomoedas que caem diretamente na sua
              carteira digital.
            </p>

            <h3 className="py-4 font-bold">Por que isso acontece?? 🚀</h3>
            <p className="text-[#ccc]">
              Os projetos de criptomoedas fazem airdrops para ganhar
              visibilidade, aumentar sua base de usuários e fortalecer sua
              comunidade. Quando você recebe moedas grátis, há mais chances de
              que você use, fale sobre o projeto e até indique para outras
              pessoas. É uma forma de introduzir o produto e gerar interesse.
            </p>

            <h3 className="py-4 font-bold">
              Como participar de um airdrop? 🚀
            </h3>
            <p className="text-[#ccc]">
              Siga as instruções: Para participar, normalmente, é necessário
              cumprir algumas tarefas, como seguir perfis nas redes sociais,
              interagir com a comunidade ou usar a plataforma do projeto. As
              exigências variam de projeto para projeto.
            </p>

            <p className="text-[#ccc]">
              Verifique a elegibilidade: Cada airdrop tem suas próprias regras e
              critérios. É importante conferir os requisitos e tentar cumpri-los
              para maximizar suas chances de ganhar os tokens.
            </p>

            <p className="text-[#ccc]">
              Imagine um novo projeto chamado CriptoFest que quer promover a
              FestCoin. Para participar do airdrop, você precisa seguir a página
              deles no Twitter e fornecer o endereço da sua carteira. Após o
              período de divulgação, você recebe 100 FestCoins de graça! Agora,
              você pode guardá-las, usá-las ou até vendê-las por USD/BRL.{" "}
            </p>

            <p className="text-[#ccc]">
              O valor das FestCoins pode variar, e elas não vão te deixar rico
              instantaneamente, mas airdrops podem ser uma ótima fonte de renda
              extra.
            </p>

            <h3 className="py-4 font-bold">Como ganhar Airdrops? 🚀</h3>
            <p className="text-[#ccc]">
              Existem vários tipos de airdrops, desde os mais simples, que
              envolvem interagir nas redes sociais ou jogar jogos, até os mais
              complexos, que pedem interação com a blockchain, contratos
              inteligentes e transações.
            </p>
            <p className="text-[#ccc]">
              Mas fique tranquilo, vou te mostrar apenas os airdrops mais fáceis
              e rápidos, que você pode participar direto do celular e que não
              vão tomar mais de 5 minutos do seu tempo!
            </p>
          </div>

          <h3 className="py-4 font-bold">Por que isso acontece? 🚀</h3>
          <p className="text-[#ccc]">
            Proteja sua carteira: Use carteiras seguras e nunca compartilhe sua
            chave privada. Golpes disfarçados de airdrops são comuns, então
            fique atento!
          </p>

          <div className="mt-4 bg-[#ddd] p-4">
            <h3 className="py-4 font-bold text-[#000]"> Qual é o risco ❓ </h3>

            <p className="text-[#000]">
              O risco de perder dinheiro é zero. O máximo que pode acontecer é o
              valor das moedas distribuídas ser baixo. Como são gratuitos, a sua
              única perda será o tempo investido. Porém, os airdrops que separei
              parecem promissores. Estamos em uma fase inicial, então há boas
              oportunidades para quem começar agora!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
