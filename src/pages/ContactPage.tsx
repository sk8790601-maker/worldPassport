import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-white min-h-screen pt-20">
      <ContactSection />
    </main>
  );
}