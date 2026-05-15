import BlogArticlePage, { BlogArticle } from './BlogArticlePage';

const article: BlogArticle = {
  title: 'Scholarships Every International Student Should Know About',
  date: 'AUGUST 20, 2025',
  image: 'https://worldpassport.in/wp-content/uploads/2025/08/2148499023-740x474.jpg',
  intro:
    'One of the biggest concerns for students is funding their education. Thankfully, many scholarships make studying abroad more accessible. Here are scholarships you should know about.',
  sections: [
    {
      title: 'Government Scholarships',
      text: 'Programs offered by countries like the UK, Canada, and South Korea support international students with tuition and living expenses.',
    },
    {
      title: 'University Scholarships',
      text: 'Many universities provide merit-based or need-based scholarships to attract bright international students.',
    },
    {
      title: 'Program-Specific Scholarships',
      text: 'Some scholarships are designed for particular courses such as engineering, medicine, or business.',
    },
    {
      title: 'Research Grants',
      text: 'Postgraduate and doctoral students can apply for grants supporting academic research and innovation.',
    },
    {
      title: 'Financial Aid Guidance',
      text: 'At World Passport, we help students explore scholarship options and prepare applications effectively.',
    },
  ],
  conclusion:
    'Scholarships make global education achievable. With expert guidance, students can reduce costs and focus on achieving academic excellence abroad.',
};

export default function ScholarshipsArticlePage() {
  return <BlogArticlePage article={article} />;
}