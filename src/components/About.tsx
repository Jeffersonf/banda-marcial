import { BookOpen, Calendar, Landmark, Leaf, X } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = [
    'Fundada em 21 de setembro de 2010, Dia da Árvore, e inaugurada em 21 de dezembro de 2010, a Banda Marcial Paineira Bicentenária de Itapeva nasceu com a missão de promover a educação musical, a cultura e a preservação ambiental, em referência ao tombamento histórico da Paineira Bicentenária, símbolo da cidade (Decreto de Tombamento nº 1.046, de 14/06/1989).',
    'Reconhecida pela excelência, tradição e inovação, a banda se destaca nacional e internacionalmente pelo repertório diversificado e evoluções coreográficas, participando de importantes eventos sociais, cívicos e religiosos em toda a região. Suas apresentações foram registradas por diversos canais de televisão e já marcaram presença na maior Festa de Peão de Boiadeiro da América Latina, em Barretos, levando com orgulho a representatividade do município de Itapeva.',
    'Com raízes na antiga Fanfarra da Escola Estadual Zulmira de Oliveira (1983) e na Banda Marcial Metodista de Itapeva (1998), hoje extintas, a Banda Marcial Paineira Bicentenária dá continuidade à tradição artística e musical no interior do estado de São Paulo.',
    'O maestro fundador, Prof. Jair Rosa Góes, conduziu a banda desde a sua criação até 2020, quando, com seu falecimento, a missão de reger a corporação foi confiada ao Maestro Alex Alves Siqueira, que mantém o legado de excelência e formação artística e musical da banda.',
    'Em 20 de setembro de 2025, no desfile dos 256 anos do município, a banda foi reativada de forma surpreendente e histórica para a população, que aguardava ansiosamente o desfile há cinco anos, acessando memórias afetivas e despertando emoções profundas, recebendo calorosos aplausos e manifestações de orgulho e entusiasmo da comunidade.',
    'Pelo seu histórico tradicional e relevante contribuição à cultura local, a banda foi oficialmente reconhecida como utilidade pública pela Lei nº 156/2019, reforçando sua importância social, educativa e cultural.',
    'Com sólido compromisso com a formação musical de jovens e adultos e a valorização da arte marcial, a Banda Marcial Paineira Bicentenária se mantém como referência de qualidade, disciplina e tradição cultural, consolidando-se como um verdadeiro patrimônio musical e educativo da cidade de Itapeva.'
  ];

  const stats = [
    {
      icon: Calendar,
      title: 'Fundação',
      value: '2010',
      description: 'Inaugurada em 21 de dezembro'
    },
    {
      icon: Leaf,
      title: 'Tradição',
      value: '1983',
      description: 'Raízes na Fanfarra Zulmira e na Banda Metodista'
    },
    {
      icon: Landmark,
      title: 'Utilidade Pública',
      value: 'Lei 156',
      description: 'Reconhecimento oficial em 2019'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block mb-4">
              <span className="text-crimson font-semibold tracking-wider text-sm uppercase">Nossa História</span>
              <div className="h-0.5 w-16 bg-gold mt-2" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Banda Marcial Paineira
              <span className="text-crimson block">Bicentenária de Itapeva</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nascida em 2010, a Banda Marcial Paineira Bicentenária de Itapeva une educação musical,
                cultura, disciplina e preservação da memória local em torno da Paineira Bicentenária,
                símbolo tombado do município.
              </p>
              <p>
                A corporação carrega raízes da Fanfarra da Escola Estadual Zulmira de Oliveira e da
                Banda Marcial Metodista de Itapeva, mantendo viva uma tradição artística importante
                para o interior paulista.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-crimson-dark focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
              aria-haspopup="dialog"
            >
              <BookOpen className="h-5 w-5" />
              Conheça a história
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src="https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/651_366/4ddfc78d30be6c754a6dfc887a378079.jpeg"
                alt="Integrantes da Banda Marcial Paineira Bicentenária de Itapeva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-crimson to-crimson-dark rounded-2xl border-4 border-gold -z-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gold/20 hover:border-gold transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-crimson to-crimson-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-sm text-gray-500 font-medium mb-1">{stat.title}</div>
              <div className="font-display text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="band-history-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 md:px-8">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-crimson">Histórico</span>
                <h3 id="band-history-title" className="mt-1 font-display text-3xl font-bold text-gray-900">
                  Banda Marcial Paineira Bicentenária de Itapeva
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-crimson hover:text-crimson focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                aria-label="Fechar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 md:px-8">
              <div className="space-y-4 text-left text-gray-700 leading-relaxed">
                {history.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
