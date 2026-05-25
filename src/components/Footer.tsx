import { Clock, Music, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', message: '' });
  };

  return (
    <footer id="contato" className="bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-crimson to-crimson-dark rounded-full flex items-center justify-center border-2 border-gold">
                <Music className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="font-display text-gold text-2xl font-bold">Paineira</div>
                <div className="text-white/60 text-xs tracking-wider">BICENTENÁRIA</div>
              </div>
            </div>

            <p className="text-white/70 mb-8 leading-relaxed">
              A Banda Marcial Paineira Bicentenária de Itapeva promove educação musical,
              cultura, disciplina e preservação da memória local.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Local de Ensaio</div>
                  <div className="text-white/70 text-sm">
                    Praça de Eventos<br />
                    Domingos, das 17h às 19h
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Sede de Ensaio</div>
                  <div className="text-white/70 text-sm">
                    Secretaria de Esportes<br />
                    Avenida Paulina de Moraes, Centro
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Sede</div>
                  <div className="text-white/70 text-sm">
                    Rua Rivadávia Marques Júnior, nº 34
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <a href="tel:+5515997228777" className="text-white/70 text-sm hover:text-gold">
                    (15) 99722-8777
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4">Siga-nos nas Redes Sociais</div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-crimson hover:to-crimson-dark hover:border-gold transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-crimson hover:to-crimson-dark hover:border-gold transition-all"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold mb-2">Entre em Contato</h3>
            <p className="text-white/70 mb-6">
              Envie uma mensagem e nossa equipe retornará pelo telefone informado
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white resize-none"
                  placeholder="Conte-nos sobre seu evento..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold rounded-lg border-2 border-gold hover:shadow-xl hover:shadow-gold/30 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Banda Marcial Paineira Bicentenária. Todos os direitos reservados.</p>
            <p className="mt-2">Fundada em 2010, com raízes na Fanfarra Zulmira e na Banda Marcial Metodista de Itapeva.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
