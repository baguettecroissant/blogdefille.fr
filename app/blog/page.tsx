import { Metadata } from 'next';
import { getPaginatedArticles } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import Pagination from '@/components/Pagination';

export const metadata: Metadata = {
    title: 'Le Blog — Tous nos articles',
    description: 'Retrouvez tous les articles de Blog de fille classés par ordre chronologique. Mode, beauté, couture, bien-être et bijoux.',
    alternates: { canonical: 'https://blogdefille.fr/blog' },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const currentPage = typeof params.page === 'string' ? parseInt(params.page, 10) : 1;
    const { articles, totalPages, totalArticles } = getPaginatedArticles(currentPage, 15);

    return (
        <main>
            <section className="category-header">
                <h1>Le Blog</h1>
                <p>Découvrez nos <strong>{totalArticles} articles</strong>, du plus récent au plus ancien.</p>
            </section>

            <section className="category-content" style={{ maxWidth: 'var(--max-w)', margin: '0 auto', paddingBottom: '2rem' }}>
                {articles.length > 0 ? (
                    <>
                        <div className="bento-grid">
                            {articles.map((article, index) => {
                                let bentoClass = 'bento-item';
                                // We can make the first 2-3 items on the first page slightly larger
                                if (currentPage === 1 && index === 0) bentoClass = 'bento-item bento-featured';
                                else if (currentPage === 1 && (index === 1 || index === 2)) bentoClass = 'bento-item bento-tall';
                                else bentoClass = 'bento-item bento-wide'; // Default styling for list

                                return (
                                    <div key={article.id} className={bentoClass}>
                                        <ArticleCard article={article} />
                                    </div>
                                );
                            })}
                        </div>
                        
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            baseUrl="/blog"
                        />
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 1.5rem', color: 'var(--gray-400)' }}>
                        <p>Aucun article n'a été trouvé sur cette page.</p>
                    </div>
                )}
            </section>

            <Newsletter />
        </main>
    );
}
