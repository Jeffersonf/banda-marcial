import { Music2, Drum, Sparkles } from 'lucide-react';

export default function Maestros() {
  const maestros = [
    {
      name: 'Maestro Roberto Silva',
      role: 'Diretor Musical',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '35 anos de experiência em bandas marciais, especialista em arranjos sinfônicos.'
    },
    {
      name: 'Maestrina Ana Paula Costa',
      role: 'Regente Assistente',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Formada em Regência pela UNESP, especialista em corpo coreográfico.'
    },
    {
      name: 'Carlos Mendes',
      role: 'Mestre de Bateria',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Percussionista premiado, responsável pela seção rítmica da banda.'
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
              key={index}
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
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-gold/30">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Naipes da Banda
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
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
    </section>
  );
}
