import BlogArticlePage, { BlogArticle } from './BlogArticlePage';

const article: BlogArticle = {
  title: 'How to Choose the Right Country to Study Abroad',
  date: 'AUGUST 20, 2025',
  image: 'https://worldpassport.in/wp-content/uploads/2025/08/32630-740x474.jpg',
  intro:
    'With so many options available, selecting the right study destination can feel overwhelming. Here’s a practical guide to help you make the best choice.',
  sections: [
    {
      title: 'Academic Goals',
      text: 'Consider which country offers strong programs in your field of interest.',
    },
    {
      title: 'Budget and Cost of Living',
      text: 'Evaluate tuition fees, accommodation, food, and daily expenses before deciding.',
    },
    {
      title: 'Language and Communication',
      text: 'Choose a destination where the teaching language and environment align with your comfort.',
    },
    {
      title: 'Lifestyle and Culture',
      text: 'Cultural adaptability plays a big role in your study experience and overall happiness.',
    },
    {
      title: 'Career Pathways',
      text: 'Look for countries that offer post-study work opportunities and pathways to long-term careers.',
    },
  ],
  conclusion:
    'The right country depends on personal goals, finances, and career plans. World Passport helps students identify the best destination for a successful global journey.',
};

export default function ChooseCountryArticlePage() {
  return <BlogArticlePage article={article} />;
}