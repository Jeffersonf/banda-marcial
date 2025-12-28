import { Music, Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
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
              Há mais de 200 anos levando música e tradição para Itapeva e toda região.
              Entre em contato conosco para contratar nossa banda para seu evento.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Local de Ensaio</div>
                  <div className="text-white/70 text-sm">
                    Rua da Música, 200 - Centro<br />
                    Itapeva - SP, 18400-000
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-white/70 text-sm">(15) 3524-0000</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-white/70 text-sm">contato@paineira.org.br</div>
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
              Preencha o formulário abaixo e nossa equipe retornará em breve
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-colors text-white"
                  placeholder="seu@email.com"
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
            <p className="mt-2">Fundada em 1823 - 200 anos de tradição musical em Itapeva, SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
