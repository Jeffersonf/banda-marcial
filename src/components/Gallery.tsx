import { Calendar, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const albums = [
    {
      title: 'Retorno da Banda',
      date: 'Desfile dos 256 anos de Itapeva',
      images: 'Registro histórico',
      cover: 'https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/651_366/4ddfc78d30be6c754a6dfc887a378079.jpeg'
    },
    {
      title: 'Homenagem ao Maestro Jair',
      date: 'Exposição Jair, Eterna Música',
      images: 'Acervo da Prefeitura',
      cover: 'https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/280_219/0a3b2a66c32c28c20ee8588f4f40e111.webp'
    },
    {
      title: 'Tradição Metodista',
      date: 'Raízes da Banda Marcial Paineira',
      images: 'Memória cultural',
      cover: 'https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/280_219/f85f6ddb5f140297213739145da242c4.webp'
    },
    {
      title: 'Formação Musical',
      date: 'Educação, disciplina e cultura',
      images: 'Registro institucional',
      cover: 'https://www.itapeva.sp.gov.br/admin/globalarq/noticia/noticia/280_219/2c7dadd6364e3510b4ae187c7dd7a754.webp'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">Momentos Memoráveis</span>
            <div className="h-0.5 w-16 bg-crimson mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Registros da Banda Marcial Paineira Bicentenária de Itapeva e de sua memória musical
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-gold/20 hover:border-gold transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-2 text-gold text-sm mb-2">
                  <Calendar size={16} />
                  <span>{album.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{album.title}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <ImageIcon size={16} />
                  <span>{album.images}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
