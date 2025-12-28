import { useState } from 'react';
import { Calendar, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [activeYear, setActiveYear] = useState('2025');

  const albums = [
    {
      year: '2025',
      title: 'Desfile de Natal 2024',
      date: 'Dezembro 2024',
      images: 45,
      cover: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2025',
      title: 'Apresentação Cívica - 7 de Setembro',
      date: 'Setembro 2024',
      images: 62,
      cover: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2025',
      title: 'Festival Regional de Bandas',
      date: 'Agosto 2024',
      images: 38,
      cover: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Concerto de Aniversário',
      date: 'Maio 2024',
      images: 55,
      cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Desfile Cívico Municipal',
      date: 'Novembro 2023',
      images: 72,
      cover: 'https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: '2024',
      title: 'Apresentação Escolar',
      date: 'Outubro 2023',
      images: 41,
      cover: 'https://images.pexels.com/photos/1863440/pexels-photo-1863440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: 'historico',
      title: 'Década de 1990',
      date: 'Arquivo Histórico',
      images: 28,
      cover: 'https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: 'historico',
      title: 'Década de 1980',
      date: 'Arquivo Histórico',
      images: 19,
      cover: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      year: 'historico',
      title: 'Década de 1970',
      date: 'Arquivo Histórico',
      images: 15,
      cover: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const years = [
    { id: '2025', label: '2025' },
    { id: '2024', label: '2024' },
    { id: 'historico', label: 'Acervo Histórico' }
  ];

  const filteredAlbums = albums.filter(album => album.year === activeYear);

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">Momentos Memoráveis</span>
            <div className="h-0.5 w-16 bg-crimson mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Galeria de Apresentações
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Reviva os momentos mais marcantes de nossas apresentações através dos anos
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {years.map((year) => (
            <button
              key={year.id}
              onClick={() => setActiveYear(year.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                activeYear === year.id
                  ? 'bg-gradient-to-r from-crimson to-crimson-dark text-white border-gold shadow-lg shadow-gold/30'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-gold/50 hover:text-white'
              }`}
            >
              {year.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album, index) => (
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
                  <span>{album.images} fotos</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlbums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/50 text-lg">Nenhum álbum disponível para este período</p>
          </div>
        )}
      </div>
    </section>
  );
}
