export interface BookFrontmatter {
  id: string;
  filename: string;
  layout: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
  finished_date: string;
  cover_image: string;
  summary: string;
  content: string;
}

export interface PostFrontmatter {
  id: string;
  filename: string;
  layout: string;
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export interface RepoFile {
  path: string;
  content: string;
}

export type ActiveTab = 'preview' | 'explorer' | 'add-content' | 'guide';
export type PageRoute = 'shelf' | 'book-detail' | 'blog' | 'post-detail';
