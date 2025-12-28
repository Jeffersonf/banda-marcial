import { Calendar, Users, MapPin } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Calendar,
      title: 'Fundação',
      value: '1823',
      description: '200 anos de história'
    },
    {
      icon: Users,
      title: 'Membros',
      value: '120+',
      description: 'Músicos e bailarinos'
    },
    {
      icon: MapPin,
      title: 'Cidade Sede',
      value: 'Itapeva',
      description: 'São Paulo, Brasil'
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
              Dois Séculos de
              <span className="text-crimson block">Tradição Musical</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A Banda Marcial Paineira Bicentenária é um símbolo vivo da cultura e tradição musical
                de Itapeva. Fundada em 1823, nossa banda atravessa gerações mantendo viva a chama da
                música marcial brasileira.
              </p>
              <p>
                Com mais de 200 anos de história, somos reconhecidos pela excelência em apresentações
                cívicas, desfiles e eventos culturais. Nossa formação inclui músicos talentosos, corpo
                coreográfico especializado e uma direção artística comprometida com a perfeição.
              </p>
              <p>
                Preservamos as tradições da música marcial ao mesmo tempo que incorporamos arranjos
                contemporâneos, criando performances que emocionam públicos de todas as idades e
                representam com orgulho a cidade de Itapeva em todo o estado de São Paulo.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7520385/pexels-photo-7520385.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Banda Marcial em formação"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-crimson to-crimson-dark rounded-2xl border-4 border-gold -z-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
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
    </section>
  );
}
