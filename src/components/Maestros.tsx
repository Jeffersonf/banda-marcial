import { BookOpen, Drum, Music2, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

export default function Maestros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const alexHistory = [
    'Alex Alves Siqueira nasceu em Itapeva (SP), no dia 14 de junho de 1996, filho de Maria Aparecida Alves e Alécio Quevedo Siqueira. Tem dois irmãos por parte materna e uma irmã por parte paterna. Possui uma trajetória marcada pelo compromisso com a educação, o serviço público, a fé e a cultura musical, destacando-se como professor, maestro e religioso.',
    'É graduado em Pedagogia (Licenciatura) pela Faculdade de Ciências Sociais e Agrárias de Itapeva - FAIT (2017), em Filosofia (Licenciatura) pela Universidade de Sorocaba - UNISO (2020) e em Teologia (Bacharelado) pelo Instituto Superior de Teologia São João Paulo II da Arquidiocese de Sorocaba (2024). Possui ainda especializações em Docência do Ensino Superior com Ênfase em Políticas Educacionais, Psicopedagogia Institucional e Clínica, e Técnicas de Comunicação e Oratória.',
    'Na área musical, formou-se em Piano Erudito pela Escola Municipal de Formação Musical Prof. Hugo Bellezia (2017) e estudou Regência de Banda Sinfônica no Conservatório Dramático e Musical "Dr. Carlos de Campos" de Tatuí (2016-2017). Atuou como professor de música em Itapeva, à frente do Coral da Escola Estadual Profa. Nicota Soares, da Fanfarra da Escola Municipal Prof. Hélio de Morais e do Coral Infantil da Escola Municipal Profa. Hilda Frida Gehring.',
    'Foi pianista do Coral Municipal de Itapeva, sob regência do maestro Professor Elcir Melo, além de acompanhar apresentações teatrais e musicais, como o Teatro da Paixão de Cristo e musicais de Natal com o Ponto de Cultura Jovem. Também participou como tecladista de diversos corais e grupos de canto da Catedral, paróquias e comunidades.',
    'Trabalhou no Recanto da Criança e do Adolescente da Paróquia Santana e, desde 2011, integra a tradicional Banda Marcial Paineira Bicentenária de Itapeva. Em 2020, com o falecimento do saudoso Maestro Prof. Jair Rosa Góes (in memoriam), recebeu a missão de conduzir a Banda Marcial Paineira Bicentenária de Itapeva, dando continuidade ao legado artístico, pedagógico e social construído ao longo de décadas.',
    'Como seminarista, dedicou-se especialmente à Música Litúrgica, ministrando cursos de canto pastoral e liturgia em diversas paróquias da região e fora da Diocese, inclusive em parceria com a Editora Paulus (Sorocaba). Atualmente, é Diácono católico da Diocese de Itapeva, maestro fundador do Coral das Paróquias de Itapeva, maestro da Banda Marcial Paineira Bicentenária de Itapeva e professor universitário no curso de Pedagogia da FAIT.'
  ];

  const maestros = [
    {
      name: 'Alex Alves Siqueira',
      role: 'Atual Maestro',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professor, maestro e religioso, conduz a Banda Marcial Paineira Bicentenária de Itapeva desde 2020.'
    },
    {
      name: 'Corpo Musical',
      role: 'Regente Assistente',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Equipe dedicada à formação musical, aos ensaios e às apresentações da banda.'
    },
    {
      name: 'Percussão',
      role: 'Mestre de Bateria',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Seção rítmica responsável pela energia, precisão e presença marcial nas apresentações.'
    }
  ];

  const sections = [
    {
      icon: Music2,
      name: 'Metais',
      description: 'Trompetes, trombones, tubas e saxofones',
      color: 'from-crimson to-crimson-dark'
    },
    {
      icon: Drum,
      name: 'Percussão',
      description: 'Caixas, bumbos, pratos e instrumentos auxiliares',
      color: 'from-gold-dark to-gold'
    },
    {
      icon: Sparkles,
      name: 'Corpo Coreográfico',
      description: 'Balizas, porta-bandeiras e grupo de dança',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="maestros" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-crimson font-semibold tracking-wider text-sm uppercase">Liderança Musical</span>
            <div className="h-0.5 w-16 bg-gold mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Maestros e Corpo Musical
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa equipe de profissionais dedicados guia a banda rumo à excelência artística
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {maestros.map((maestro, index) => (
            <div
              key={maestro.name}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-gold transition-all hover:shadow-xl group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={maestro.image}
                  alt={maestro.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">{maestro.name}</h3>
                <div className="text-crimson font-semibold mb-3">{maestro.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{maestro.bio}</p>
                {index === 0 && (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                    aria-haspopup="dialog"
                  >
                    <BookOpen className="h-4 w-4" />
                    Conheça a história
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-gold/30">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Naipes da Banda
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/50 transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-2">{section.name}</h4>
                <p className="text-white/70">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="alex-history-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 md:px-8">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-crimson">Atual Maestro</span>
                <h3 id="alex-history-title" className="mt-1 font-display text-3xl font-bold text-gray-900">
                  Alex Alves Siqueira
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
                {alexHistory.map((paragraph, index) => (
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
