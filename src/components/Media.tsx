import { ExternalLink, Newspaper } from 'lucide-react';

export default function Media() {
  const articles = [
    {
      source: 'Jornal Ita News',
      date: '26 de setembro de 2025',
      title: 'História e emoção marcam a volta da Banda Marcial Paineira',
      description: 'Matéria sobre o retorno da banda no desfile dos 256 anos de Itapeva, sua trajetória e a regência de Alex Alves Siqueira.',
      url: 'https://www.jornalitanews.com.br/banda-marcial-paineira/'
    },
    {
      source: 'Prefeitura Municipal de Itapeva',
      date: '9 de outubro de 2024',
      title: 'Homenagem ao Maestro Jair Rosa Góes é realizada em Itapeva',
      description: 'Registro da exposição em homenagem ao maestro fundador e da participação histórica da Banda Marcial Paineira Bicentenária.',
      url: 'https://www.itapeva.sp.gov.br/noticia/2634/homenagem-ao-maestro-jair-rosa-goes-e-realizada-em-itapeva/'
    },
    {
      source: 'Diocese de Itapeva',
      date: 'Novembro de 2025',
      title: 'Exposição de Cláudio Pastro segue aberta ao público em Itapeva',
      description: 'Notícia institucional que registra a participação da banda, conduzida pelo Diácono Alex Alves, em evento cultural e religioso.',
      url: 'https://dioceseitapeva.com.br/exposicao-de-claudio-pastro-segue-aberta-ao-publico-em-itapeva/'
    }
  ];

  return (
    <section id="midia" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-crimson font-semibold tracking-wider text-sm uppercase">Na Mídia</span>
            <div className="h-0.5 w-16 bg-gold mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Matérias e Registros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Publicações que registram a história, o retorno e a presença cultural da Banda Marcial Paineira Bicentenária.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.url}
              className="flex h-full flex-col rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-dark">
                <Newspaper className="h-7 w-7 text-gold" />
              </div>
              <div className="mb-2 text-sm font-semibold text-crimson">{article.source}</div>
              <div className="mb-4 text-sm text-gray-500">{article.date}</div>
              <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-gray-900">
                {article.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-crimson px-5 py-2.5 text-sm font-semibold text-crimson transition-colors hover:bg-crimson hover:text-white focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
              >
                Ler matéria
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
