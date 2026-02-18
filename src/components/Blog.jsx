import './Blog.css'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Leveraging Data Analytics for Business Growth',
      excerpt: 'Explore how businesses can use data-driven decision making to identify growth opportunities and improve operations.',
      date: 'Feb 15, 2024',
      category: 'Analytics'
    },
    {
      id: 2,
      title: 'The Role of Business Analysis in Digital Transformation',
      excerpt: 'Understanding how business analysts bridge the gap between technology and business objectives during transformation initiatives.',
      date: 'Feb 10, 2024',
      category: 'Strategy'
    },
    {
      id: 3,
      title: 'Essential Skills for Modern Business Analysts',
      excerpt: 'A comprehensive guide to the technical and soft skills required to excel in the business analysis field today.',
      date: 'Feb 5, 2024',
      category: 'Career'
    }
  ]

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        <div className="blog-grid">
          {articles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{article.category}</span>
                <span className="blog-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href="#" className="read-more">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
