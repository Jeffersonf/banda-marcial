import { ExternalLink, Newspaper, X } from 'lucide-react';
import { useState } from 'react';

export default function Media() {
  const articles = [
    {
      source: 'Jornal Ita News',
      date: '26 de setembro de 2025',
      title: 'História e emoção marcam a volta da Banda Marcial Paineira',
      description: 'Registro jornalístico sobre o retorno da banda no desfile dos 256 anos de Itapeva.',
      fullText: [
        'A matéria registra a reativação histórica da Banda Marcial Paineira Bicentenária de Itapeva no desfile dos 256 anos do município, realizado em 20 de setembro de 2025.',
        'Depois de cinco anos de espera pelo desfile, a apresentação despertou memórias afetivas na comunidade e recebeu calorosos aplausos, manifestações de orgulho e entusiasmo da população.',
        'O retorno também reforçou a importância da corporação para a cultura local, com destaque para sua trajetória, sua formação musical e a regência do Maestro Alex Alves Siqueira.'
      ],
      url: 'https://www.jornalitanews.com.br/banda-marcial-paineira/'
    },
    {
      source: 'Prefeitura Municipal de Itapeva',
      date: '9 de outubro de 2024',
      title: 'Homenagem ao Maestro Jair Rosa Góes é realizada em Itapeva',
      description: 'Registro institucional sobre a homenagem ao maestro fundador da Banda Marcial Paineira Bicentenária.',
      fullText: [
        'A publicação registra a homenagem ao Prof. Jair Rosa Góes, maestro fundador que conduziu a Banda Marcial Paineira Bicentenária de Itapeva desde sua criação até 2020.',
        'A memória do maestro permanece ligada ao legado artístico, pedagógico e social da corporação, que segue como referência de disciplina, formação musical e tradição cultural.',
        'A homenagem também reforça a relevância da banda para a história recente de Itapeva e para as gerações formadas pela arte marcial.'
      ],
      url: 'https://www.itapeva.sp.gov.br/noticia/2634/homenagem-ao-maestro-jair-rosa-goes-e-realizada-em-itapeva/'
    },
    {
      source: 'Diocese de Itapeva',
      date: 'Novembro de 2025',
      title: 'Exposição de Cláudio Pastro segue aberta ao público em Itapeva',
      description: 'Notícia institucional que cita a participação da banda em evento cultural e religioso.',
      fullText: [
        'A notícia registra a presença da Banda Marcial Paineira Bicentenária de Itapeva em um evento cultural e religioso da Diocese de Itapeva.',
        'A participação da corporação, conduzida pelo Diácono Alex Alves Siqueira, evidencia a relação da banda com a vida comunitária, cultural e religiosa do município.',
        'Esse tipo de registro fortalece a memória pública da banda e amplia sua presença em espaços de cultura, fé e educação.'
      ],
      url: 'https://dioceseitapeva.com.br/exposicao-de-claudio-pastro-segue-aberta-ao-publico-em-itapeva/'
    },
    {
      source: 'Acervo da Banda',
      date: '20 de setembro de 2025',
      title: 'Banda Marcial Paineira Bicentenária retorna no desfile de Itapeva',
      description: 'Resumo histórico da reativação da banda durante o aniversário de 256 anos do município.',
      fullText: [
        'Em 20 de setembro de 2025, no desfile dos 256 anos do município, a Banda Marcial Paineira Bicentenária de Itapeva foi reativada de forma surpreendente e histórica para a população.',
        'A apresentação trouxe de volta uma tradição aguardada havia cinco anos, acessando memórias afetivas e despertando emoções profundas nos moradores de Itapeva.',
        'O retorno recebeu aplausos e manifestações de orgulho, reafirmando o papel da banda como patrimônio musical e educativo da cidade.'
      ]
    }
  ];
  const [activeArticle, setActiveArticle] = useState<null | typeof articles[number]>(null);

  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-crimson font-semibold tracking-wider text-sm uppercase">Notícias</span>
            <div className="h-0.5 w-16 bg-gold mt-2 mx-auto" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notícias da Banda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Publicações, registros e acontecimentos sobre a Banda Marcial Paineira Bicentenária de Itapeva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={`${article.source}-${article.title}`}
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
              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-crimson px-5 py-2.5 text-sm font-semibold text-crimson transition-colors hover:bg-crimson hover:text-white focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
              >
                Ler notícia
                <ExternalLink className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 md:px-8">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-crimson">
                  {activeArticle.source}
                </span>
                <h3 id="news-title" className="mt-1 font-display text-3xl font-bold text-gray-900">
                  {activeArticle.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{activeArticle.date}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-crimson hover:text-crimson focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                aria-label="Fechar notícia"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6 md:px-8">
              <div className="space-y-4 text-left text-gray-700 leading-relaxed">
                {activeArticle.fullText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {'url' in activeArticle && activeArticle.url && (
                <a
                  href={activeArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 font-semibold text-white transition-colors hover:bg-crimson-dark focus:outline-none focus:ring-2 focus:ring-crimson focus:ring-offset-2"
                >
                  Abrir publicação original
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
