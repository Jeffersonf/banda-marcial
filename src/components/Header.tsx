import { Menu, Music, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'A Banda', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Vídeos', href: '#videos' },
    { name: 'Mídia', href: '#midia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-crimson to-crimson-dark rounded-full flex items-center justify-center border-2 border-gold group-hover:scale-110 transition-transform">
              <Music className="w-6 h-6 text-gold" />
            </div>
            <div className="hidden md:block">
              <div className="font-display text-gold text-xl font-bold">Paineira</div>
              <div className="text-white/60 text-xs tracking-wider">BICENTENÁRIA</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden lg:block px-6 py-3 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold rounded-md border-2 border-gold hover:shadow-lg hover:shadow-gold/30 transition-all"
          >
            Contrate a Banda
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gold p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-6 space-y-4 border-t border-gold/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/80 hover:text-gold transition-colors font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-3 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold rounded-md border-2 border-gold text-center mt-4"
            >
              Contrate a Banda
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
