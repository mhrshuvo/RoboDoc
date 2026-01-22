
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author: Author;
  publishedAt: string;
  readingTime: string;
  thumbnail: string;
  faqs?: FAQItem[];
}

export type PageType = 'home' | 'post' | 'category' | 'search' | 'about' | 'contact' | 'privacy' | 'disclaimer' | '404';

export interface RouteState {
  page: PageType;
  slug?: string;
  category?: string;
  query?: string;
}
