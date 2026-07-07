export interface Post {
  id: string;
  author: string;
  author_name: string;
  title: string;
  slug: string;
  content: string;
  category: 'news' | 'blog' | 'announcement' | 'success_story';
  cover_image: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  cohort: string;
  title: string;
  media: string;
  media_type: 'image' | 'video';
  caption: string;
  captured_date: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  description: string;
}
