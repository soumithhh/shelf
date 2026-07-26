import React from 'react';
import { PostFrontmatter } from '../types';
import { marked } from 'marked';
import { ArrowLeft } from 'lucide-react';

interface PostDetailViewProps {
  post: PostFrontmatter;
  onBack: () => void;
}

export const PostDetailView: React.FC<PostDetailViewProps> = ({ post, onBack }) => {
  const renderedContent = marked.parse(post.content || '');

  return (
    <article className="post-detail">
      <button 
        onClick={onBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-sketch)',
          fontSize: '1.1rem',
          background: 'none',
          border: 'none',
          color: '#2563eb',
          cursor: 'pointer',
          marginBottom: '20px',
          fontWeight: 600
        }}
      >
        <ArrowLeft size={18} /> Back to Blog
      </button>

      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'var(--font-sketch)', fontSize: '2.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
          {post.title}
        </h1>
        <div style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
          Published on {post.date} {post.author ? `by ${post.author}` : ''} {post.category ? `| Category: ${post.category}` : ''}
        </div>
      </header>

      <div className="book-content-section" style={{ marginTop: '16px' }}>
        <div 
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </div>
    </article>
  );
};
