import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiEnabled, apiRequest } from '../lib/api';

// Types
export interface Country {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  services: string[];
  featured: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  address?: string;
  pincode?: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogComment {
  id: string;
  articlePath: string;
  articleTitle: string;
  name: string;
  email: string;
  text: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  replyText?: string;
  repliedAt?: string;
}

interface DataContextType {
  countries: Country[];
  programs: Program[];
  services: Service[];
  partners: Partner[];
  contacts: ContactMessage[];
  testimonials: Testimonial[];
  comments: BlogComment[];
  // CRUD Operations
  addCountry: (country: Omit<Country, 'id'>) => void;
  updateCountry: (id: string, country: Partial<Country>) => void;
  deleteCountry: (id: string) => void;
  addProgram: (program: Omit<Program, 'id'>) => void;
  updateProgram: (id: string, program: Partial<Program>) => void;
  deleteProgram: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addPartner: (partner: Omit<Partner, 'id'>) => void;
  updatePartner: (id: string, partner: Partial<Partner>) => void;
  deletePartner: (id: string) => void;
  addContact: (contact: Omit<ContactMessage, 'id'>) => void;
  updateContact: (id: string, contact: Partial<ContactMessage>) => void;
  deleteContact: (id: string) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addComment: (comment: Omit<BlogComment, 'id' | 'createdAt'>) => void;
  updateComment: (id: string, comment: Partial<BlogComment>) => void;
  deleteComment: (id: string) => void;
}

const defaultCountries: Country[] = [
  {
    id: '1',
    name: 'New Zealand',
    slug: 'new-zealand',
    image: 'https://worldpassport.in/wp-content/uploads/2025/12/87154227_gettyimages-492306228-420x420.jpg',
    description: 'Experience world-class education, attractive scholarships, and dynamic cultural life in New Zealand. We\'re here to make your study and career path effortless.',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development', 'Scholarship & Financial Assistance', 'Cultural Orientation & Accommodation Support'],
    featured: true
  },
  {
    id: '2',
    name: 'Mauritius',
    slug: 'mauritius',
    image: 'https://worldpassport.in/wp-content/uploads/2025/12/2579decb5aaf63b45b854345da18f247-420x420.jpg',
    description: 'Mauritius offers world-class universities, attractive scholarships, and rich cultural exposure. We ensure your study and career journey is smooth and hassle-free.',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development', 'Scholarship & Financial Assistance', 'Cultural Orientation & Accommodation Support'],
    featured: true
  },
  {
    id: '3',
    name: 'Malta',
    slug: 'malta',
    image: 'https://worldpassport.in/wp-content/uploads/2023/10/malta-flag.jpg',
    description: 'Discover affordable, globally recognized European education with career pathways across the EU. We ensure smooth admission, visa, and settlement.',
    services: ['Student Visa & Admission Support', 'Visitor Visa Processing', 'Work Visa & Internship Guidance', 'Business Visa Applications', 'Post-Arrival & Settlement Assistance', 'Scholarship & Financial Guidance'],
    featured: true
  },
  {
    id: '4',
    name: 'Malaysia',
    slug: 'malaysia',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/malaysia-flag.jpg',
    description: 'Malaysia provides affordable, high-quality education in a multicultural environment. We help you build a cost-effective and globally recognized career.',
    services: ['Student Visa & Admission Assistance', 'Visitor Visa Guidance', 'Scholarship & Financial Assistance', 'Work Visa & Internship Opportunities', 'Business Visa Processing', 'Pre-Departure & Post-Arrival Support'],
    featured: true
  },
  {
    id: '5',
    name: 'Singapore',
    slug: 'singapore',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/sg-final-420x420.webp',
    description: 'Singapore offers world-class universities, scholarships, and vibrant cultural exposure. We make your study and career journey seamless.',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development', 'Scholarship & Financial Assistance', 'Cultural Orientation & Accommodation Support'],
    featured: true
  },
  {
    id: '6',
    name: 'South Korea',
    slug: 'south-korea',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/korea-420x420-1.jpg',
    description: 'South Korea offers cutting-edge technology education, K-culture immersion, and excellent scholarship programs for international students.',
    services: ['Student Visa & University Admission', 'Language Program Guidance', 'Scholarship Assistance', 'Cultural Orientation', 'Accommodation Support', 'Career Placement Services'],
    featured: false
  }
];

const defaultPrograms: Program[] = [
  {
    id: '1',
    title: 'Undergraduate Programs',
    description: 'Start your academic journey with internationally recognized bachelor\'s degrees designed to build strong foundations and prepare you for global careers.',
    icon: 'GraduationCap',
    category: 'undergraduate'
  },
  {
    id: '2',
    title: 'Postgraduate Programs',
    description: 'Advance your knowledge and skills through specialized master\'s degrees that open doors to leadership roles and international opportunities.',
    icon: 'BookOpen',
    category: 'postgraduate'
  },
  {
    id: '3',
    title: 'Doctoral Programs',
    description: 'Pursue groundbreaking research and achieve the highest academic qualifications with internationally recognized doctoral programs.',
    icon: 'Award',
    category: 'doctoral'
  },
  {
    id: '4',
    title: 'Diploma & Foundation Courses',
    description: 'Step into higher education with diploma and foundation programs that prepare you for undergraduate study abroad.',
    icon: 'Certificate',
    category: 'diploma'
  }
];

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Visa Consultation',
    description: 'Expert guidance through the visa application process with personalized support.',
    features: ['Document Review', 'Application Assistance', 'Interview Preparation', 'Status Tracking'],
    icon: 'FileText'
  },
  {
    id: '2',
    title: 'University Admission',
    description: 'Direct partnerships with top universities worldwide for seamless admission.',
    features: ['University Selection', 'Application Filing', 'SOP Writing', 'Admission Follow-up'],
    icon: 'Building2'
  },
  {
    id: '3',
    title: 'IELTS Preparation',
    description: 'Comprehensive IELTS training with experienced trainers and proven methods.',
    features: ['Expert Trainers', 'Mock Tests', 'Study Materials', 'Score Guarantee'],
    icon: 'Languages'
  },
  {
    id: '4',
    title: 'Scholarship Assistance',
    description: 'Help finding and applying for scholarships to make education affordable.',
    features: ['Scholarship Search', 'Application Help', 'Financial Planning', 'Merit Guidance'],
    icon: 'Award'
  }
];

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Thomas',
    role: 'Student - Malta',
    content: 'World Passport guided me through every step of my application. From course selection to visa approval, the process was smooth and stress-free.',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/dummy-profile-pic-300x300-1-79x79.png'
  },
  {
    id: '2',
    name: 'Rahul Menon',
    role: 'Student - New Zealand',
    content: 'I am grateful to World Passport for their transparent guidance. Their counseling helped me choose the right country and course for my career aspirations.',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/dummy-profile-pic-300x300-1-79x79.png'
  },
  {
    id: '3',
    name: 'Meera Joseph',
    role: 'Student - Malaysia',
    content: 'From admission to accommodation, World Passport provided complete support. Their team ensured my transition abroad was comfortable and filled with confidence.',
    image: 'https://worldpassport.in/wp-content/uploads/2025/08/dummy-profile-pic-300x300-1-79x79.png'
  }
];

const defaultPartners: Partner[] = [
  {
    id: '1',
    name: 'Global Education Hub',
    email: 'contact@globaleduhub.com',
    phone: '+91 98765 43210',
    organization: 'Global Education Hub',
    message: 'We would like to partner with World Passport to expand our reach in student recruitment.',
    status: 'approved',
    createdAt: '2025-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'EduConnect International',
    email: 'info@educonnect.in',
    phone: '+91 87654 32109',
    organization: 'EduConnect International',
    message: 'Interested in collaboration for South Korea and Japan student programs.',
    status: 'pending',
    createdAt: '2025-02-20T14:45:00Z'
  }
];

const defaultContacts: ContactMessage[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 12345',
    subject: 'Study in Malta Inquiry',
    message: 'I am interested in studying MBA in Malta. Please provide details about universities and admission process.',
    status: 'read',
    createdAt: '2025-03-10T09:15:00Z'
  },
  {
    id: '2',
    name: 'Arjun Patel',
    email: 'arjun.p@email.com',
    phone: '+91 87654 98765',
    subject: 'Scholarship Information',
    message: 'Could you please share information about available scholarships for Indian students in New Zealand?',
    status: 'unread',
    createdAt: '2025-03-12T11:30:00Z'
  }
];

const defaultComments: BlogComment[] = [
  {
    id: 'c1',
    articlePath: '/blogs/top-5-benefits-of-studying-abroad',
    articleTitle: 'Top 5 Benefits of Studying Abroad',
    name: 'Emily Watson',
    email: 'emily.watson@example.com',
    text: 'This article is extremely helpful! Studying abroad has always been a dream of mine, and reading about the personal growth and global network aspects makes me want to apply even sooner. Thank you for the wonderful breakdown.',
    createdAt: '2026-05-18T14:22:00.000Z',
    status: 'approved'
  },
  {
    id: 'c2',
    articlePath: '/blogs/essential-pre-departure-checklist-for-students-going-abroad',
    articleTitle: 'Essential Pre-Departure Checklist for Students Going Abroad',
    name: 'David Kim',
    email: 'david.kim@example.com',
    text: 'I am leaving for Malta next month, and this checklist is a lifesaver! I almost forgot to double-check my health insurance coverage duration. Super detailed and well-written!',
    createdAt: '2026-05-19T09:15:00.000Z',
    status: 'approved',
    replyText: 'Hi David, glad to hear the checklist helped! Make sure to also keep physical copies of your documents in your carry-on luggage. Safe travels!',
    repliedAt: '2026-05-19T11:30:00.000Z'
  }
];

const DataContext = createContext<DataContextType | undefined>(undefined);

const generateId = () => Math.random().toString(36).substr(2, 9);

type ResourceName = 'countries' | 'programs' | 'services' | 'partners' | 'contacts' | 'testimonials' | 'comments';

function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>(() => getFromStorage('wp_countries', defaultCountries));
  const [programs, setPrograms] = useState<Program[]>(() => getFromStorage('wp_programs', defaultPrograms));
  const [services, setServices] = useState<Service[]>(() => getFromStorage('wp_services', defaultServices));
  const [partners, setPartners] = useState<Partner[]>(() => getFromStorage('wp_partners', defaultPartners));
  const [contacts, setContacts] = useState<ContactMessage[]>(() => getFromStorage('wp_contacts', defaultContacts));
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => getFromStorage('wp_testimonials', defaultTestimonials));
  const [comments, setComments] = useState<BlogComment[]>(() => getFromStorage('wp_comments', defaultComments));

  useEffect(() => {
    if (!apiEnabled) return;
    apiRequest<{
      countries: Country[];
      programs: Program[];
      services: Service[];
      partners: Partner[];
      contacts: ContactMessage[];
      testimonials: Testimonial[];
      comments?: BlogComment[];
    }>('/api/content')
      .then((data) => {
        setCountries(data.countries);
        setPrograms(data.programs);
        setServices(data.services);
        setPartners(data.partners);
        setContacts(data.contacts);
        setTestimonials(data.testimonials);
        if (data.comments) setComments(data.comments);
      })
      .catch((error) => console.warn('MongoDB API unavailable, using local data:', error.message));
  }, []);

  const createRemote = async <T extends { id: string }>(
    resource: ResourceName,
    payload: Omit<T, 'id'>,
    replace: (saved: T) => void
  ) => {
    if (!apiEnabled) return;
    try {
      const saved = await apiRequest<T>(`/api/${resource}`, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      replace(saved);
    } catch (error) {
      console.warn(`Failed to create ${resource}:`, error);
    }
  };

  const updateRemote = async (resource: ResourceName, id: string, payload: unknown) => {
    if (!apiEnabled) return;
    try {
      await apiRequest(`/api/${resource}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.warn(`Failed to update ${resource}:`, error);
    }
  };

  const deleteRemote = async (resource: ResourceName, id: string) => {
    if (!apiEnabled) return;
    try {
      await apiRequest(`/api/${resource}/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.warn(`Failed to delete ${resource}:`, error);
    }
  };

  useEffect(() => { setToStorage('wp_countries', countries); }, [countries]);
  useEffect(() => { setToStorage('wp_programs', programs); }, [programs]);
  useEffect(() => { setToStorage('wp_services', services); }, [services]);
  useEffect(() => { setToStorage('wp_partners', partners); }, [partners]);
  useEffect(() => { setToStorage('wp_contacts', contacts); }, [contacts]);
  useEffect(() => { setToStorage('wp_testimonials', testimonials); }, [testimonials]);
  useEffect(() => { setToStorage('wp_comments', comments); }, [comments]);

  // Country CRUD
  const addCountry = (country: Omit<Country, 'id'>) => {
    const temp = { ...country, id: generateId() };
    setCountries(prev => [...prev, temp]);
    createRemote<Country>('countries', country, (saved) => {
      setCountries(prev => prev.map(c => c.id === temp.id ? saved : c));
    });
  };
  const updateCountry = (id: string, updates: Partial<Country>) => {
    setCountries(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    updateRemote('countries', id, updates);
  };
  const deleteCountry = (id: string) => {
    setCountries(prev => prev.filter(c => c.id !== id));
    deleteRemote('countries', id);
  };

  // Program CRUD
  const addProgram = (program: Omit<Program, 'id'>) => {
    const temp = { ...program, id: generateId() };
    setPrograms(prev => [...prev, temp]);
    createRemote<Program>('programs', program, (saved) => {
      setPrograms(prev => prev.map(p => p.id === temp.id ? saved : p));
    });
  };
  const updateProgram = (id: string, updates: Partial<Program>) => {
    setPrograms(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    updateRemote('programs', id, updates);
  };
  const deleteProgram = (id: string) => {
    setPrograms(prev => prev.filter(p => p.id !== id));
    deleteRemote('programs', id);
  };

  // Service CRUD
  const addService = (service: Omit<Service, 'id'>) => {
    const temp = { ...service, id: generateId() };
    setServices(prev => [...prev, temp]);
    createRemote<Service>('services', service, (saved) => {
      setServices(prev => prev.map(s => s.id === temp.id ? saved : s));
    });
  };
  const updateService = (id: string, updates: Partial<Service>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
    updateRemote('services', id, updates);
  };
  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    deleteRemote('services', id);
  };

  // Partner CRUD
  const addPartner = (partner: Omit<Partner, 'id'>) => {
    const temp = { ...partner, id: generateId() };
    setPartners(prev => [...prev, temp]);
    createRemote<Partner>('partners', partner, (saved) => {
      setPartners(prev => prev.map(p => p.id === temp.id ? saved : p));
    });
  };
  const updatePartner = (id: string, updates: Partial<Partner>) => {
    setPartners(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    updateRemote('partners', id, updates);
  };
  const deletePartner = (id: string) => {
    setPartners(prev => prev.filter(p => p.id !== id));
    deleteRemote('partners', id);
  };

  // Contact CRUD
  const addContact = (contact: Omit<ContactMessage, 'id'>) => {
    const temp = { ...contact, id: generateId() };
    setContacts(prev => [...prev, temp]);
    createRemote<ContactMessage>('contacts', contact, (saved) => {
      setContacts(prev => prev.map(c => c.id === temp.id ? saved : c));
    });
  };
  const updateContact = (id: string, updates: Partial<ContactMessage>) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    updateRemote('contacts', id, updates);
  };
  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id));
    deleteRemote('contacts', id);
  };

  // Testimonial CRUD
  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const temp = { ...testimonial, id: generateId() };
    setTestimonials(prev => [...prev, temp]);
    createRemote<Testimonial>('testimonials', testimonial, (saved) => {
      setTestimonials(prev => prev.map(t => t.id === temp.id ? saved : t));
    });
  };
  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
    updateRemote('testimonials', id, updates);
  };
  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    deleteRemote('testimonials', id);
  };

  // Comment CRUD
  const addComment = (comment: Omit<BlogComment, 'id' | 'createdAt'>) => {
    const temp = { ...comment, id: generateId(), createdAt: new Date().toISOString() } as BlogComment;
    setComments(prev => [...prev, temp]);
    createRemote<BlogComment>('comments', comment, (saved) => {
      setComments(prev => prev.map(c => c.id === temp.id ? saved : c));
    });
  };
  const updateComment = (id: string, updates: Partial<BlogComment>) => {
    setComments(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    updateRemote('comments', id, updates);
  };
  const deleteComment = (id: string) => {
    setComments(prev => prev.filter(c => c.id !== id));
    deleteRemote('comments', id);
  };

  return (
    <DataContext.Provider value={{
      countries, programs, services, partners, contacts, testimonials, comments,
      addCountry, updateCountry, deleteCountry,
      addProgram, updateProgram, deleteProgram,
      addService, updateService, deleteService,
      addPartner, updatePartner, deletePartner,
      addContact, updateContact, deleteContact,
      addTestimonial, updateTestimonial, deleteTestimonial,
      addComment, updateComment, deleteComment
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
