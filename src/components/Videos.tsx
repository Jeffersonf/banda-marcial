import { Play } from 'lucide-react';

export default function Videos() {
  const featuredVideo = {
    title: 'Desfile de Natal 2024 - Apresentação Completa',
    duration: '12:45',
    views: '15.2K',
    thumbnail: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    embedId: 'dQw4w9WgXcQ'
  };

  const shortVideos = [
    {
      title: 'Ensaio Geral - Formação de Abertura',
      duration: '0:45',
      views: '8.5K',
      thumbnail: 'https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Solo de Trompete - Maestro Roberto',
      duration: '1:20',
      views: '12.3K',
      thumbnail: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Corpo Coreográfico em Ação',
      duration: '0:58',
      views: '9.8K',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-crimson font-semibold tracking-wider text-sm uppercase">Em Movimento</span>
            <div className="h-0.5 w-16 bg-gold mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vídeos e Apresentações
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Assista nossas performances e sinta a energia de cada apresentação
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative group rounded-2xl overflow-hidden border-4 border-gold shadow-2xl">
              <div className="aspect-video bg-gray-900">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <button className="w-20 h-20 bg-gradient-to-br from-crimson to-crimson-dark rounded-full flex items-center justify-center border-4 border-gold hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {featuredVideo.title}
                </h3>
                <div className="flex gap-4 text-white/80 text-sm">
                  <span>{featuredVideo.duration}</span>
                  <span>•</span>
                  <span>{featuredVideo.views} visualizações</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {shortVideos.map((video, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-gold transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                <div className="aspect-video bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="w-12 h-12 bg-crimson/90 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <h4 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex gap-2 text-white/70 text-xs">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold rounded-lg border-2 border-gold hover:shadow-xl hover:shadow-gold/30 transition-all"
          >
            <Play size={20} />
            Ver Todos os Vídeos no YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
