import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundPosition: 'center'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-6 tracking-tight">
          Banda Marcial
          <span className="block text-white mt-2">Paineira Bicentenária</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-12">
          Tradição e excelência musical em Itapeva
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#sobre"
            className="px-8 py-4 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold rounded-md border-2 border-gold hover:shadow-xl hover:shadow-gold/40 transition-all transform hover:scale-105"
          >
            Conheça Nossa História
          </a>
          <a
            href="#galeria"
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-md border-2 border-white/30 hover:border-gold hover:bg-white/5 transition-all"
          >
            Ver Apresentações
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
}
