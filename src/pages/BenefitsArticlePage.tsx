import BlogArticlePage, { BlogArticle } from './BlogArticlePage';

const article: BlogArticle = {
  title: 'Top 5 Benefits of Studying Abroad',
  date: 'AUGUST 20, 2025',
  image: 'https://worldpassport.in/wp-content/uploads/2025/08/Top-5-Benefits-of-Studying-Abroad-740x474.jpg',
  intro:
    'Studying abroad is more than just a degree—it’s a life-changing journey. It builds knowledge, skills, and confidence, while opening doors to international careers. Let’s explore the top five benefits of studying abroad.',
  sections: [
    {
      title: 'Quality Education',
      text: 'International universities provide advanced programs, world-class faculty, and globally recognized qualifications that enhance career prospects everywhere.',
    },
    {
      title: 'Cultural Exposure',
      text: 'Living abroad introduces students to diverse cultures, boosting adaptability, communication skills, and global awareness.',
    },
    {
      title: 'Career Opportunities',
      text: 'Employers prefer globally educated graduates. Many countries also offer part-time jobs and post-study work opportunities.',
    },
    {
      title: 'Personal Growth',
      text: 'Studying abroad strengthens independence, confidence, and problem-solving skills as students learn to manage life in a new environment.',
    },
    {
      title: 'Global Network',
      text: 'Students build international friendships, academic connections, and professional networks that can support their future careers.',
    },
  ],
  conclusion:
    'Studying abroad opens doors to quality education, global careers, and lifelong experiences. With the right guidance, students can make this journey smooth, rewarding, and successful.',
};

export default function BenefitsArticlePage() {
  return <BlogArticlePage article={article} />;
}