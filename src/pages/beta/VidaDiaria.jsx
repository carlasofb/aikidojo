import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Zap, Target } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";

export default function VidaDiaria() {
  const { dark } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/beta"
              className="w-10 h-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center"
            >
              <ArrowLeft
                size={18}
                className="text-zinc-700 dark:text-zinc-300"
              />
            </Link>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-semibold">
                Vida Diária
              </p>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Aikido no Dia a Dia
              </h1>
            </div>
          </div>
          <button className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
            <Heart
              size={18}
              className={dark ? "text-red-400" : "text-zinc-700"}
            />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 max-w-3xl mx-auto space-y-8">
        {/* Introdução */}
        <section>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            O Aikido não é apenas uma arte marcial praticada no tatame. Os seus
            princípios de harmonia, equilíbrio e não-resistência podem
            transformar a forma como lidamos com os desafios da vida quotidiana.
            Vamos explorar como aplicar o Aikido fora do dojo e tornar o teu dia
            a dia mais fluido e pacífico.
          </p>
        </section>

        {/* Princípio 1: Harmonia */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Users size={24} className="text-blue-500" />
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Harmonia em Relações
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No Aikido, aprendemos a "fundir" com a energia do adversário em vez
            de a combater. Na vida diária, isso significa ouvir antes de reagir
            e encontrar soluções que beneficiem todos.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Exemplo: Discussão no Trabalho
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Em vez de argumentar agressivamente com um colega, respira fundo e
              diz: "Entendo a tua perspetiva. Vamos encontrar uma solução
              juntos." Isso reduz tensão e abre portas para colaboração.
            </p>
          </div>
        </section>

        {/* Princípio 2: Centro */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Target size={24} className="text-green-500" />
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Manter o Centro em Situações Estressantes
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            O "hara" (centro) no Aikido é o ponto de equilíbrio. Aplicado ao dia
            a dia, ajuda-nos a manter a calma em momentos de caos, como no
            trânsito ou em emergências.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Exemplo: Trânsito Caótico
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Quando alguém te corta a estrada, em vez de buzinar furiosamente,
              respira pelo abdómen e mantém a distância segura. Isso evita
              acidentes e preserva a tua energia.
            </p>
          </div>
        </section>

        {/* Princípio 3: Movimento Circular */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-purple-500" />
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Movimento Fluido em Mudanças
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Os movimentos circulares do Aikido ensinam-nos a adaptar-nos às
            mudanças em vez de as resistir. Na vida, isso significa abraçar o
            inesperado como uma oportunidade.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Exemplo: Mudança de Planos
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Se um plano familiar é cancelado devido à chuva, em vez de te
              irritares, vê como uma chance para uma atividade indoor divertida.
              "Vamos jogar um jogo em família!"
            </p>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Experimenta Hoje
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            Escolhe uma situação do teu dia a dia e aplica um princípio do
            Aikido. Nota como te sentes mais calmo e em controlo. Partilha a tua
            experiência no nosso grupo de treino!
          </p>
          <Link
            to="/treino"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ir para Treino
          </Link>
        </section>

        {/* Conclusão */}
        <section>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            O Aikido é uma filosofia de vida que vai além do tatame. Ao integrar
            estes princípios no teu quotidiano, não só melhoras a tua qualidade
            de vida, mas também inspiras os outros à tua volta. Queres saber
            mais? Explora as nossas sessões de treino ou lê sobre os conceitos
            fundamentais.
          </p>
        </section>
      </div>
    </div>
  );
}
